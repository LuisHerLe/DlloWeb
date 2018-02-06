var map, infoWindow, pos

//Validar si el navegador soporta o permite la geolocalización

if(navigator.geolocation){
//Obtener posición y asignarle al array la latitud y la longitud
  navigator.geolocation.getCurrentPosition(function (position){
    pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }

    //Se llama la función initMap
    initMap();
    alert("hkgkh.g")
  })
}else{
  alert("Tu navegador no soporta la Geolocalización o la bloqueaste")
}

//Se crea función para crear el mapa y situarlo en el contenedor
function initMap(){
  var mapContainer = document.getElementById("map")
  var config = {
    center: {lat: 6.2415092 long: -75.6148492},
    zoom: 5
  }
  map = new google.maps.Map(mapContainer, container)
  infoWindow = new google.maps.infoWindow({map: map})
}
