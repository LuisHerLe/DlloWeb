//Se crea función para capturar ID de los elementos a los que se da click, conversión de otros
//Se crea como una función autoejegutable

(function(){
  var operation= "";
  document.addEventListener("click", function printID(e){
    e = e || window.event;
    e = e.target || e.srcElement;

    console.log("Clase " + e.className);
    //Validar si donde se hace click pertenece a la calculadora
    if (e.className=="tecla") {
      operation  = e.id
      console.log("ID " + e.id);
      //Se crea efecto de presionar tecla
      var pressKey = document.getElementById(operation)
      pressKey.style.width="10%";
    }
      return e   // Se retorna el objeto para poder utilizar el ID em cualquier momento
  })
})()

//Patrón de módulo para las operaciones matemáticas


var pressKey = document.querySelectorAll(".tecla"); //Obtener todas las teclas

function validarCero(){
  var display = document.getElementById("tecla").textContent;
  if (display ==0){

  }
}
