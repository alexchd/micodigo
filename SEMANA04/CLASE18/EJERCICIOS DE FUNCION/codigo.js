function imprimeMiNombre(nombre) {
  if (nombre === "") {
    return "Debes ingresar un nombre";
  }else if (nombre === undefined) {
    return "Debes ingresar un valor valido";
  }

  return ` Mi nombre es ${nombre}`;
}


function calculaMisAñosPerro(edad) {
    if (edad === undefined) {
        return "Debes ingresar un valor valido";
      }
    if (edad > 0 && edad < 100){
        return  ` Mi edad en años perro es  ${edad * 7}`
    }
    if(edad === 0){
        return "Ingresa una edad  valida"
    }  
}

    console.log(calculaMisAñosPerro())
    console.log(calculaMisAñosPerro(24))
    console.log(calculaMisAñosPerro(0))
