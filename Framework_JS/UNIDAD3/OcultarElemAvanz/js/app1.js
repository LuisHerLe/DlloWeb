$(function(){
$("#c1 div :first-child()").remove() //Para eliminar del DOM un elemento

//var tmp = $("#c2").remove(); //Eliminar un elemento y guardarlo en una variable
var tmp = $("#c2").detach(); //Eliminar un elemento y guardarlo en una variable pero no elimina los estilos ni scripts
console.log("se elimina el elemendo con id c2");
$("#r1col2").append(tmp); // Agregar nuevamente el elemento del DOM

//empty se encarga de eliminar todo el contenido y sus descendientes (Dejarlo vacío)
$("#c3 .card-content").empty()

//unwrap sube un nivel al elemento seleccionado al eliminar a su padre directo
$("#c4 .card-content").unwrap()
});
