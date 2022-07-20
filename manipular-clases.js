let caja1 = document.getElementById("caja-1");
console.log(caja1);

let lsitaCajas = document.getElementsByClassName("box");
console.log("Obtener elementos con clase box");
console.log(lsitaCajas);

let seleccionCaja1 = document.querySelectorAll("div#caja-1");
console.log("Seleccionar el primer elemento que sea div con id caja-1");
console.log(seleccionCaja1);

let seleccionCajas = document.querySelectorAll("div.box")
console.log("Seleccionar todos los elemenos que sean div y tengan clase box")
console.log(seleccionCajas);

function mostrarClases(event) {
    
    event.target.classlist.add("pinchado");
    event.target.classlist.remove("roja");

}