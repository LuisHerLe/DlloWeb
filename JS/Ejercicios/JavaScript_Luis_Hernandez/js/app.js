//Se crea función para capturar ID de los elementos a los que se da click, conversión de otros
//Se crea como una función autoejegutable
var Calculadora = (function(){
  var key= ""; //Variable auxiliar para almacenar los Id's
  var operator = ""; // Variable para indicar la operación
  var num1 = 0; //Número 1
  var num2 = 0; //Número 2
  var contNum = 1; //Variable para contar números
  var sw = false; //Saber si ya se presionó alguna tecla de operacion (+ - * /)

  document.addEventListener("click", function printID(e){
    e = e || window.event;
    e = e.target || e.srcElement;

    console.log("Clase " + e.className);
    //Validar si donde se hace click pertenece a la calculadora
    classAux = e.className;
    if (classAux =="tecla") {
      key = e.id //Capturar el ID en una variable para darle manejo en las demás funnciones
      document.getElementById(key).onmousedown = pressKey(key);
      document.getElementById(key).onmouseup = unpressKey(key);
    }else {
      key = "";
    }
    console.log("ID " + e.id + "ClassName: " + classAux);
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
        alert("No puedes presionar la tecla " + key + " Si la calculadora está en cero") //No se permite utilizar teclas de operaciones o 0 si el display está en 0
      }else if (key =="raiz") {
        alert("La operación " + key + " no está disponible en el momento!") //Se deshabilitan las operaciones sign y raiz
      }else if(key == "on"){
        //Se deja en 0 la calculadora y se clarea la variable para el switch de operaciones
        clearDisplay();
      }else if (key=="igual"){
        num2 = document.getElementById("display").textContent //Almacenar el número 2
        console.log("Número 2: " + num2);
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
            console.log("Key " + key);
            if ((key == "+" || key == "-" || key == "*" || key == "/") && sw == false) {
              num1 = document.getElementById("display").textContent;
              console.log("Número 1: " + num1);
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
        document.getElementById("display").innerHTML = result;
        console.log("Vamos a sumar");
        break;

        case "restar":
        result = num1 - num2;
        document.getElementById("display").innerHTML = result;
        console.log("Vamos a restar");
        break;

        case "multiplicar":
        result = num1 * num2;
        document.getElementById("display").innerHTML = result;
        console.log("Vamos a multiplicar");
        break;
        case "dividir":
        result = num1 / num2;

        console.log(result.toPrecision(6));
        document.getElementById("display").innerHTML = result.toPrecision(4);
        console.log("Vamos a dividir");
        break;
        default:
        alert("No vamos hacer nada")
      }
    }
    function pressKey(key){
      document.getElementById(key).style.textShadow = "1px 1px 1px #666";
      document.getElementById(key).style.width = "2%";
    }
    function unpressKey(key){
      document.getElementById(key).textShadow = "5px 5px 5px #666";
      document.getElementById(key).style.width = "22%";
    }
  })
})()
