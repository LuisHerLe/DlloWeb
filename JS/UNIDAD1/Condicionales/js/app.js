var a=0,b=0,r=0;
a= prompt("Ingrese el valor de a:");
b= prompt("Ingrese el valor de b:");

opcion= prompt("Ingrese el nùmero correspondiente a la operaciòn que desea ejecutar: \n 1. r=a + b \n 2. r= a-b \n 3. r= a * b \n (*) Si ingresa un valor diferente a estos nùmeros, se ejecutarà la operaciòn r = a / b ");

a = Number(a);
b= Number(b);
opcion= Number(opcion);

switch(opcion){
  case 1:
  r = a + b;
  break;
  case 2:
  r = a - b;
  break;
  case 3:
  r = a * b;
  break;
  default:
  r = a / b;
  break;
}

alert("El valor de r: " + r);
