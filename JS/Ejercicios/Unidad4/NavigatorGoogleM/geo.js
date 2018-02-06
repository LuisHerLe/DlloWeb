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

  })
}else{
  alert("Tu navegador no soporta la Geolocalización o la bloqueaste")
}

//Se crea función para crear el mapa y situarlo en el contenedor
function initMap(){
  var mapContainer = document.getElementById("map")
  var config = {
    center: {lat: -34.397, lng: 150.644},
    zoom: 5
  }
  map = new google.maps.Map(mapContainer, config)
  infoWindow = new google.maps.infoWindow({map: map})
}


//Código de googleapis
/*function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 17,
          center: {lat: -34.397, lng: 150.644}
        });

        var marker = new google.maps.Marker({
          map: map,
          // Define the place with a location, and a query string.
          place: {
            location: {lat: -34.397, lng: 150.644},
            query: 'Google, Medellin, Colombia'

          },
          // Attributions help users find your site again.
          attribution: {
            source: 'Google Maps JavaScript API',
            webUrl: 'https://developers.google.com/maps/'
          }
        });

        // Construct a new InfoWindow.
        var infoWindow = new google.maps.InfoWindow({
          content: 'Google Medellin'
        });

        // Opens the InfoWindow when marker is clicked.
        marker.addListener('click', function() {
          infoWindow.open(map, marker);
        });
      }

    var button = document.getElementById("btn-geo")
    button.addEventListener("click", function(){

      alert("Se procede a buscar la ubicación")
      map.setCenter(pos);
      map.SetZoom(20);
      infoWindow.setPosition(pos);
      infoWindow.setContent("Ubicación ")
    })
*/

var button = document.getElementById("btn-geo")
button.addEventListener("click", function(){

  alert("Se procede a buscar la ubicación")
  map.setCenter(pos)
  map.setZoom(15)
  infoWindow.setPosition(pos)
  infoWindow.setContent("Ubicación ")
})
