var htmlNode = document.getElementById("datos");

$.ajax({
  url: 'http://api.tvmaze.com/shows',
  type: 'GET', //Puede ser POST, PUT
  data:{
    /*Si no hay que enviar nada, se deja vacío */
  },
  success: function(data){
    data.forEach(function (val,i){
      htmlNode.innerHTML = htmlNode.innerHTML + '<li>' + val.name +'</li>'
      console.log(htmlNode.innerHTML);
    })
  }
})
