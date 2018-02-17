// NOTE: Línea
var canvasLine = document.getElementById("miCanvasLine"),
context = canvasLine.getContext("2d");

context.beginPath(); //Iniciar dibujo
context.moveTo(100,30); //Punto inicial x,y
context.lineTo(200,150); //Punto final x,y
context.lineTo(200,130); //Punto final x,y
context.lineTo(210,10); //Punto final x,y
context.lineTo(230,10); //Punto final x,y
context.lineTo(1,250); //Punto final x,y
context.stroke(); //Mostrar dibujo

// NOTE: Rectángulos
var canvasRect = document.getElementById("miCanvasRect"),
contextRect = canvasRect.getContext("2d");

/* NOTA: Opción 1
contextRect.beginPath(); //Iniciar dibujo
contextRect.rect(100,50,50,100); //x,y,ancho,alto
contextRect.lineWidth = 5; //Grosor de la línea
contextRect.fillStyle = "blue"; //Color borde
contextRect.strokeStyle = "red"; // Color del fondo
contextRect.fill(); //Mostrar contorno rectángulo
contextRect.stroke(); //Mostrar fondo rectángulo
*/
contextRect.beginPath(); //Iniciar dibujo
contextRect.lineWidth = 5; //Grosor de la línea
contextRect.fillStyle = "blue"; //Color borde
contextRect.strokeStyle = "red"; // Color del fondo
contextRect.fillRect(100,50,50,100); //Crear y mostrar contorno rectángulo
contextRect.strokeRect(100,75,50,100); //Crear y mostrar fondo rectángulo
contextRect.clearRect(50,25,25,50);

// NOTE: Arco
var canvasArc = document.getElementById("miCanvasArc"),
contextArc = canvasArc.getContext("2d");

contextArc.arc(100,100,50,Math.PI,Math.PI*1.5,false); //Dibujar x,y,Radio, Ángulo Inicio, Ángulo fin, dirección (False: Sentido de las anecillas del reloj)
contextArc.arc(200,50,20,Math.PI,Math.PI*1.5,false);
contextArc.strokeStyle = "red";
contextArc.stroke();//Mostrar fondo arco

// NOTE: Círculo (Hay que crer un arco completo)
var canvasCir = document.getElementById("miCanvasCir"),
contextCir = canvasCir.getContext("2d");

contextCir.arc(120,120,70, 0, 2*Math.PI, false);
contextCir.fillStyle = "#ff8800"
contextCir.fill();

// NOTE: Texto
var canvasTex = document.getElementById("miCanvasTex"),
contextTex = canvasTex.getContext("2d");

contextTex.font = "bold 10pt Arial, sans-serif" //Configurar estilo, tamaño y familia
contextTex.fillText("Serás mi amor eterno!", 70,90) // String, x, y

// NOTE: Imagen
var canvasImg = document.getElementById("miCanvasImg"),
    contextImg = canvasImg.getContext("2d");
var imgObj = new Image(); //Se crea nuevo objeto Imagen
imgObj.onload = function(){ //Esperar a que la imagen haya cargado antes de instanciar
  contextImg.drawImage(imgObj,25,33,250,180); //Objeto,x,y,ancho,alto
};
imgObj.src = "Cumple3.jpg"

var canvasEjercicio=document.getElementById('ejercicio');
var contextEjercicio=canvasEjercicio.getContext('2d');
contextEjercicio.beginPath();
contextEjercicio.arc(75,75,60,Math.PI*0.5,false);
contextEjercicio.arc(75,75,32,Math.PI*0.5,Math.PI*1,false);
contextEjercicio.closePath();
contextEjercicio.fillStyle='#9F81F7';
contextEjercicio.fill();
contextEjercicio.fillStyle='#FF8800';
contextEjercicio.beginPath();
contextEjercicio.arc(75,75,15,0,Math.PI*2, false);
contextEjercicio.fill();
