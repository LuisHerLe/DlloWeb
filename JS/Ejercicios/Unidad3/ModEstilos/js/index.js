/*
  Ejercicio de Codificación de Unidades 1 y 2 de JS
function changeBackground1(){

  // NOTE: Crea una función que reciba como parámetro un elemento del DOM y cambie su color de fondo por el siguiente: #4d62d0
  // 1: Se obtiene el elemento y se envía a una variable
  var topRow = document.getElementsByClassName("top-row")
  // 2: Se cambia su color de fondo
  topRow[0].style.background = "#4d62d0";

  // 3: añade un condicional que verifique si el elemento hijo del elemento en el parámetro existe. En caso tal, asigna el color de fondo a “inherit”
  if (topRow[0].children!=null){
    console.log("Se cambia el color a inherit");
    topRow[0].style.background = "inherit";
  }
}

function changeColor1(){
  // NOTE: Crea otra función similar que cambie su color a #149c5f

  // 1: Se obtiene el elemento y se envía a una variable
  var topRow = document.getElementsByClassName("top-row")
  // 2: Se cambia el color del texto de dicha variable
  topRow[0].querySelector("h1").style.color = "#149c5f";

  // 3: añade un condicional que verifique si el elemento hijo del elemento en el parámetro existe. En caso tal, asigna el color de fondo a “inherit”
  if (topRow[0].children!=null){
    console.log("Se cambia el color a inherit");
    topRow[0].style.background = "inherit";
  }
}

// NOTE: Crea una función que modifique el tamaño de los paneles de contenido central de la página. Para esto debes seleccionar los tres paneles cuya clase inicia con la palabra “item” y reducir su ancho a 4%
function changeBack_CentralContain(){
  var contCentral = document.querySelectorAll("[class^='item-']")
  for (var i = 0; i < contCentral.length; i++) {
    console.log("Cambio de tamaño para el elemento" + document.querySelectorAll("[class^='item-']")[i]);
    contCentral[i].style.width= "80%";
    contCentral[i].style.background= "#4d62d0";
    contCentral[i].children[0].style.display = "block";
    contCentral[i].children[0].style.width = "96%";
    contCentral[i].children[0].style.background = "white";
    contCentral[i].children[0].style.fontSize = "small";
    contCentral[i].children[0].style.fontSize = "xx-large";
  }
}



changeBackground1();
changeColor1();
changeBack_CentralContain();
  */

  //Ejercicios de Codificación de Unidad 3 de JS
  // NOTE: Busca en la estructura HTML el elemento de tipo radio button, relacionado con el ícono del audio, e identifica una manera de seleccionarlo mediante JavaScript y poder desactivarlo.   Adicionalmente, debes seleccionar la imágen dentro del contenedor con la clase audio y usar la función setAttribute para modificar el atributo source de la imágen por el siguiente: background-color: #888; #149c5f
  var radioAudio = document.getElementById("speaker-radio");
  document.querySelector('.audio img').setAttribute("src", "img/mute.png");
  radioAudio.checked = false;

  // NOTE: Crea una función para activar el sonido
  document.getElementById("speaker").addEventListener('click', function(){
    document.querySelector('.audio img').setAttribute("src", "img/speaker.png");
  })
