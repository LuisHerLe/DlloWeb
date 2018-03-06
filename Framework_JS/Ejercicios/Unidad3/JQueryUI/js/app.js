/*1. Filtro de imágenes*/
function filterImg(selectFilter){
  console.log("Dió click en: " + selectFilter);
  $(".imgBox").hide();
  if (selectFilter == "todos"){
    $(".imgBox").show("fade", 2000);
  }
  if (selectFilter == "todos"){
    $(".imgBox").show("fade", 2000);
  }else if (selectFilter == "flores") {
    $("[src^='image/f']").parent().show("fade",2000)
  }else if (selectFilter == "deportes") {
    $("[src^='image/d']").parent().show("fade",2000)
  }else if (selectFilter == "carros") {
    $("[src^='image/c']").parent().show("fade",2000)
  }else if (selectFilter == "aviones") {
    $("[src^='image/a']").parent().show("fade",2000)
  }else if (selectFilter == "paisajes") {
    $("[src^='image/l']").parent().show("fade",2000)
  }
}


$(document).ready(function(){

/*1. Haz que la lista en la columna izquierda de categorías sea un menú*/
$("#menu").menu();

/*1. Y al hacer click en cada categoría sólo se muestren las fotos correspondientes.*/
$("#todos").click(function(){
  filterImg("todos");
  $(".imgBox").show();
})
$("#flores").click(function(){
  filterImg("flores");
})
$("#deportes").click(function(){
  filterImg("deportes");
})
$("#autos").click(function(){
  filterImg("carros");
})
$("#aviones").click(function(){
  filterImg("aviones");
})
$("#paisajes").click(function(){
  filterImg("paisajes");
})

//2. Implementa un widget que muestre adecuadamente la información de las categorías en la columna izquierda de la página.
$("#acordeon").accordion();

//3. Las imágenes se deben mostrar en una ventana con un tamaño más grande, y con un efecto especial para mostrar y ocultar al hacer click sobre ellas.
$(".imgBox")
.on("click", function(){
  var path = $(this).find("img").attr("src")
  console.log("Esta es el src: " + path);
  $("#dialogImage > img").attr("src", path);
  $("#dialogImage").dialog("open");
})
.draggable({
      start: function(){
        $(this)
          .off("click")
          .css("z-index","2")
      }
    })

  //4. Al arrastrar una imagen al contenedor “eliminar”, se deje de mostrar y se oculte con un efecto adecuado.
$(".trash").droppable({
  accept: ".imgBox",
  classes: {
    "ui-droppable-hover": "ContenedorDrop"
  },
  drop: function(event, ui){
   $(ui.draggable)
     .hide("clip", 1000)
     .removeClass("imgBox")
 }
})

//5. Al arrastrar una imagen al contenedor “favoritos” el color de fondo cambie, y se ubique la imagen en el contenedor. Después de ubicar la imagen, ésta ya no podrá ser arrastrada.
//Definición de la interacción droppable sobre el contenedor de favoritos
$(".favoritos").droppable({
  accept: ".imgBox",
  classes: {
    "ui-droppable-hover": "ContenedorDrop"
  },
  drop: function(event, ui){
    $(ui.draggable)
      .css({
        width: "100%",
        position: "relative",
        left: "auto",
        top: "auto"
      })
      .draggable("destroy")
      .addClass("imgBoxFav")
      .removeClass("imgBox")
      .appendTo($(this))
  }
})


})
