    let contadorfotos =1;
    let contenedor = document.getElementById("contenedor-fotos");
    
    function nuevafoto() {

        contenedor.innerHTML += `<img onclick= "marcarfoto(event)" src="https://picsum.photos/200/300?random=${contadorfotos++}">`
    }

    function masfotos(){
        for ( let i = 0; i < 5; i++){
            nuevafoto();
        }

    } 
    function marcarfoto(event) {

        event.target.classList.toggle("marcada-para-borrar");

    }

    function borrarFotos(){
        let fotosparaBorrar = document.getElementsByClassName("marcada-para-borrar");
        //let fotosParaBorrar = document.querySelectorAll(".marcada-para-borrar");
        for (let i = fotosparaBorrar.length - 1; i >= 0; i--){
            fotosparaBorrar[i].remove();
        }
    }
    function limpiarseleccion(){
        let seleccion = document.getElementsByClassName("marcada-para-borrar");
        for( let i = seleccion.length - 1; i >= 0; i--) {
            seleccion[i].classList.remove("marcada-para-borrar");
        }

    }
