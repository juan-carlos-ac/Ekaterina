window.onload = function() {

    //Selectores
    const menuButton = document.querySelector("#header button");
    const upDownButtons = document.querySelectorAll("#aside div:first-child")

    //Listeners
    menuButton.addEventListener("click", displayMenu);

    for (let button of upDownButtons) {
        button.addEventListener("click", moveAside)
    }

    //Despliegue del menú 
    function displayMenu() {

        //Si el texto contenido en el boton de despliegue del menu es "Menu" se despliega
        if (menuButton.innerText == "Menu") {
            //Se coloca el menu el la cordenada 0 de X
            document.getElementById("aside").style.left = "0px";
            //Se mueve el botón para que quede visible
            menuButton.style.left = "550px";
            //Se cambia el texto del botón a "Cerrar"
            menuButton.innerText = "Cerrar";

            //Si el texto contenido en el boton de despliegue del menu es "Cerrar" se esconde
        } else if (menuButton.innerText == "Cerrar") {
            //Se restablecen los valores iniciales
            document.getElementById("aside").style.left = "-500px";
            menuButton.style.left = "5%";
            menuButton.innerText = "Menu";
        }

    }

    // Efecto de subir y bajar en el menú lateral
    function moveAside(e) {

        //Se guarda en una variable local la posicion y del contenido del menú 
        let posicion = document.getElementById("content").style.backgroundPositionY.replace("px", "");

        //Si se pulsa el botón de subir y la posicion y del contenido del menú es menor que cero sube
        if (e.target.innerText == "Arriba" && posicion < 0) {

            //Se suma el alto del contenido del menú a la posicion para pasar al siguiente fragmento de la imagen games.png y se asigna a la posicion y
            let posicionModificada = parseInt(posicion) + 870;
            document.getElementById("content").style.backgroundPositionY = posicionModificada + "px";

            //Si se pulsa bajar y la posicion y del contenido del menú es mayor o igual a -2000 se baja
        } else if (e.target.innerText == "Abajo" && posicion >= -2000) {

            //Se resta el alto del contenido del menú a la posicion para pasar al siguiente fragmento de la imagen games.png y se asigna a la posicion y
            let posicionModificada = posicion - 870;
            document.getElementById("content").style.backgroundPositionY = posicionModificada + "px";
        }

    }
}