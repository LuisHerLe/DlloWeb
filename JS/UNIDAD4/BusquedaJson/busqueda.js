/*
[] Se usa para arrays
{} Se usa para objetos
*/
var Estructura = {
  "Personas":[
    {
      "Nombre" : "Luis",
      "Apellido" : "Hernández",
      "Edad:" : 32,
      "Direccion" : "Cl 1 #15 1",
      "Telefono" : 3012179249,
      "Estudios" : [
        {
          "Primaria" : {
            "Lugar" : "Salle 1",
            "Fecha_Grados" : "1 dic 1999"
          }
        },
        {
          "Bachillerato" : {
            "Lugar" : "Salle 1",
            "Fecha_Grados" : "1 dic 2002"
          }
        }
      ]
    },
    {
      "Nombre" : "Luifo",
      "Apellido" : "Lenis",
      "Edad:" : 32,
      "Direccion" : "Cl 1 #15 1",
      "Telefono" : 5887642,
      "Estudios" : [
        {
          "Primaria" : {
            "Lugar" : "Salle de Envigado",
            "Fecha_Grados" : "12 dic 1999"
          }
        },
        {
          "Bachillerato" : {
            "Lugar" : "Salle de Envigado",
            "Fecha_Grados" : "12 dic 2002"
          }
        }
      ]
    }
  ]
}

var persona1 = Estructura.Personas[0];
var persona2 = Estructura.Personas[1];
var Telefono1 = persona1.Telefono;
var Telefono2 = persona2.Telefono;
var Estudios1 = persona1.Estudios[1];
var Estudios2 = persona2.Estudios[1];
