var selectorID = $("cuadroAzul")
console.log("Selector por ID: " + selectorID);

// NOTE: Selector CSS, tammbién aplica para las clases
$$(".cuadro");

// NOTE: Selectores avanzados
// NOTE: Seleccionar elemento hermano del contenedor con la classe a azul, que a su vez es hijo del elemento de la clase contenedor
//Este siempre arroja un arreglo
$$(".contenedor .azul ~ div")
