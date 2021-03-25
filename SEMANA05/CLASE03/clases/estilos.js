//clases

// las clase en js son funciones,con sintaxis especial,pero sigue siendo funciones.

// function 

const func= function(){}

//clase

const clase=class{}

console.log(Object.getPrototypeOf(func))
console.log(Object.getPrototypeOf(clase))

const constructordeunafuncion = new func()
const class2= new clase()

console.log(Object.getPrototypeOf(constructordeunafuncion))
console.log(Object.getPrototypeOf(class2))

