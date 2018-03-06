$(function(){

  $(".caja").draggable() //Arrastrar elementos

  $(".contenedor")
    .droppable({ //Permite arrastrar el elemento a un contenedor
      accept: ".izq",
      drop: function(event, ui){
        $(this).addClass("ui-state-highlight")
        alert("Correcto!")
      }
    })
    .resizable({
      animate: true
    })

  $(".lista").sortable({
    placeholder: "nuevo"
  })

})
