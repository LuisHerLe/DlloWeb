
function mostrar_tecla(event){
  var tecla = event.which || event.keycode;
  document.querySelector("#tarjeta_muestra_tecla #texto_tarjeta").innerHTML = "Presionaste la tecla: "+String.fromCharCode(tecla);
}
document.onkeypress=mostrar_tecla;

function cambiarTituloVerde(){
  document.querySelector("#tarjeta_cambia_color .card-image span").className="card-title green"
}
document.onkeydown=cambiarTituloVerde;

function cambiarTituloNegro(){
  document.querySelector("#tarjeta_cambia_color .card-image span").className="card-title black"
}
document.onkeyup=cambiarTituloNegro;

function teclaTextBox(event){
  var tecla = event.which || event.keycode;
  document.querySelector("#tarjeta_presiona_input_text .card-action a").innerHTML="Presionaste: "+String.fromCharCode(tecla);
}
document.querySelector("#tarjeta_presiona_input_text #tecla_texto").onkeypress=teclaTextBox;
