/*for (var i = 0; i <= 80; i++) {
$.ajax({
url: 'https://pokeapi.co/api/v2/pokemon-form/#pokemon',
type: 'GET',
data: {},
success: function(data){
console.log(data.results);
//$(".pokemons").append('<li><img src = "'+ data.results.name +'" ></img></li>')
}
})
}
*/
var arrayPokemons = ""
$.ajax({
  url: 'https://pokeapi.co/api/v2/pokemon-form/#pokemon',
  type: 'GET',
  data: {},
  success: function(data){
    //console.log(data.results);
    arrayPokemons = data.results;
    for (var i = 0; i < arrayPokemons.length; i++) {
      $.ajax({
        url: arrayPokemons[i].url,
        type: 'GET',
        data: {},
        success: function(dataP){
          $(".pokemons").append('<li><img src = "'+ dataP.sprites.front_default +'" ></img></li>')
        }
      })
    }
  }
});


for (var i = 0; i <= 80; i++) {
  fetch('http://pokeapi.co/api/v2/pokemon-form/' + i,{
  method: 'GET'
}).then(function(data){
  return data.json()
}).then(function(json){
  $(".pokemons").append('<li><img src = "'+ dataP.sprites.front_default +'" ></img></li>')
})
}
