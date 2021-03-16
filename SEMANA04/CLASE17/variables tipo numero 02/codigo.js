// declarar una variable para la formula de grados centigrados a farenheit
//variable de

const celcius = 1;
let fahrenheit = celcius * 1.8 + 32;
console.log("celcius a fahrenheit", fahrenheit);

const f = 1;
let c = 0.56 * f - 32 * 0.56;
console.log("fahrenheit a celcius", c);

//tipo booleano-<true =verdad =1 ;false->falso=0
let soyFrontend = true;
let soyMachinelearning = false;

//JSON -> Javascript Object Notation
let json = {
  propiedad1: "valor de texto",
  propiedad2: 34,
  propiedad3: true,
};
let json2 = {
  propiedad6: 123,
};
let josue = {
  nombre: "josue",
  apellidop: " retamozo",
  apellidom: " vargas",
};
let nombrecompleto  = `${josue.nombre}
${josue.apellidop}${josue.apellidom}`;
console.log("Mi nombre completo;",nombrecompleto);