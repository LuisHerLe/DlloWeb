/*(function($){
//AJAX puro
var inputUser = $('#username');
inputUser.focus();
var URL = 'https://api.github.com/users/'
inputUser.on('keypress', function(e){
var code = (e.keyCode ? e.keyCode : e.which);
if (code === 13) {
console.log("Si le da enter");
var username = $(this).val().trim().toLowerCase()
if (username != "") {
var XHR = new XMLHttpRequest();
var URLUser = URL + username
//XHR.open('GET', URLUser) //Asíncrono
XHR.open('GET', URLUser,false) //Síncrono
XHR.onreadystatechange = function(){
if (XHR.readyState == 4){
var data = JSON.parse(XHR.responseText)
if (data.message && data.message == 'Not Found') {
alert('El usuario no existe en Github')
}else {
$('img').attr('src', data.avatar_url)
$('.name').text(data.name)
console.log(data.name);
$('.username').text(data.login)
$('.email').text(data.email)
$('.company').text(data.company)
$('.location').text(data.location)
$('.followers').text(data.followers)
}
}
}
XHR.send(null)
}else {
alert('Debe ingresar un nombre de usuario')
}
}else {
console.log("No se detecta el enter");
}
})
})(jQuery)
*/

//AJAX con jQuery
var inputUser = $('#username')
inputUser.on('keypress', function(e){
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 13) {
    ajaxAsync();
  }
})

function ajaxAsync(){
  var URL = 'https://api.github.com/users/'
  var username = $(this).val().trim().toLowerCase()
  if (username !="") {
    var URLUser = URL + username
    $.ajax({
      url: URLUser,
      type: "GET",
      async: true,
      sucess:(function(response){
        var data = response
        if (data.message && data.message == "Not Found") {
          alert("El usuario no existe en GitHub")
        }else {
          $('img').attr('src', data.avatar_url)
          $('.name').text(data.name)
          console.log(data.name);
          $('.username').text(data.login)
          $('.email').text(data.email)
          $('.company').text(data.company)
          $('.location').text(data.location)
          $('.followers').text(data.followers)
        }
      })
    })
  }else {
    alert("Debe ingresar un nombre de usuario")
  }
}
