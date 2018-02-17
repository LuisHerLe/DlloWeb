var width = window.innerWidth; //capturar todo el alto de la página
var height = window.innerHeight; //capturar todo el ancho de la página

var tween = null;

function addStar(layer, stage) { //Función addStar
  var scale = Math.random();

  var star = new Konva.Star({
    x: Math.random() * stage.getWidth(), //Posición x
    y: Math.random() * stage.getHeight(), //Posición x
    numPoints: 5, //Número de puntas de la estrella
    innerRadius: 30, //Ancho interno de la estrella
    outerRadius: 50, //Largo de las puntas
    fill: '#89b717', //Color de la estrella
    opacity: 0.8, //Opaco
    draggable: true, //Permitir arrastrar
    scale: {
      x : scale,
      y : scale
    },
    rotation: Math.random() * 180, //Rotación inicial de las estrellas
    shadowColor: 'black', //Color de la sombra
    shadowBlur: 10, //Distorción sombra (Entre más alto el #, más opaco)
    shadowOffset: { //Movimiento de Desenfoque sombra
      x : 5,
      y : 5
    },
    shadowOpacity: 0.6, //Opacidad sombra
    // custom attribute
    startScale: scale
  });

  layer.add(star); //Agregar al layer la estrella
}
var stage = new Konva.Stage({ //Clase para nuevo escenario (Contenedor de capas)
  container: 'container',
  width: width,
  height: height
});

var layer = new Konva.Layer(); //Clase para nueva Capa (Contenedor de elementos)
var dragLayer = new Konva.Layer(); //Clase para nueva Capa (Contenedor de elementos)

for(var n = 0; n < 30; n++) { //Ciclo para adicionar 30 nuevas estrellas
  addStar(layer, stage);
}

stage.add(layer, dragLayer);

stage.on('dragstart', function(evt) {
  var shape = evt.target;
  // moving to another layer will improve dragging performance
  shape.moveTo(dragLayer);
  stage.draw();

  if (tween) {
    tween.pause();
  }
  shape.setAttrs({
    shadowOffset: {
      x: 15,
      y: 15
    },
    scale: {
      x: shape.getAttr('startScale') * 1.2,
      y: shape.getAttr('startScale') * 1.2
    }
  });
});

stage.on('dragend', function(evt) {
  var shape = evt.target;
  shape.moveTo(layer);
  stage.draw();
  shape.to({
    duration: 0.5,
    easing: Konva.Easings.ElasticEaseOut,
    scaleX: shape.getAttr('startScale'),
    scaleY: shape.getAttr('startScale'),
    shadowOffsetX: 5,
    shadowOffsetY: 5
  });
});
