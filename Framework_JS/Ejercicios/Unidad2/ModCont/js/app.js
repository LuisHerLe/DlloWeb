$( document ).ready(function() {

  //Evento para el botón mas (+)
  $("#mas").click(function(){
    $(".zona-juego").append("<img src='image/back.jpg' class='carta'>");
  });

  //Evento para el botón menos (-)
  $("#menos").click(function(){
    $(".carta:last-child").remove();
  });

  //Evento al hacer click en una carta
  $(document).on("click", "img.carta", function(){
    var aleatorio = Math.round(Math.random()*45);
    var carta = "image/"+aleatorio+".png"
    $(this).attr("src",carta);
    console.log(aleatorio);
    console.log(carta);
  });

  //Evento de hover
  $(document).on({
    //Función al mouse estar sobre la carta
    mouseenter: function(){
      $(this).addClass("carta-seleccionada");
      $(this).css("border","2px solid yellow")
    },

    //Función al mouse dejar la carta
    mouseleave: function(){
      $(this).removeClass("carta-seleccionada");
      $(this).css("border","none")
    }
  }, "img.carta");


});
