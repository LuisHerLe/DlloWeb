// NOTE: Seleccionar el valor de un elemento
$F("idElemento")

// NOTE: Buscar hermanos anteriores .previous()
$("teletono").previous("label");

// NOTE: Buscar hermanos posteriores .next()
$$("h2")[0].next();

// NOTE: Hijos del elemento .childElements() - Retora una array
$$(".item-form")[0].childElements();

// NOTE: Hijos y todos los descentientes .descendants()
$("formulario").descendants();

// NOTE: Padres y todos los padres de padres .ancestors()
$("email").ancestors();
