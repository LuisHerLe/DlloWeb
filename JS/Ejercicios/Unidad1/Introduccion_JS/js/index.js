
document.getElementById('boton-receta1').addEventListener('click', function prepararPostre(){
  var ingr_huevos = "Claras de Huevo";
  var ingr_azucar = "Azucar";
  var ingr_lecheCon = "Leche Condenzada";
  var ingr_gelatina = "Gelatina sin Sabor";
  var ingr_limon = "Limón";

  var cant_huevos = "5 Unidades";
  var cant_Azucar = "150 gr";
  var cant_LecheC = "200 gr";
  var cant_Gelatina = "1 sobre"
  var cant_Limon = "4 unidades";

  console.log("Preparando Postre de Limón....");
  console.log("Primero debes adicionar las " + ingr_huevos +  " en un Bol y batir con los " + cant_Azucar + " de Azucar Blanca; luego debes adicionar los " + cant_LecheC + " de " + ingr_lecheCon + " y batir bien. Una vez termines con esto, adiciona el zumo de " + ingr_limon + " y " + ingr_gelatina + " hidratada en agua tibia. Por último deposita la mezcla en moldes individaules y mételo a la nevera. ¡En 30 minutos to postre estará listo!")




})

document.getElementById('boton-receta2').addEventListener('click', function(){

var ingr_ginebra = "Ginebra";
var ingr_vermouth = "Vermouth seco";
var ingr_aceituna = "Aceituna";

var cant_gine = "2.5 onzas";
var cant_vermo = "0.5 onzas";
var cant_acei = "1 unidad";

console.log("Preparando Martini...")
console.log("Para preparar un Martini básico debes verter el " + ingr_ginebra + " en una coctelera y añadir el " + ingr_vermouth +". Para servir, pon la mezcla en una copa tipo Martini y añade una "+ ingr_aceituna + ".")

})
