let array_de_ejemplo = ".....";

//miObjeto.nombredelapropiedad;

let miObjeto2 = {
  propiedad1: "es un objeto",
  propiedad2: "es otra propiedad",
  propiedad3: "es otra,es otra propiedad",
  propiedad4: "es otra propiedad ,.....",
};

//   miObjeto["propiedad1"]

let miObjeto = new Object();
miObjeto.propiedad1 = "es un objeto";
miObjeto.propiedad2 = 5;
miObjeto.propiedad3 = true;
miObjeto.propiedad4 = miObjeto2;
miObjeto.propiedad4 = array_de_ejemplo;

let comida_favorita = new Object();
comida_favorita.nombre = "lomo saltado";
comida_favorita.costo = 20.45;
comida_favorita.rating = [1, 2, 3, 4, 5];
comida_favorita.estadisponible = true;

comida_favorita["nombre"] = "pizza";
console.log(comida_favorita["nombre"]);

//este es la manera estandar un objetoen javascript(jeson)

let minuevoobjeto = {
  propiedad1: "esta es una cadena de texto",
  propiedad2: 25,
  propiedad3: true,
};
minuevoobjeto.propiedad1;
console.log(minuevoobjeto.propiedad1);
minuevoobjeto.propiedad3 = true;
console.log(minuevoobjeto.propiedad3);
minuevoobjeto["propiedad2"] = 67.22221;
console.log(minuevoobjeto["propiedad2"]);

Function mostrarpropiedades (objeto,nombreobjeto) {
let resultado="",
for (let elemento in objeto){
if (objeto.hasOwnProperty(elemento)){
resultado +=`${nombreobjeto},${elemento}=$(objeto[elemnto]) ;
}
}
return resultado;

}
