
var pressKey = document.querySelectorAll(".tecla"); //Obtener todas las teclas
/* pressKey[15].id // Obtener el ID*/
function validarCero(){
  var display = document.getElementById("tecla").textContent;
  if (display ==0){

  }
}
/*
pressKey[15].onclick = function(){
    validarCero();
}
for (var i = 0; i < pressKey.length; i++) {
  var display = document.getElementById("display").textContent
  if (display==0) {
    alert("No puedes presionar la tecla" + pressKey[i].textContent + " teniendo la calculadora en 0")
  }pressKey[i]
}
*/
/*document.getElementById("tecla").addEventListener("click",validarCero)*/

//Se crea función para capturar ID de los elementos a los que se da click
function printID(e){
  e = e || window.event;
  e = e.target || e.srcElement;
  console.log("ID " + e.id);
}
