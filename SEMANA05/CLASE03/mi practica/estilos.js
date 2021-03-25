const ahora = new Date();
console.log(ahora);

const milisengundos = ahora.getTime();
console.log(milisengundos);

const fechacero = new Date(0);
console.log(fechacero);

const fechaceroconmilisegundos = new Date(31557600000 * 51);
console.log(fechaceroconmilisegundos);

const fechastring = new Date("July 28 1821 12:00");
console.log(fechastring);

//

const anho = fechastring.getFullYear();
const mes = fechastring.getMonth();
const diames = fechastring.getDate();
const diasemana = fechastring.getDay();
const hora = fechastring.getUTCDate();

console.log(anho);
console.log(mes);
console.log(diames);
console.log(diasemana);
console.log(hora);

//

function obteneredad(anhonacimiento) {
  const fechaactual2 = new Date();
  const anho = fechaactual2.getFullYear();
  return anho - anhonacimiento;
}
console.log(obteneredad(1988));

//ejercicio

function fechacompleta(fechadenacimiento) {
  let cumple = {
    dia: 0,
    mes: 0,
    anho: 0,
  }

  const fecha_actual = new Date();
  fechadenacimiento = new Date(fechadenacimiento);
  
  const anho = +(fecha_actual.getFullYear() - fechadenacimiento.getFullYear());
  const mes = +(fecha_actual.getMonth() - fechadenacimiento.getMonth());
  const dia = +(fecha_actual.getDay() - fechadenacimiento.getDate());

  cumple.anho = anho;
  cumple.mes = mes;
  cumple.dia = dia;

  return `
  dia:
  $ {cumple.dia};
  mes:
  ${cumple.mes};
  año:
  ${cumple.anho};
  `
}
