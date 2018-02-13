//Se crea función para capturar ID de los elementos a los que se da click, conversión de otros
//Se crea como una función autoejegutable
var Calculadora = (function(){
  var key= ""; //Variable auxiliar para almacenar los Id's
  var operator = ""; // Variable para indicar la operación
  var num1 = ""; //Número 1
  var num2 = ""; //Número 2
  var contNum = 0; //Variable para contar números

  document.addEventListener("click", function printID(e){
    e = e || window.event;
    e = e.target || e.srcElement;

    console.log("Clase " + e.className);
    //Validar si donde se hace click pertenece a la calculadora
    if (e.className=="tecla") {
      key = e.id
    }else {
      key = "";
    }
    console.log("ID " + e.id + "ClassName: " + e.className);
    validateDisplay()
    function validateDisplay(){
      var display = document.getElementById("display").textContent //Obtener el display
     if (e.className == "tecla suma"){
        key = "+";
        operator = "sumar";
      }else if(e.className == "tecla multiplica") {
        key = "*";
        operator = "multiplicar"
      }else if(e.className == "tecla resta") {
        key = "-";
        operator = "restar"
      }else if(e.className == "tecla divide") {
        key = "/";
        operator = "dividir"
      }else if (e.id == "punto") {
        key = "."
      }

      if ((display == "0") && (key =="0" || key == "+" || key == "*" || key == "-" || key == "/")){
        alert("No puedes presionar la tecla " + key + " Si la calculadora está en cero") //No se permite utilizar teclas de operaciones o 0 si el display está en 0
      }else if (key =="sign" || key =="raiz") {
        alert("La operación " + key + " no está disponible en el momento!") //Se deshabilitan las operaciones sign y raiz
      }else if(key == "on"){
        //Se deja en 0 la calculadora y se clarea la variable para el switch de operaciones
        clearDisplay();
      }else if (key=="igual"){
        //Acá va el código de la operación
      }else {
        //Digitar y mostrar en clearDisplay
        setDisplay();
      }

    }
    function clearDisplay(){
      operator = "";
      document.getElementById("display").innerHTML ="0"
    }
    function setDisplay(){
      if (contNum <8) {
        var aux = document.getElementById("display").textContent
        if (aux=="0") {
          document.getElementById("display").innerHTML = key;
        }else {
            document.getElementById("display").innerHTML = aux + key;
        }
        contNum = contNum + 1;
      }else {
        alert("No puedes escribir más de 8 números")
      }

    }
  })
})()
