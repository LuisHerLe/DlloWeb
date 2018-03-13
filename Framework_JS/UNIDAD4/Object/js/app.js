// NOTE: Definir array
// NOTE: Es array
  /*var mArray = ["pera", "manzana", "Banano", "Leslie no me ignores"]
  var tipo = Object.isArray(mArray);
  console.log(tipo);*/

  // NOTE: No es array
/*var mString = "Cadena"
console.log(Object.isArray(mString));
*/

// NOTE: Esta función solo retornará true si el objeto fue instanciado como ner Date
/*var currentDate = new Date();
var tipo = Object.isDate(currentDate)
console.log(tipo);
var fechaString = "2018/08/15"
console.log(Object.isDate(fechaString));
*/

// NOTE: idElement: Esta función evalúa si es objeto que le enviamos como argumento de una instancia o elemento de tipo DOM
// NOTE: True
var element = document.createElement("h1")
var tipo = Object.isElement(element);
console.log(tipo);

// NOTE: False
var divString = "<div></div>"
console.log(Object.isElement(divString));
