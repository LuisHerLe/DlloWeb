
$(function(){
  $("#btn-vaca").click(function(){
    $("#vaca").show("slow");
  });

  $("#btn-cerdo").click(function(){
    $("#cerdo").show("fast");
  });

  $("#btn-gallina").click(function(){
    $("#gallina").show("8000"); //Milisegundos
  });

  $("#btn-oveja").click(function(){
    //$("#oveja").show("slow","swing"); //Milisegundos
    //$("#oveja").show("slow","linear"); //Milisegundos
    $("#oveja").show(3200, function(){
      $("#mensaje").text("Oveja") //Función con callback que se ejecuta luego de mostrar la oveja
    })
  });
});
