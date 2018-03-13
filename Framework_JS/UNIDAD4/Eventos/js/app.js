
/* Existen 2 maneras de asignar eventos a los eventos del DOM,
1. Clase Event y sus métodos de Clase
2. Eventos que se asignan a los eventos del DOM

El método que nos permite asignar un evento a un elemento determinado es observe
*/
document.observe("dom:loaded", function(){

  Event.observe('boton-cancelar', 'click', function(){
    alert('Estas seguro?');
  })

  $('titulo').observe('mouseover', function(){
    this.addClassName('activo');
  })
  $('titulo').observe('mouseleave', function(){
    this.removeClassName('activo');
  })




})
