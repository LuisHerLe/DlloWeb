$(document).ready(function(){

  //Punto 1 Al presionar el botón de cada animal, debe aparecer la imagen con el id vaca, cerdo, gallina u oveja, según corresponda. Al presionar nuevamente el botón, si la imágen está mostrada, debe esconderse. Al finalizar la acción debe mostrarse un letrero
  $("#btn-vaca").click(function(){
    $("#mensaje").text("");
    $("#vaca").toggle(2000,"swing",function(){
      $("#mensaje").text("La vaca hace muuu");
    })
  });

  $("#btn-cerdo").click(function(){
    $("#mensaje").text("");
    $("#cerdo").toggle(2000,"swing",function(){
      $("#mensaje").text("El cerdo hace oink");
    })
  });

  $("#btn-gallina").click(function(){
    $("#mensaje").text("");
    $("#gallina").toggle(2000,"swing",function(){
      $("#mensaje").text("La gallina hace cloac");
    })
  });

  $("#btn-oveja").click(function(){
    $("#mensaje").text("");
    $("#oveja").toggle(2000,"swing",function(){
      $("#mensaje").text("La oveja hace beee");
    })
  });

//Punto 2: Cambiar cursor por unas tijeras
$("#bCorte").click(function(){
  $("body").css("cursor","url('img/cut.png'), auto");
});

//Punto 3: Cambiar cursor por una herramienta
$("#bConstruir").click(function(){
  $("body").css("cursor","url('img/build.png'), auto");
  $("h1").text("La Granja").html("Construye una cerca");
  $(".cerca, .animalP").show();
});


//Punto 4 cortar los arbustos

$(".arbusto").mouseover(function(){
    esTijera = $("body").css("cursor");
    if (esTijera.indexOf("cut")!="-1"){
      $(this).hide(2000,"linear");
    }
});

//Punto 5 Arrastrar animales y cercas
$(".cerca, .animalP").mousedown(function(){
  var self = $(this);
  $(this).on('dragstart', function(event) {
    event.preventDefault();
  });
  esHerramienta = $("body").css("cursor");
  if (esHerramienta.indexOf("build")!="-1"){
  //Función anidada que cambia la posición del elemento si se presiona el click y se mueve
  $("body").mousemove(function(event){
    self.css("left", function(){
      var newLeft = event.pageX;
      return newLeft+"px";
    });
    self.css("top", function(){
      var newLeft = event.pageY;
      return newLeft+"px";
    });
  });
  }
});

// Función que posiciona el elemento en la ubicación en que el mouse se levanta
$("body").mouseup(function(event){
  $(this).off("mousemove");
  var x = $(event.target).css("left");
  var y = $(event.target).css("top");
  $(event.target).css("left",x);
  $(event.target).css("top",y);
});

//Punto 6
//Función que posiciona el elemento en la ubicación en que el mouse se levanta
$("body").mouseup(function(event){
  $(this).off("mousemove");
  var x = $(event.target).css("left");
  var y = $(event.target).css("top");
  $(event.target).css("left",x);
  $(event.target).css("top",y);
});

//Punto 7 Volver al cursor normal
$("#bCursor").click(function(){
  $("body").css("cursor","auto");
})

})
