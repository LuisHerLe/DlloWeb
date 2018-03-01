$(function(){
$("#c1 div :first-child()").remove() //Para eliminar del DOM un elemento

//var tmp = $("#c2").remove(); //Eliminar un elemento y guardarlo en una variable
var tmp = $("#c2").detach(); //Eliminar un elemento y guardarlo en una variable pero no elimina los estilos ni scripts
$("#r1col2").append(tmp); // Agregar nuevamente el elemento del DOM


});
