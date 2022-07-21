fetch("./assets/data/datos-personas.json")
    .then(
        respuesta => {
            respuesta.json()
            .then(

                datos => {
                    console.log(datos);
                }
            )

        }
    ); 
    console.log ("hola")