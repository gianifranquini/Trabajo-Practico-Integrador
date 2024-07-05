const seleccionMoneda = document.getElementById("seleccion-moneda")
const contCajaMoneda = document.getElementById("contenedor-caja-moneda")
const actDatos = document.getElementById("actualizacion")

const arrayTerminaciones = [
    "/v1/dolares/oficial", "/v1/dolares/blue", "/v1/dolares/bolsa",
    "/v1/dolares/contadoconliqui", "/v1/dolares/tarjeta", "/v1/dolares/mayorista",
    "/v1/dolares/cripto", "/v1/cotizaciones/eur", "/v1/cotizaciones/brl",
    "/v1/cotizaciones/clp", "/v1/cotizaciones/uyu"]

let datosSeleccionados = []
let arrayDatos = []





function actualizarArrayDatos() {
    arrayDatos = []
    if (localStorage.getItem("datos")) {
        datosSeleccionados = localStorage.getItem("datos").split(",")
        for (let dato of datosSeleccionados) {
            arrayDatos.push(dato.split("/"))
        }
        console.log(arrayDatos)

    }
}



function recarga() {


    actualizarArrayDatos()

    setInterval(actualizarMoneda = () => {
        
        actualizarArrayDatos()
        
        contCajaMoneda.innerHTML = ""
        for (let i of arrayTerminaciones) {
            cambioMoneda(i)
        }
        console.log("Moneda Actualizada")
    },60000*5)

    actualizarMoneda()

}
/*Datos actualizados al 15/04/2024 17:30hs */

async function cambioMoneda(moneda) {


    const url = `https://dolarapi.com${moneda}`
    try {
        let response = await fetch(url)
        let datos = await response.json()

        switch (moneda) {
            case "/v1/dolares/oficial": datos.casa = "Dolar Oficial"
                break
            case "/v1/cotizaciones/eur": datos.casa = "Euro Oficial"
                break
            case "/v1/cotizaciones/brl": datos.casa = "Real Brasileño"
                break
            case "/v1/cotizaciones/clp": datos.casa = "Peso Chileno"
                break
            case "/v1/cotizaciones/uyu": datos.casa = "Peso Uruguayo"
                break
            default:
                break
        }
        //console.log(datos)



        creacionCajaMoneda(datos)


        actDatos.innerText = `Datos actualizados al ${reemplazoLetra(datos.fechaActualizacion.slice(0, 19)," ","T")}`

    } catch (error) { alert("El error es: " + error) }

}








/*async function retornoDatos() {
    let moneda = seleccionMoneda.value
    const url = `https://dolarapi.com${moneda}`
    try {
        let response = await fetch(url)
        let datos = await response.json()
        console.log(datos)
        return datos
    } catch(error) { 
        console.log("El error es "+error)
    }

}*/



function creacionCajaMoneda(datos) {

    let datosCasa = datos.casa
    let datosCompra = datos.compra
    let datosVenta = datos.venta
    //let datosFecha = eliminarElemento(datos.fechaActualizacion.slice(0,19),"T").join("")
    let datosFecha = reemplazoLetra(datos.fechaActualizacion.slice(0, 19), " ", "T")
    console.log(datosFecha)
    let datosMoneda = datos.moneda


    let divCajaMoneda = document.createElement("div")
    divCajaMoneda.setAttribute("data-moneda", datos.moneda)
    divCajaMoneda.classList.add("caja-moneda")
    contCajaMoneda.appendChild(divCajaMoneda)

    let div2 = document.createElement("div")
    divCajaMoneda.appendChild(div2)

    let Img = document.createElement("img")
    divCajaMoneda.appendChild(Img)
    Img.src = "../IMG/star_13688.ico"
    Img.addEventListener("click", seleccionImagen = () => {
        if (Img.style.backgroundColor == "red") {
            Img.style.backgroundColor = "transparent"
            datosSeleccionados = eliminarElemento(datosSeleccionados, datosMoneda + " " + datosCasa + "/" + datosCompra + "/" + datosVenta + "/" + datosFecha)
            console.log(datosSeleccionados)
            localStorage.setItem("datos", datosSeleccionados)
        }
        else {
            Img.style.backgroundColor = "red"
            datosSeleccionados.push(datosMoneda + " " + datosCasa + "/" + datosCompra + "/" + datosVenta + "/" + datosFecha)
            localStorage.setItem("datos", datosSeleccionados)
            console.log(datosSeleccionados)
        }

    })

    let h4 = document.createElement("h4")
    h4.innerText = datosMoneda + " " + datosCasa
    div2.appendChild(h4)

    let divContComVen = document.createElement("div")
    div2.appendChild(divContComVen)
    divContComVen.classList.add("contenedor-com-ven")

    let divCompra = document.createElement("div")
    divContComVen.appendChild(divCompra)
    divCompra.classList.add("com-ven")

    let p1 = document.createElement("p")
    p1.innerText = "Compra"
    divCompra.appendChild(p1)

    let p2 = document.createElement("p")
    p2.innerText = datos.compra
    divCompra.appendChild(p2)

    let divVenta = document.createElement("div")
    divVenta.classList.add("com-ven")
    divContComVen.appendChild(divVenta)

    let p3 = document.createElement("p")
    p3.innerText = "Venta"
    divVenta.appendChild(p3)

    let p4 = document.createElement("p")
    p4.innerText = datos.venta
    divVenta.appendChild(p4)



    if (existe(datosMoneda + " " + datosCasa, String(datosCompra), String(datosVenta), datosFecha)) {

        Img.style.backgroundColor = "red"
    }

}




function existe(datosCasa, datosCompra, datosVenta, datosFecha) {

    for (dato of arrayDatos) {


        if (dato.includes(datosCasa) && dato.includes(datosCompra) && dato.includes(datosVenta) && dato.includes(datosFecha)) {
            return true
        }

    }
    return false
}

seleccionMoneda.addEventListener("change", () => {

    for (let moneda of document.querySelectorAll(".caja-moneda")) {
        if (moneda.getAttribute("data-moneda") == seleccionMoneda.value || seleccionMoneda.value == "todas") {
            moneda.style.display = "flex"
            //actDatos.innerText = `Datos actualizados al ${moneda.getAttribute("data-fechaMoneda").slice(0, 10)}`
        }
        else {
            moneda.style.display = "none"
        }

    }


})


//datosCasa+"/"+datosCompra+"/"+datosVenta+"/"+datosFecha



/*
    `<div class="caja-moneda">
                    <div>
                        <h4>${datos.casa}</h4>
                        <div class="contenedor-com-ven">
                            <div class="com-ven">
                                <p>compra</p>
                                <p>${datos.compra}</p>
                            </div>
                            <div class="com-ven">
                                <p>venta</p>
                                <p>${datos.venta}</p>
                            </div>
                        </div>
                    </div>
                    <img src="../IMG/star_13688.ico" alt="">
    </div>`
                return divCajaMoneda
}
*/






/*
casa
:
"oficial"
compra
:
882
fechaActualizacion
:
"2024-06-14T15:05:00.000Z"
moneda
:
"USD"
nombre
:
"Oficial"
venta
:
922 */



/*
 <div class="caja-moneda">
                    <div>
                        <h4>OFICIAL</h4>
                        <div class="contenedor-com-ven">
                            <div class="com-ven">
                                <p>compra</p>
                                <p>$847</p>
                            </div>
                            <div class="com-ven">
                                <p>venta</p>
                                <p>$847</p>
                            </div>
                        </div>
                    </div>
                    <img src="../IMG/star_13688.ico" alt="">
                </div>
 */


/*
<option value="/v1/dolares/blue">Dólar Blue</option>
                    <option value="/v1/dolares/bolsa">Dólar Bolsa (MEP)</option>
                    <option value="/v1/dolares/contadoconliqui">Dólar Contado Con Liqui (CCL)</option>
                    <option value="/v1/dolares/tarjeta">Dólar Tarjeta</option>
                    <option value="/v1/dolares/mayorista">Dólar Mayorista</option>
                    <option value="/v1/dolares/cripto">Dólar Cripto</option>
 */





