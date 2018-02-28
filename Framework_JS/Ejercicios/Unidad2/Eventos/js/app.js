$(document).ready(function(){

  //Punto 1
  $(window).scroll(function(){
    var scrollAux = $(window).scrollTop()
    if (scrollAux >200){
      $("body").css("background-image", "url('img/background2.jpg')");

    }else{
      $("body").css("background-image", "url('img/background.jpg')");
    }
  })

  //Punto 2
  $("#color-favorito").on("change", function() {
    var colorAux = this.value
    switch (colorAux) {
      case "azul":
        console.log("Seleccionaste el color: " + colorAux);
        $(".cuadrado-color").css("background-color","#0000ff");
      break;
      case "verde":
        console.log("Seleccionaste el color: " + colorAux);
        $(".cuadrado-color").css("background-color","#008000");
      break;
      case "amarillo":
        console.log("Seleccionaste el color: " + colorAux);
        $(".cuadrado-color").css("background-color","#ffff00");
      break;
      case "rojo":
        console.log("Seleccionaste el color: " + colorAux);
        $(".cuadrado-color").css("background-color","#ff0000");
      break;
      case "morado":
        console.log("Seleccionaste el color: " + colorAux);
        $(".cuadrado-color").css("background-color","#800080");
      break;
      case "cafe":
        console.log("Seleccionaste el color: " + colorAux);
        $(".cuadrado-color").css("background-color","#a52a2a");
      break;
      default:

    }
  })

//Punto 3
$("input").focus(function(){
  var idAux = ($(this).attr("id"));

  $(this).siblings("span.info").css("display","block");

$(this).blur(function(){

  $(this).siblings("span.info").css("display","none");

//Punto 4

  if(this.value==""){
      $(this).siblings("span.error").css("display","block");
  }else{
    $(this).siblings("span.error").css("display","none");
  }
})
})

//Punto 5
$("input[type='email']").blur(function(){
  var emailIngresado = $(this).val();
  if(!emailIngresado.includes("@")||!emailIngresado.includes(".")){
    $(this).siblings(".info").css("display","none");
    $(this).siblings(".errMail").css("display","block");
    $(this).addClass("campoError");
  }else {
    $(this).siblings(".errMail").css("display","none");
    $(this).removeClass("campoError");
  }
});

//Punto 6
$("input[type='password']").select(function(){
  alert("No puedes copiar la contraseña debes repetirla!");
  $(this).contextmenu(function(event){
    event.preventDefault();
    console.log("No puedes copiar este campo");
  });
});

// TODO: Punto 7
$("input[type='password']").keypress(function(key) {
if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90)) {
    $(this).siblings(".errPswRepeat").css("display","block");
}
});

})
