function funcionCompleja(callback1, callback2, callback3){
  callback1("Terminó el proceso 1")
  callback2("Terminó el proceso 2")
  callback1("Terminó toda la función")
}

funcionCompleja(
  function(mensaje){
    alert(mensaje)
  },
  function(mensaje){
    alert(mensaje)
  },
  function(mensaje){
    alert(mensaje)
  }
)
