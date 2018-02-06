if (navigator.geolocation){
  //Obtenemos los datos de la ubicación del usuario
  navigator.geolocation.getCurrentPosition(function(position){
    var positionInfo = position
    alert("Tengo tu localización")
  })
}else{
  alert("El navegador no soporta la característica de Geolocalización de HTML5")
}
