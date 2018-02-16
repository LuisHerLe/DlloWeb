//Se crea función para capturar ID de los elementos a los que se da click, conversión de otros
//Se crea como una función autoejegutable

var Calculadora = (function(){
  var key= ""; //Variable auxiliar para almacenar los Id's
  var operator = ""; // Variable para indicar la operación
  var num1 = 0; //Número 1
  var num2 = 0; //Número 2
  var contNum = 1; //Variable para contar números
  var sw = false; //Saber si ya se presionó alguna tecla de operacion (+ - * /)


  //Se asigna manualmente los efectos a cada tecla
var on = document.getElementById("on");
var sign = document.getElementById("sign");
var root = document.getElementById("raiz");
var divition = document.getElementById("dividido");
var multiplication = document.getElementById("por");
var subtraction = document.getElementById("menos");
var point = document.getElementById("punto");
var equal = document.getElementById("igual");
var sum = document.getElementById("mas");
var zero = document.getElementById("0");
var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eigth = document.getElementById("8");
var nine = document.getElementById("9");


//Se crea el estilo para cada teclas
on.addEventListener("mousedown",function(){
  on.setAttribute("style","transform:scale(0.96,0.96)")
})
on.addEventListener("mouseup",function(){
  on.setAttribute("style","transform:scale(1,1)")
})

sign.addEventListener("mousedown",function(){
  sign.setAttribute("style","transform:scale(0.96,0.96)")
})
sign.addEventListener("mouseup",function(){
  sign.setAttribute("style","transform:scale(1,1)")
})

root.addEventListener("mousedown",function(){
  root.setAttribute("style","transform:scale(0.96,0.96)")
})
root.addEventListener("mouseup",function(){
  root.setAttribute("style","transform:scale(1,1)")
})

divition.addEventListener("mousedown",function(){
  divition.setAttribute("style","transform:scale(0.96,0.96)")
})
divition.addEventListener("mouseup",function(){
  divition.setAttribute("style","transform:scale(1,1)")
})

multiplication.addEventListener("mousedown",function(){
  multiplication.setAttribute("style","transform:scale(0.96,0.96)")
})
multiplication.addEventListener("mouseup",function(){
  multiplication.setAttribute("style","transform:scale(1,1)")
})

subtraction.addEventListener("mousedown",function(){
  subtraction.setAttribute("style","transform:scale(0.96,0.96)")
})
subtraction.addEventListener("mouseup",function(){
  subtraction.setAttribute("style","transform:scale(1,1)")
})

point.addEventListener("mousedown",function(){
  point.setAttribute("style","transform:scale(0.96,0.96)")
})
point.addEventListener("mouseup",function(){
  point.setAttribute("style","transform:scale(1,1)")
})

equal.addEventListener("mousedown",function(){
  equal.setAttribute("style","transform:scale(0.96,0.96)")
})
equal.addEventListener("mouseup",function(){
  equal.setAttribute("style","transform:scale(1,1)")
})

sum.addEventListener("mousedown",function(){
  sum.setAttribute("style","transform:scale(0.96,0.96)")
})
sum.addEventListener("mouseup",function(){
  sum.setAttribute("style","transform:scale(1,1)")
})

zero.addEventListener("mousedown",function(){
  zero.setAttribute("style","transform:scale(0.96,0.96)")
})
zero.addEventListener("mouseup",function(){
  zero.setAttribute("style","transform:scale(1,1)")
})

one.addEventListener("mousedown",function(){
  one.setAttribute("style","transform:scale(0.96,0.96)")
})
one.addEventListener("mouseup",function(){
  one.setAttribute("style","transform:scale(1,1)")
})

two.addEventListener("mousedown",function(){
  two.setAttribute("style","transform:scale(0.96,0.96)")
})
two.addEventListener("mouseup",function(){
  two.setAttribute("style","transform:scale(1,1)")
})

three.addEventListener("mousedown",function(){
  three.setAttribute("style","transform:scale(0.96,0.96)")
})
three.addEventListener("mouseup",function(){
  three.setAttribute("style","transform:scale(1,1)")
})

four.addEventListener("mousedown",function(){
  four.setAttribute("style","transform:scale(0.96,0.96)")
})
four.addEventListener("mouseup",function(){
  four.setAttribute("style","transform:scale(1,1)")
})

five.addEventListener("mousedown",function(){
  five.setAttribute("style","transform:scale(0.96,0.96)")
})
five.addEventListener("mouseup",function(){
  five.setAttribute("style","transform:scale(1,1)")
})

six.addEventListener("mousedown",function(){
  six.setAttribute("style","transform:scale(0.96,0.96)")
})
six.addEventListener("mouseup",function(){
  six.setAttribute("style","transform:scale(1,1)")
})

seven.addEventListener("mousedown",function(){
  seven.setAttribute("style","transform:scale(0.96,0.96)")
})
seven.addEventListener("mouseup",function(){
  seven.setAttribute("style","transform:scale(1,1)")
})

eigth.addEventListener("mousedown",function(){
  eigth.setAttribute("style","transform:scale(0.96,0.96)")
})
eigth.addEventListener("mouseup",function(){
  eigth.setAttribute("style","transform:scale(1,1)")
})

nine.addEventListener("mousedown",function(){
  nine.setAttribute("style","transform:scale(0.96,0.96)")
})
nine.addEventListener("mouseup",function(){
  nine.setAttribute("style","transform:scale(1,1)")
})

  document.addEventListener("click", function printID(e){
    e = e || window.event;
    e = e.target || e.srcElement;
    //Validar si donde se hace click pertenece a la calculadora
    classAux = e.className;
    if (classAux !="") {
      if (classAux !="teclado"){
        key = e.id; //Capturar el ID en una variable para darle manejo en las demás funciones
      }
    }
    else {
      key = "";
    }
    validateDisplay();
    function validateDisplay(){

      var display = document.getElementById("display").textContent //Obtener el display
      if (classAux == "tecla suma"){ //Asignar a las variables las operaciones
        key = "+";
        operator = "sumar";
      }else if(classAux == "tecla multiplica") {
        key = "*";
        operator = "multiplicar"
      }else if(classAux == "tecla resta") {
        key = "-";
        operator = "restar"
      }else if(classAux == "tecla divide") {
        key = "/";
        operator = "dividir"
      }else if (e.id == "punto") {
        key = "."
      }

      if ((display == "0") && (key =="0" || key == "+" || key == "*" || key == "-" || key == "/" || key =="sign")){
        console.log("No puedes presionar la tecla " + key + " Si la calculadora está en cero") //No se permite utilizar teclas de operaciones o 0 si el display está en 0
      }else if (key =="raiz") {
        console.log("La operación " + key + " no está disponible en el momento!") //Se deshabilitan las operaciones sign y raiz
      }else if(key == "on"){
        //Se deja en 0 la calculadora y se clarea la variable para el switch de operaciones
        clearDisplay();
      }else if (key=="igual"){
        num2 = document.getElementById("display").textContent //Almacenar el número 2
        getOperation(num1, num2,operator); //Se generar para empezar la operación
      }else if (classAux.indexOf("tecla") !=-1) {
        //Digitar y mostrar en Display solo si pertenece a la calculadora
        setDisplay(sw);
      }

    }
    function clearDisplay(){
      operator = "";
      contNum = 1;
      document.getElementById("display").innerHTML ="0"
    }
    function setDisplay(sw){

      if (contNum <8) {

        var aux = document.getElementById("display").textContent //Variable auxiliar para manejar el contenido del display
        if (aux=="0") { //Validar si el display está en 0 reemplazar el display
          if (key == ".") {
            document.getElementById("display").innerHTML = "0" + key;
          }else {
            document.getElementById("display").innerHTML = key;
          }
        }else {
          if (aux.indexOf(".") != -1  && key == ".") {
            console.log("No se permite ingresar más de un punto");
          }else {
            if ((key == "+" || key == "-" || key == "*" || key == "/") && sw == false) {
              num1 = document.getElementById("display").textContent;
              sw = true;
              document.getElementById("display").innerHTML = "";
            }else if (key == "sign") {
              display = document.getElementById("display").textContent;
              display = -parseInt(display);
              document.getElementById("display").textContent = display;
            }else {
              document.getElementById("display").innerHTML = aux + key;
              contNum++;
            }

          }
        }
      }

    }

    function getOperation(num1, num2, operator){
      console.log("Número 1: " + num1 + " Número 2: " + num2 + " Operación: " + operator);
      var result = "";
      switch (operator) {
        case "sumar":
        result = parseInt(num1) + parseInt(num2);
        document.getElementById("display").innerHTML = result.toPrecision(4);
        console.log("Vamos a sumar");
        break;

        case "restar":
        result = parseInt(num1) - parseInt(num2);
        document.getElementById("display").innerHTML = result.toPrecision(4);
        console.log("Vamos a restar");
        break;

        case "multiplicar":
        result = parseInt(num1) * parseInt(num2);
        document.getElementById("display").innerHTML = result.toPrecision(4);
        console.log("Vamos a multiplicar");
        break;

        case "dividir":
        result = parseInt(num1) / parseInt(num2);
        console.log("Contando: " + result.length);
        console.log(result.toPrecision(6));
        document.getElementById("display").innerHTML = result.toPrecision(4);
        console.log("Vamos a dividir");
        break;

        default:
        console.log("Acción no permitida")
      }
    }
  }
)
})();
