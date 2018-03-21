
$(document).ready(function(){

  // NOTE: Punto 1: Animación del título Match Game #DCFF0E
  setInterval(function(){
    $(".main-titulo").stop().animate({color:'white'},1000);
    $(".main-titulo").animate({color:'#DCFF0E'},1000);
  },1800)

  // NOTE: Punto 2: Se generan las imágenes de forma aleatoria
  getRowCandies();

  // NOTE:Punto 6. Se reinicia contenido al dar click al botón cuando este diga "Reiniciar"
  $(".btn-reinicio").click(function(){
    var contButton = $(".btn-reinicio").html();
    if (contButton == "Iniciar") {
      $(".btn-reinicio").html("Reiniciar");
      //$("#timer").html("AAA");
    //  $("#timer").countdown({startTime: "00:00:02:00"});

      setInterval(backTime,1000);

      $("img").draggable(); // NOTE: Punto 7: Se habilita el movimiento de las fichas
    }else {
      location.reload();
    }
  })
})


// NOTE: Punto 2: Se generan las imágenes de forma aleatoria, primero se crea la estructura dentro del DOM
function getRowCandies(){

  //Se recorren las columnas
  for (var i = 1; i < 8; i++) {
    var colName = ".panel-tablero .col-"+i
    console.log("Se va a crear la estructura para la columna:" + colName);
    //Se recorren las filas
    for (var r = 1; r < 8; r++) {
      var rowNew = $("<div class=row-"+r+"><img src='' alt=''></div>")
      console.log("Se va a crear la estructura para la fila: col-"+ r);
      rowNew.appendTo(colName);
      getImgCandies(rowNew);
    }
  }
}

function getImgCandies(rowNew){
  var candyRandom = Math.round(Math.random()*4);
  if (candyRandom == 0) {
    candyRandom++
  }
  var newCandy = "image/"+candyRandom+".png"
  rowNew.find("img").attr("src",newCandy);
}

function backTime(){

}
