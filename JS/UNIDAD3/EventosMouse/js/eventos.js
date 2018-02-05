
function cambioFotoAstronauta(){
  document.getElementById("astronauta").style="width:50%"
}

function cambioFotoExtraterrestre(){
  document.getElementById("extraterrestre").style="-webkit-filter:blur(5px);filter:blur(5px);";
}

function cambioFotosPlatenas(){
  document.getElementById("planetas").style="filter:hue-rotate(90deg);-webkit-filter:hue-rotate(90deg);";
}

function cambioFotosPlanetasNo(){
  document.getElementById("planetas").style="filter:none;-webkit-filter:none;";
}

function cambioFotoNave(){
  document.getElementById("nave_espacial").style="filter:sepia(100%); -webki-filter:sepia(100%)";
}

//Se asignan las funciones a las imágenes
document.getElementById("astronauta").onclick=cambioFotoAstronauta;

document.getElementById("extraterrestre").ondblclick=cambioFotoExtraterrestre;

document.getElementById("planetas").onmouseover=cambioFotosPlatenas;

document.getElementById("planetas").onmouseout=cambioFotosPlanetasNo;

document.getElementById("nave_espacial").onmouseout=cambioFotoNave;
