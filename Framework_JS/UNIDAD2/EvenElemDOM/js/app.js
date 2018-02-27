

$(function(){
  $("#nombre").focus(function(){
      $(".escondido").css("display", "block");
      $("#mensaje").text("En este campo debes escribir tu nombre completo");
  });

  $("#nombre").blur(function(){ //Cuando no esté seleccionado
      $(".escondido").css("display", "none");
  });

  $("#elementoSelector").change(function(){ //Select, radio y check
      $(".escondido").css("display", "block").delay(1000).fadeOut("slow");
      $("#mensaje").text("Cambiaste la opción del select");
  });

  $("#texto").select(function(){
    $(".escondido").css("display", "block").delay(1000).fadeOut("slow");
    $("#mensaje").text("Seleccionaste un texto!");
  });

  $("form").submit(function(){
    $(".escondido").css("display", "block").delay(1000).fadeOut("slow");
    $("#mensaje").text("Enviaste el formulario!");
    event.preventDefault();
  });

});
