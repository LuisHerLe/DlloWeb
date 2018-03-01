
$(function(){

$("#btn-vaca").click(function(){
  $("#vaca").hide();
})

//Los parámetros que recibe son tiempo, easier y callback
$("#btn-gallina").click(function(){
  $("#gallina").hide(4000,"linear",function(){
    $("#mensaje").text("Se ocultó la gallina :D")
  });
})

//toglle() Es para alternar entre el show y el hide

$("#btn-cerdo").click(function(){
  $("#cerdo").toggle();
})

$("#btn-oveja").click(function(){
  $("#oveja").toggle(4000,"swing",function(){
    $("#mensaje").text("Alternando la oveja :D")
  });
})

});
