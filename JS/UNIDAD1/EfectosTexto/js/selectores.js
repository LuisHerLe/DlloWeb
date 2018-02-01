/* EJERCICIOS DESDE LA CONSOLA
  1. Almacenar los objetos con clase card-title
    var titulos = document.getElementsByClassName("card-title");
  2. Poner en mayúscula sostenida el primer titulo
    titulos[0].style.textTransform = "uppercase";
  3. Poner en minúscula sostenida el segundo titulo
    titulos[1].style.textTransform = "lowercase";
  4. Poner la primera en mayúscula el tercer titulo
    titulos[2].style.textTransform = "capitalize";
  5. Almacenar los objetos con Tag Name p
    var parrafos = document.getElementsByTagName("p");
  6. Poner el primer párrafo en cursiva
    parrafos[0].style.fontFamily="cursive";
  7. Poner el segundo párrafo en fuente fantasy
    parrafos[1].style.fontFamily="fantasy";
  8. Poner el tercer párrafo en fuente monospace
    parrafos[2].style.fontFamily="monospace";
*/


var resultados = document.getElementsByClassName('btn_red');

for(i=0;i<resultados.length;i++){
  resultados[0].innerHTML=texto="Nuevo texto";
}
