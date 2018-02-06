var almacen_Libros = {
  "Libros" : [
    {
      "codigo" : "0001B001",
      "titulo" : "Principios básicos de JavaScript",
      "editorial" : "NextU",
      "fecha_publicacion" : 2016,
      "edicion" : "Segunda",
      "estado" : "Disponible",
      "numero_paginas" : 1000,
      "numero_copias" : 30,
      "autores" : [
        {
          "nombre_autor" : "Luis Hernández",
          "fecha_nacimiento" : "05-07-1985",
          "nacionalidad" : "Colombiano"
        },
        {
          "nombre_autor" : "Leslie Arango",
          "fecha_nacimiento" : "11-06-1985",
          "nacionalidad" : "Colombiana"
        }
      ]
    },
    {
      "codigo" : "0302C002",
      "titulo" : "Maquetación HTML 5",
      "editorial" : "Marion",
      "fecha_publicacion" : 2013,
      "edicion" : "Primera",
      "estado" : "Agotado",
      "numero_paginas" : 1300,
      "numero_copias" : 1,
      "autores" : [
        {
          "nombre_autor" : "Pedro Perez",
          "fecha_nacimiento" : "01-08-1953",
          "nacionalidad" : "Ecuatoriano"
        },
        {
          "nombre_autor" : "Maria Clara Benitez",
          "fecha_nacimiento" : "15-04-1987",
          "nacionalidad" : "Colombiana"
        }
      ]
    },
    {
      "codigo" : "0003CC03",
      "titulo" : "HTML + CSS",
      "editorial" : "El pirata",
      "fecha_publicacion" : 2018,
      "edicion" : "Tercera",
      "estado" : "disponible",
      "numero_paginas" : 5000,
      "numero_copias" : 8,
      "autores" : [
        {
          "nombre_autor" : "Johan Smith",
          "fecha_nacimiento" : "28-11-1960",
          "nacionalidad" : "Estado Unidense"
        },
        {
          "nombre_autor" : "Jennifer Lopez",
          "fecha_nacimiento" : "30-01-1979",
          "nacionalidad" : "Estado Unidense"
        }
      ]
    }
  ]
}

var titulo_del_libro = almacen_Libros.Libros[0].titulo;
var codigo_del_libro = almacen_Libros.Libros[0].codigo;
var fecha_de_publicacion = almacen_Libros.Libros[0].fecha_publicacion;

alert("El libro " + titulo_del_libro + " tiene el código" + codigo_del_libro + " y fue publicado el " + fecha_de_publicacion + ".");
