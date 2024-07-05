const contMiArchivo = document.getElementById("cont-mi-archivo")
let fechasOrdenadas
let arrayDatos
let datosSeleccionados = localStorage.getItem("datos").split(",")


function recarga() {
    if (localStorage.getItem("datos")) {
        arrayDatos = localStorage.getItem("datos")
        arrayDatos = arrayDatos.split(",")
        let aux = []
        for (let dato of arrayDatos) {
            aux.push(dato.split("/"))
        }
        arrayDatos = aux
        console.log(arrayDatos)
        //console.log(unificarFechas())
        fechasOrdenadas = ordenarFechas(unificarFechas())
        console.log(fechasOrdenadas)
        ingresarDatos()
    }

    else{
        contMiArchivo.classList.add("sin-archivos")
        contMiArchivo.innerHTML="<p>No se encuentran datos</p>"
    }


}










function imprSelec(nombre) {
    var contenido = document.getElementById(nombre).innerHTML;
    var contenidoOriginal = document.body.innerHTML;
    document.body.innerHTML = contenido;
    window.print();
    document.body.innerHTML = contenidoOriginal;
}






function ingresarDatos() {
    for (fechas of fechasOrdenadas) {
        let pFecha = document.createElement("p")
        pFecha.classList.add("fecha-mi-archivo")
        pFecha.innerText = fechas
        contMiArchivo.appendChild(pFecha)

        let divSinCont = document.createElement("div")
        divSinCont.classList.add("datos-miarchivo")
        contMiArchivo.appendChild(divSinCont)

        let divNombre = document.createElement("div")
        divNombre.classList.add("datos-miarchivo")
        contMiArchivo.appendChild(divNombre)

        let divCompra = document.createElement("div")
        divCompra.classList.add("datos-miarchivo")
        contMiArchivo.appendChild(divCompra)

        let divVenta = document.createElement("div")
        divVenta.classList.add("datos-miarchivo")
        contMiArchivo.appendChild(divVenta)

        let divBorrar = document.createElement("div")
        divBorrar.classList.add("datos-miarchivo")
        contMiArchivo.appendChild(divBorrar)
        for (datos of arrayDatos) {
            if (datos[3] == fechas) {
                let pNombre = document.createElement("p")
                pNombre.innerText += datos[0]
                divNombre.appendChild(pNombre)

                let pCompra = document.createElement("p")
                pCompra.innerText += "$" + datos[1]
                divCompra.appendChild(pCompra)

                let pVenta = document.createElement("p")
                pVenta.innerText += "$" + datos[2]
                divVenta.appendChild(pVenta)


                let iconoBorrar = document.createElement("img")
                iconoBorrar.src = "../IMG/cross_icon-icons.com_72347.ico"
                divBorrar.appendChild(iconoBorrar)

                iconoBorrar.addEventListener("click", () => {
                    pNombre.remove()
                    pCompra.remove()
                    pVenta.remove()
                    iconoBorrar.remove()

                    datosSeleccionados = eliminarElemento(datosSeleccionados, pNombre.innerText + "/" + pCompra.innerText.slice(1) + "/" + pVenta.innerText.slice(1) + "/" + pFecha.innerText)
                    localStorage.setItem("datos", datosSeleccionados)

                    if (divCompra.innerHTML == "") {
                        pFecha.remove()
                        divNombre.remove()
                        divCompra.remove()
                        divVenta.remove()
                        divBorrar.remove()
                        
                    }

                })
            }
        }

    }

}


/*<p class="fecha-mi-archivo">15/04/2024</p>
                    <div class="datos-miarchivo"></div>
                    <div class="datos-miarchivo">
                        <p>Dólar Blue</p>
                        <p>Dólar MEP</p>
                        <p>Dólar Tarjeta</p>
                        <p>Dólar Cripto</p>
                        <p>Euro</p>
                    </div>
                    <div class="datos-miarchivo">
                        <p>$995</p>
                        <p>$996.09</p>
                        <p>$1355</p>
                        <p>$1050</p>
                        <p>$1000</p>
                    </div>
                    <div class="datos-miarchivo">
                        <p>$1015</p>
                        <p>$1000.06</p>
                        <p>$1419</p>
                        <p>$1086</p>
                        <p>$1200</p>
                    </div>
                    <div class="datos-miarchivo">
                        <img src="../IMG/cross_icon-icons.com_72347.ico" alt="">
                        <img src="../IMG/cross_icon-icons.com_72347.ico" alt="">
                        <img src="../IMG/cross_icon-icons.com_72347.ico" alt="">
                        <img src="../IMG/cross_icon-icons.com_72347.ico" alt="">
                        <img src="../IMG/cross_icon-icons.com_72347.ico" alt="">
                    </div>*/