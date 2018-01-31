var suma = 4 + 6;
var resta = 54 - 33
var multiplicacion = 8 * 4
var division = 48 /4

console.log("Suma: " + suma + ", Resta: " + resta + ", Multiplicación: " + multiplicacion + ", División: " + division);

console.log("****************************************");


// NOTE: Módulo: Verifica sin un número es par o impar
var modulo = 9 % 3
console.log(modulo);

var num = 20
// NOTE: Incremento
var incremento = ++num
console.log("Incremento: " + incremento);
// NOTE: decremento
var decremento = --num
console.log("Decremento: " + decremento);

// NOTE: Operadores lógicos
var x = true
var not = (!x);
console.log(not);

var y = false
console.log((!x && y));

// NOTE: Evaluar Operadores

function evaluarPar(numero1, numero2){
  if((numero1 % 2)==0 && (numero2 % 2)==0){
    alert("Los dos números son pares!")
  }
}
evaluarPar(2,4);

function evaluar1Par(numero1, numero2){
  if((numero1 % 2)==0 || (numero2 % 2)==0){
    alert("Al menos un número es par")
  }else{
    alert("Ninguno de los dos números es par")
  }
}
evaluar1Par(3,3);
