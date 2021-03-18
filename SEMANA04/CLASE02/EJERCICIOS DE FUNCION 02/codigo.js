let seleccionar = document.querySelector("select");
let parrafo = document.querySelector('p');

seleccionar.addEventListener('change', establecerClima);

function establecerClima() {
  let eleccion = seleccionar.value;

  if (eleccion === "soleado") {
    parrafo.textContent = "El dia esta agradable y muy bonito";
  } else if (eleccion === "lluvioso") {
    parrafo.textContent = "Esta lloviendo , mejor quedate en casa";
  } else if (eleccion === "nevado") {
    parrafo.textContent = "Si sales , trata de salir muy abrigado";
  } else if (eleccion === "nublado") {
    parrafo.textContent = "No hace falta que salgas con lentes de sol";
  } else {
    parrafo.textContent = "";
  }
}