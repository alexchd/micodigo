function contarVocales(cancion) {
  //creo un objeto dentro de mi funcion donde voy a  alamacenar la cantidad de veces que una letra se repite en la cancion(string)
  let contador = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    otros: 0,
  };

  // un iteradot que contine una variable que inicializara en cero y que tiene una condiuion que dice : mienstras esta variable creaada dentro
  // del for sea menor a la longitud de mi cancion(array/string)  y voy aumentar estar variable en 1 cada vez , hasta que esa
  // condicion deje de ser verdadera

  for (let i = 0; i < cancion.length; i++) {
    //voy a evaluar cada caracter en mi cancion y compararlo con lo que quiero buscar que en este caso es "a"(convertida a minuscula por lowercase)
    if (cancion[i].toLowerCase() === "a") {
      // voy a amuentar en 1 el contador para a si esta condicion se cumnple
      contador.a += 1;
    } else if (cancion[i].toLowerCase() === "e") {
      contador.e += 1;
    } else if (cancion[i].toLowerCase() === "i") {
      contador.i += 1;
    } else if (cancion[i].toLowerCase() === "o") {
      contador.o += 1;
    } else if (cancion[i].toLowerCase() === "u") {
      contador.u += 1;
    } else {
      contador.otros += 1;
    }
  }
  // y termino min funcion dandole un valor que en este caso es todo mi objeto contador , 
  //que a su vez contiene los contadores de cada letra 
  return contador;
}

const miCancion = `How many roads must a man walk down
Before you call him a man?
How many seas must a white dove sail
Before she sleeps in the sand?
Yes, and how many times must the cannonballs fly
Before they're forever banned?
The answer, my friend, is blowin' in the wind
The answer is blowin' in the wind
Yes, and how many years must a mountain exist
Before it is washed to the sea?
And how many years can some people exist
Before they're allowed to be free?
Yes, and how many times can a man turn his head
And pretend that he just doesn't see?
The answer, my friend, is blowin' in the wind
The answer is blowin' in the wind
Yes, and how many times must a man look up
Before he can see the sky?
And how many ears must one man have
Before he can hear people cry?
Yes, and how many deaths will it take 'til he knows
That too many people have died?
The answer, my friend, is blowin' in the wind
The answer is blowin' in the wind`;

function contarVocales2(cancion) {
  let contador = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    otros: 0,
  };
  let i = 0;
  while (i < cancion.length) {
    switch (cancion[i].toLowerCase()) {
      case "a":
        contador.a += 1;
        break;
      case "e":
        contador.e += 1;
        break;
      case "i":
        contador.i += 1;
        break;
      case "o":
        contador.o += 1;
        break;
      case "u":
        contador.u += 1;
        break;
      default:
        contador.otros += 1;
        break;
    }
    i++;
  }
  return contador;
}

const cuentaLetras = contarVocales2(miCancion);

console.log(`
  a: ${cuentaLetras.a},
  e: ${cuentaLetras.e},
  i: ${cuentaLetras.i},
  o: ${cuentaLetras.o},
  u: ${cuentaLetras.u},
  otros: ${cuentaLetras.otros},
  total: ${
    cuentaLetras.a +
    cuentaLetras.e +
    cuentaLetras.i +
    cuentaLetras.o +
    cuentaLetras.u +
    cuentaLetras.otros
  },
`);
