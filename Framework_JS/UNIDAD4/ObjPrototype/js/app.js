
/*
Método

Funcionalidad

String.prototype.anchor()

Permite añadir un elemento DOM de tipo <a> con el texto String y la cadena de caracteres que se pase como parámetro al método que en el innerHTML.

String.prototype.bold()

Permite añadir un elemento DOM de tipo <b> con el texto del String, al que se asocia el método, en el innerHTML.

String.prototype.link()

Permite crear un link con la cadena de caracteres a la que se le aplique el método prototype.link y asignarle el url que se pase como parámetro de esta función.

Ejemplo: cadena_caracteres.prototype.link(url);

String.prototype.italics()

Permite crear un elemento DOM de tipo <i> con el texto en el innerHTML que se pase como atributo.

String.prototype.sub()

Permite crear un elemento DOM con el texto del objeto String al que se asocia el método.
*/

/* Camelize: Elimina los guiones medios que puedan haber y pone la primer letra de la segunda palabra en mayúscula
var mString = "hello-world"
var mStringCam = mString.camelize()
console.log(mStringCam);
*/

/* Capitalize: Reemplaza la letra inicial de una palabra por una mayúscula

var mString = "hello World"
var mStringcAP = mString.capitalize();
console.log(mStringcAP);
*/

/*Empty: Sirve para validar si una variable se encuentra vacía


var mstring = ""
var mStringEmpty = mstring.empty()
console.log(mStringEmpty);
*/

/* Include: Sirve para buscar una cadena de texto dentro de otra, es necesario pasarla como argumento
var mString ="Te amo leslie"
var mInclude = mString.include("leslie")
console.log(mInclude);
*/
