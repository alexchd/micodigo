//window

console.log(location);
console.log("Este es la url de la pagina:", location.href);
console.log("este es el hostname:", location.hostname);
console.log("este es mi host:", location.host);
console.log("Este es mi path(ruta/camino):", location.pathname);
console.log("Este es el protocolo que uso:", location.protocol);

//

let contador=0
let intervalo=setInterval(()=>{
    console.log("Hola mundo")
    console.log("contador")
    contador++
    if(contador===3){
        clearInterval(intervalo)
        }
},3000)

//

//localstorage
//almacenamiento local

window.localStorage.setItem("contrasenhas","1234")
let contra=window.localStorage.getItem("contrasenhas")
console.log(contra)
let profile=window.localStorage.setItem("tema","claro")
window.localStorage.removeItem("contra")
window.localStorage.clear()


//

if(window.confirm("Deseas eliminar todas las variables en el local storuga?")){
    alert("hey, las varibles fueron eliminadas")

    window.localStorage.clear()
}



