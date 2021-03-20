//Funciones
// ``
function sumar(numero1, numero2) {
  let total = numero1 + numero2;
  let poner_Html = document.write(`<h1>${total}</h1>`);
  return poner_Html;
}

function sumar1(numero1, numero2) {
  let total = numero1 + numero2;

  console.log(total);

  //return total + 1000;
}

function restar(numero1, numero2) {
  console.log(numero1 - numero2);
  return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

function ecu_cuadratica(a, b, c) {
  let discriminante = b ** 2 - 4 * a * c;
  let x = 0;
  if (discriminante > 0) {
    x = -b + (Math.sqrt(discriminante) / 2) * a;
    let escribir_formula = document.write(`
    <div style="display: flex; flex-direction: column;">
        <h1>${x}</h1>
        <p>${a}</p>
        <p>${b}</p>
        <p>${c}</p>
    </div>
    `);
    return escribir_formula;
  } else {
    return "Error, ingresa valores validos";
  }
}

ecu_cuadratica(56, 34, 5);

function bin_cuarta(a, b) {
  rpta = a ** 4 + 4 * a ** 3 * b + 6 * a ** 2 * b ** 3 + b ** 4;
  console.log(rpta);
  let htmll = document.write(`<h1>El binomio a la cuarta, ${rpta}</h1>`);
  return htmll;
}

bin_cuarta(2.5);

//recursividad
//bucle-while

// let contador = 2;
// while (x < 10) {
//   console.log(x);
//   x++;
// }

// funcion recursiva

function recursividad(x) {
  if (x >= 21) {
    return;
  }
  console.log(x);
  return recursividad(x + 2);
}
recursividad(2);

//Funciones anidadas

function sumarcuadrados(a, b) {
  function cuadrado(x) {
    return x * x;
  }
  return cuadrado(a) + cuadrado(b);
}
console.log(sumarcuadrados(2, 3));

//BINOMIO A LA CUARTA CON FUNCION

function binomio_cuarta(a, b) {
  function suma_cuarta(a, b) {
    return a ** 4 + b ** 4;
  }
  function suma_cubo(a, b) {
    return 4 * (a ** 3 * b) + 4 * (a * b ** 3);
  }
  function multi_cuadrados(a, b) {
    return 6 * a ** 2 * b ** 2;
  }
  return suma_cuarta(a, b) + suma_cubo(a, b) + multi_cuadrados(a, b)
}
console.log(binomio_cuarta(3,2))

// BINOMIO A LA CUARTA CON CONST

const binomio_de_newton_4 = function binomio_cuarta(a, b) {
  return (
    a ** 4 +
    b ** 4 +
    4 * (a ** 3 * b) +
    4 * (a * b ** 3) +
    6 * (a ** 2 * b ** 2)
  );
};

console.log(binomio_de_newton_4(2, 3));

function binomio_cubo(a,b){
  function aalcubo(a,b){
   return a**3
  }
  function medio(a,b){
    return 3*a**2*b
  }
  function tercer(a,b){
    return 3*a*b**2
  }
  return aalcubo(a,b) - medio(a,b) +  tercer(a,b)
}

console.log(binomio_cubo(3,2))

//const

const binomio_al_cubo_resta = function binomio_cubo(a,b){
  return (
    a**3-
    3*a**2*b+
    3*a*b**2
  );
}
console.log(binomio_al_cubo_resta(3,2))

//typeof

const mi_peticion_de_servidor = [
  {
    nombre: "nombre1",
    codigo: "34e23a",
    altura: 1.8,
  },
  {
    nombre: "nombre2",
    edad: "22",
    altura: 1.7,
  },
  {
    nombre: "nombre3",
    edad: "45",
    altura: 1.85,
  },
];

// tengo que implementar una funcionalidad donde voy
//a generar un id en base al nombre y la edad multiplicada x2

function generarId(nombre, codigo) {
  console.log(typeof(codigo));
  return nombre + (codigo % 2);
}


//generarId(mi_peticion_de_servidor[0].nombre,mi_peticion_de_servidor[0].edad)
// nombre13423

console.log(
  generarId(mi_peticion_de_servidor[0].nombre, mi_peticion_de_servidor[0].codigo)
);