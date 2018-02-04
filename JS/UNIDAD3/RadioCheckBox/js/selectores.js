var resultados = document.getElementsByClassName('btn_red');

for(i=0;i<resultados.length;i++){
  resultados[0].innerHTML=texto="Nuevo texto";
}


/* ChecBox y RadioButtom
- Modificar estados de checkBox
	document.getElementById("activar_rb").checked = "true" //Cambiar estado (true/false)
	document.getElementById("activar_rb").disabled = "true" //Habilitar o deshabilitar
- Modificar RadioButtom
	document.getElementById("animales").checked = "true" //Cambiar estado (true/false)
	document.getElementById("animales").disabled = "true" //Habilitar o deshabilitar
*/


/*select
document.getElementById("sel_animales").disabled=true; //Cambiar estado (true/false)
Para materialize se debe ejecutar el siguiente código
$(document).ready(function(){
 $("select").material_select();
});
*/

/*
Cambiar estructura HTML append
document.getElementById("lista_postres").className="input-field col s4"
document.getElementById("lista_animales").className="input-field col s4"
var cont_lista_nueva = document.createElement("div"); // Se crea div
cont_lista_nueva.id = "lista_musica" // Se agrega ID
cont_lista_nueva.className="input-field col s4" // Se asigna clases
document.getElementById("contenedor_listas").appendChild(cont_lista_nueva); // Se agrega a la estructura HTML el nuevo div dentro del contenedor de contenedor_listas
var lista_musica = document.createElement("select") // Se crea variable a la que se le asigna un elemento nuevo de tipo select
lista_musica.id = "sel_musica" // Al nuevo elemento select se le asigna ID
lista_musica.className = "icons"; // Al nuevo elemento se le asigna una clase llamada Icons
var dis_opt = document.createElement("option"); // Se crea un nuevo elemento de tipo option para el select
dis_opt.value = ""; // Se deja el valor en vacío
dis_opt.disabled = true; // Se deja deshabilitado
dis_opt.selected = true; // Se deja seleccionado
dis_opt.innerHTML="Selección a tu instrumento favorito"; // Se le agrega contenido escrito
var opt_trompeta = document.createElement("option"); // Se crea otro option
opt_trompeta.value = "Trompeta"; // Se le agrega un valor
opt_trompeta.dataset.icon="img/trompeta.png"; // Se le agrega una imagen
opt_trompeta.className = "left circle"; // Se le agregan clases
opt_trompeta.innerHTML = "Trompeta"; // Se le inserta un contenido
var opt_clarinete = document.createElement("option");
opt_clarinete.value = "Clarinete"
opt_clarinete.dataset.icon = "img/clarinete.png"
opt_clarinete.className = "left circle"
opt_clarinete.innerHTML = "Clarinete"
var opt_piano = document.createElement("option");
opt_piano.value = "Piano"
opt_piano.dataset.icon="img/piano.png"
opt_piano.className = "left circle"
opt_piano.innerHTML = "Piano"
var opt_violin = document.createElement("option")
opt_violin.value = "Violin"
opt_violin.dataset.icon="img/violin.png"
opt_violin.className = "left circle"
opt_violin.innerHTML = "Violín"

lista_musica.appendChild(dis_opt);
lista_musica.appendChild(opt_violin);
lista_musica.appendChild(opt_trompeta);
lista_musica.appendChild(opt_piano);
lista_musica.appendChild(opt_clarinete);

  cont_lista_nueva.appendChild(lista_musica) // Se agrega al contenedor el nuevo select
  var musicaLabel = document.createElement("label"); // Se crea un label

  $(document).ready(function(){ //Renderizar los objetos de materialize
   $("select").material_select();
  });
*/
