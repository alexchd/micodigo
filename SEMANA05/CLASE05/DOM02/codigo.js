const demoId = document.getElementById("demo");

//console.log(demoId)

demoId.style.border = "4px  solid blue";

const demoClass = document.getElementsByClassName("demo");
const demoClass2 = document.getElementsByClassName("demo2");

//console.log(demoClass)

demoClass[0].style.border = "3px dashed black";
demoClass[1].style.border = "3px dotted red";

//vamos a usar un for para recorrer mi array de elementos HTML y vamos a definirle
// un vcalor a su borde de los elementos

for (let i = 0; i < demoClass2.length; i++) {
  demoClass2[i].style.border = "4px dotted green";
}

// SELECCION POR ETIQUETA

let demotag = document.getElementsByTagName("article");
console.log(demotag);

for (elementhtml in demotag) {
  demotag[elementhtml].style.border = "3px solid orange";
}

//

// let i=0
// while(i<=demotag.length){
//     demotag[i].style.border="5px solid red"
// }

//SELECCION DE QUERY

const demoquery = document.querySelector("demo_query");
console.log(demoquery);
demoquery.style.border = "2px solid green";


//for-each

demoQueryAll[0].style.border = "5px solid pink";

Array.from(demoClass).forEach((elemento) => {
  elemento.style.border = "5px solid pink";
});

//const demoQueryAllArray = Array.from(demoQueryAll)
// console.log(demoQueryAll);

// demoQueryAllArray.map((elemento) => {
//   elemento.style.border = "15px solid red";
// });

//eventos

const demoTitle = document.getElementById("titulo");


demoTitle.addEventListener("click",()=>{
    alert("Hey, me clickeaste!!!")
})

