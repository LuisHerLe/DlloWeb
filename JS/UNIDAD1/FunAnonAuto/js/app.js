/*
Sintaxis función autoejecutables

(function(){
  //Código de la función
})()
*/

/*
Sintaxis función anònimas
Consta en recibir en una función otra función como parámetro

function saludar(nombre, Function(){
 //Código de la función
})
*/


//Funciones anónimas
setInterval(function(){console.log("Mensaje repetitivo");},2000);
setTimeout(function(){console.log("Mensaje luego de espera");},2000);

//Funciones callback
function personalizada(num1, num2, funcion2){
  var resu = num1 + num2;
  funcion2(resu)
}

personalizada(4,8,function(resu){alert(resu);});

//funciones autoejecutables
(function(){
  console.log(this); //This es igual a window
})();

(function(nombre, apellido){
  console.log(nombre + " " + apellido);
})("Andres", "Monsalve");

var myObjet ={
  property: "Hola Mundo",
  func: function(){
    return this.property;
  }
};
console.log(myObjet.func());
var myObjet2={
  property:"Hola Mundo!"
};
function retornarPropiedad(){
  alert(this.property);
}

myObjet2.f = retornarPropiedad;
myObjet2.f();
