/*function evalParams(elementId, tipoSelector, tiempoEspera){

}


// NOTE: Para que sirve el argumentNames
var functionParams = evalParams.argumentNames()
console.log(functionParams)

*/
// NOTE: Poner en funcionamiento el bindAsEventListene
/*var alertarClick = Class.create({
  initialize: function(mensaje){
    this.rsj = mensaje
  },
  capturarClick: function(event){
    event.stop()
    console.log(this);
    alert(this.rsj)
  }
});

var miAlerta= new alertarClick("Hiciste click sobre el botón");
$("btnAlerta").observe("click", miAlerta.capturarClick.bind(miAlerta));
*/

// NOTE: Poner en funcionamiento el defer
/*function mostrarAlerta(mensaje){
  console.log(mensaje);
}
mostrarAlerta("Uno");
mostrarAlerta.defer("Dos");
mostrarAlerta("Tres");
*/

// NOTE: Poner en funcionamiento el delay
function mostrarAlerta(mensaje){
  console.log(mensaje);
}
mostrarAlerta.delay(5, "Se ejecutó 5 segundos después");
