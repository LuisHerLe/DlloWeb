// NOTE: Ejercicio Do
var lista_nombres =["Camilo", "Eduardo", "Natalia", "Luifo", "Juan", "Alberto", "Milton","Guillermo","Mateo","Maria","Pedro"];

var i = 1;
var resultado ="";

do{
  resultado = resultado + lista_nombres[i] + "\n"
  i = i+ 1;
}while(i<10);
alert(resultado);


// NOTE: Ejercicio While

var lista_nombres =["1Camilo", "1Eduardo", "1Natalia", "1Luifo", "1Juan", "1Alberto", "1Milton","1Guillermo","1Mateo","1Maria","1Pedro"];

var i = 5;
var resultado ="";

while(i<10){
  resultado = resultado + lista_nombres[i] + "\n"
  i=i+1
}
alert(resultado);

// NOTE: Ejercicio For

var lista_nombres =["fCamilo", "fEduardo", "fNatalia", "fLuifo", "fJuan", "fAlberto","fMilton","fGuillermo","fMateo","fMaria","fPedro"];

var resultado ="";
for (var i = 0; i < 10; i++) {
  resultado = resultado + lista_nombres[i] + "\n";
}
alert(resultado);


// NOTE: Ejercicio For In

var lista_nombres =["fICamilo", "fIEduardo", "fINatalia", "fILuifo", "fIJuan", "fIAlberto","fIMilton","IfGuillermo","IfMateo","IfMaria","IfPedro"];

var resultado ="";
for (nombre_temp in lista_nombres) {
  resultado = resultado + lista_nombres[nombre_temp] + "\n";
}
alert(resultado);
