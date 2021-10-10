// 19. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
// pasando el número por parámetro devolverá el número de cifras.

function esNumeroValido(numero) {
    if (isNaN(numero)) {
        alert ('debe introducir un número')
        return false
    }

    else if (numero % 1 !== 0) {
        alert ('debe introducir un número entero')
        return false
    }

    else if (numero < 0) {
        alert ('el mumero debe ser positivo')
        return false
    }
    return true
}

function mostrarCifras(numero) {
    let numbLength = numero.length
    if(numbLength === 1) {
        alert (numbLength +" cifra")
    } else {
        alert (numbLength +" cifras")
    }
}

var numeroContar = prompt("introduce el numero");
if(esNumeroValido(numeroContar)) {
    mostrarCifras(numeroContar)
}



