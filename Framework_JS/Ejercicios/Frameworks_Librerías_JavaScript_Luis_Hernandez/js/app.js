
$(document).ready(function(){

  // NOTE: Punto 1: Animación del título Match Game #DCFF0E
  $(".main-titulo").mousemove(function(){
    $(".main-titulo").animate({
      color: "#DCFF0E"
    }, 1000 );
  });
  $(".main-titulo").mousemove(function(){
    $(".main-titulo").animate({
      color: jQuery.Color({ saturation: 0 })
    }, 1000 );
  });

  // NOTE: Punto 2: Se generan las imágenes de forma aleatoria
  getCandies();
})

// NOTE: Punto 2: Se generan las imágenes de forma aleatoria, primero se crea la estructura dentro del DOM
function getCandies(){

//Se recorren las columnas
for (var i = 1; i < 8; i++) {
  var colName = ".panel-tablero .col-"+i
  console.log("Se va a crear la estructura para la columna:" + colName);
//Se recorren las filas
for (var r = 1; r < 7; r++) {
  var rowNew = $("<div class=data-info row-"+r+">"+r+"</div>")
  console.log("Se va a crear la estructura para la fila: col-"+ r);
  rowNew.appendTo(colName);
}

}
}
