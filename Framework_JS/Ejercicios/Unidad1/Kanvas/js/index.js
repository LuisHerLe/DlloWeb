var stage = new Konva.Stage({ //Ubicar el contenedor y darle proporciones
      container: 'dibujo',
      width: 556,
      height: 316
    });

var layer = new Konva.Layer(); //Clase para nueva Capa (Contenedor de elementos)
var dragLayer = new Konva.Layer(); //Clase para nueva Capa (Contenedor de elementos)

function addStar(layer, stage) { //Función addStar
  var scale = Math.random();

  var star = new Konva.Star({
    x: Math.random() * stage.getWidth(), //Posición x
    y: Math.random() * stage.getHeight(), //Posición x
    numPoints: 5, //Número de puntas de la estrella
    innerRadius: 30, //Ancho interno de la estrella
    outerRadius: 50, //Largo de las puntas
    fill: 'red', //Color de la estrella
    opacity: 0.6, //Opaco
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
  // NOTE: Creación de animación para Rotación
  var angularSpeed = 90; //Revoluciones por segundo
  var period = 4000; //Tiempo para escalar animación

  var anim = new Konva.Animation(function(frame) {
      var angleDiff = frame.timeDiff * angularSpeed / 1000;
      var scale = Math.sin(frame.time * 2 * Math.PI / period) + 0.001;
        // scale x and y
        star.scale({ x :scale, y : scale});
      star.rotate(angleDiff);
  }, layer);

  anim.start();
}

for(var n = 0; n < 10; n++) { //Ciclo para adicionar 30 nuevas estrellas
  addStar(layer, stage);
}

stage.add(layer, dragLayer);
