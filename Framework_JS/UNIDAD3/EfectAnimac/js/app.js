

$(function(){

  $("body").dblclick(function(){
    /*Fade in, muestra lo elementos. Para regular la duración fadeIn("slow","fast", milisegundos) ó
      fadeIn("slow", "linear", function())
    */
    $(".oculto").fadeIn(4000,function(){console.log("Animación terminada")});
  })

  //Codigo para la captura
   /*$(document).keypress(function(event){
     if (event.which == 111) {
       $(".oculto").fadeOut('slow','linear');
     }
   })*/

  //Codigo para la captura
  $(document).keypress(function(event){
    if (event.which == 111) {
      $(".oculto").fadeToggle('slow','linear');
    }
    if (event.which == 112) {
      $(".panel-estadisticas").slideDown(500);
    }
 })

/*$(document).keypress(function(event){
    if (event.which == 111) {
      $(".oculto").fadeToggle('slow','linear');
    }
    if (event.which == 112) {
      $(".panel-estadisticas").slideToggle('fast');
    }
  })*/

})
