//FUNCIONES

function mifuncion () {
  console.log("Mi priemra funcion");
  console.log("Mi priemra funcion");
  console.log("Mi priemra funcion");
  console.log("Mi priemra funcion");
  console.log("Mi priemra funcion");
}
// mifuncion()

function imprimeMiNombre(nombre) {
  if (nombre === "") {
    return "Debes ingresar un nombre";
  }

  if (nombre === undefined) {
    return "Debes ingresar un valor valido";
  }

  return ` Mi nombre es ${nombre}`;
}

// y && -> si mi condicion1 es cierta Y mi condicion2 es cierta hago algo....

// o  || -> si mi condicion1 es cierta O mi condicion2 es cierta hago algo....

//con un parametro
//imprimeMiNombre("Josue")

//console.log(imprimeMiNombre("Josue"));

//console.log(imprimeMiNombre(""));

console.log(imprimeMiNombre());

console.log(imprimeMiNombre("Josue"));

console.log(imprimeMiNombre(""));

// //imprimir el resultado de mi funcion con parametros
// console.log(imprimeMiNombre("Josue"))

// //imprimir el resultado de mi funcion sin pasar parametros
// console.log(imprimeMiNombre(), "funcion sin parametros")

// //imprimir el resultado de mi funcion pasandole un paramtero vacio
// console.log("")
// //sin parametros
// imprimeMiNombre()

let cadena_de_texto = "es un tipo string";

let numero = "es de tipo number";

let booleano = " es de tipo bool(true/false)";

let undefined = undefined;

// undefined , es un valor "indefinido" , lo que significa que no tiene asigando un valor
// pero la variable o constante que lo contiene si existe
