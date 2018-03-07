// NOTE: Búsqueda sobre una selección selectores básicos con .select()

$("idSeleccion").select("reclaCSS")
/*
  $("formulario").select("h2")
  $("formulario").select("div.item-form")
  $$("div.item-form")[3].select("input")

  NOTE: Otra forma de realizar búsquedas o determinar si un elemento está o no dentro de la búsquedas
  NOTE: Primero hay que intanciar los elementos
    - objeto.findElements() = Elemento de Arreglos
    - objeto.match() = Boolean

  var s = new Selector("label")
  s.findElements($$('.item-form:first')[0])
  s.match($$(".item-form label")[0])
*/
