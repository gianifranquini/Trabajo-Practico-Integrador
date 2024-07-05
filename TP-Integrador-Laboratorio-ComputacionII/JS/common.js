function eliminarElemento(array, elemento) {
    nuevoArray = []
    for (let i of array) {

        if (i !== elemento) {

            nuevoArray.push(i)
        }
    }
    return nuevoArray
}

function compararMayorFecha(fecha1, fecha2) {
    let año1 = Number(fecha1.slice(0, 4))
    let mes1 = Number(fecha1.slice(5, 7))
    let dia1 = Number(fecha1.slice(8, 10))
    let hora1 = Number(fecha1.slice(11,13))
    let minuto1 = Number(fecha1.slice(14,16))
    let segundo1=Number(fecha1.slice(17,19))

    let año2 = Number(fecha2.slice(0, 4))
    let mes2 = Number(fecha2.slice(5, 7))
    let dia2 = Number(fecha2.slice(8, 10))
    let hora2 = Number(fecha2.slice(11,13))
    let minuto2 = Number(fecha2.slice(14,16))
    let segundo2=Number(fecha2.slice(17,19))

    if (año1 > año2) {
        return fecha1
    }
    else if (año1 < año2) {
        return fecha2
    }
    else if (mes1 > mes2) {
        return fecha1
    }
    else if (mes1 < mes2) {
        return fecha2
    }
    else if (dia1 > dia2) {
        return fecha1
    }
    else if (dia1 < dia2) {
        return fecha2
    }
    else if(hora1 > hora2){
        return fecha1
    }
    else if( hora1 < hora2){
        return fecha2
    }
    else if(minuto1 > minuto2){
        return fecha1
    }
    else if( minuto1 < minuto2){
        return fecha2
    }

    else if(segundo1 > segundo2){
        return fecha1
    }
    else if( segundo1 < segundo2){
        return fecha2
    }
   
    else {
        //alert("Error, Fechas iguales "+fecha1)
        return fecha1
    }




}

function ordenarFechas(fechas) {
    let fechasOrdenadas = []
    let fechaMayor
    let arrayAux = fechas
    //console.log(fechas)


    for (let i = 0; i < fechas.length; i++) {

        fechaMayor = arrayAux[0]

        for (let fecha of arrayAux) {

            if (compararMayorFecha(fechaMayor, fecha) == fecha) {
                fechaMayor = fecha
            }
        }

        arrayAux = eliminarElemento(arrayAux, fechaMayor)
        fechasOrdenadas.unshift(fechaMayor) //es como el push pero lo agrega al principio

    }
    //console.log(fechasOrdenadas)
    return fechasOrdenadas

}

function unificarFechas() {
    let fechasUnificadas = []

    for (let dato of arrayDatos) {
        if (!(fechasUnificadas.includes(dato[3]))) {

            fechasUnificadas.push(dato[3])
        }


    }
    console.log(fechasUnificadas)
    return fechasUnificadas
}

function reemplazoLetra(texto,nuevaLetra,letraReemplazar){
    retornoTexto=""
    for(let letra of texto){
        if(letraReemplazar==letra){
            letra=nuevaLetra
        }
        retornoTexto+=letra
    }
    return retornoTexto
}

function validarEmail(email){
    if(email==""){
        alert("Ingrese el Email")
        return false
    }

    if(email[0]=="@"){
        alert("Ingrese datos antes del @")
        return false
    }

    if(email[email.length-1]=="@"){
        alert("Ingrese datos despues del @")
        return false
    }

    for(let letra of email){
        if(letra=="@"){
            return true
        }
    }
    alert("Ingrese el @ del Email")
    return false
}

const imagenComentario = document.getElementById("imagen-comentario")
const nombreComentario = document.getElementById("nombre-comentario")
const textoComentario = document.getElementById("texto-comentario")
let posicionActual = 0

arrayComentarios = [
    ["../IMG/cara.jpg", "Juan Perez", "Es la mejor página que visité en mi vida"],
    ["../IMG/cara2.jpg", "Marcela Gimenez", "¡¡¡Me encanta esta página!!!"],
    ["../IMG/cara3.jpg", "Maria Fernandez", "El mejor sitio web que visité hasta ahora, me encanta!!!"]
]





setInterval(() => {
    if (posicionActual == arrayComentarios.length - 1) {
        posicionActual = 0;
    }
    else {
        posicionActual++;
    }

    imagenComentario.src = arrayComentarios[posicionActual][0]
    nombreComentario.innerText = arrayComentarios[posicionActual][1]
    textoComentario.innerText = arrayComentarios[posicionActual][2]
    
    },5000)
