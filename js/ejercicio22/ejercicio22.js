// 22.Crea un array de números de un tamaño pasado por prompt, el array contendrá
// números aleatorios primos entre los números deseados**, por último, nos indicar cual
// es el mayor de todos. Haz un método para comprobar que el número aleatorio es
// primo, puedes hacer todos los métodos que necesites.


var tamañoArray = Number(prompt("Intoduce el tamaño del array"));

function star(a) {
    insertarArray(a)
}

function insertarArray(tamañoArray) {
    var arrayContenedor = [];
    
    for (let i = 0; arrayContenedor.length < tamañoArray; i++) {
        var numeroaletorio = Math.floor(Math.random() * (tamañoArray - 0)) + 0;
            if (numPrimo(numeroaletorio)) {
            arrayContenedor.push(numeroaletorio)
        }
    }
    return arrayContenedor
}

// let pruebaInser = insertarArray(10)
// console.log(pruebaInser)




function numPrimo(input) {

    

    let result = [];

    for (i = 2; i <= input; i++) {
        let numFactors = [];

        for (factor = 2; factor <= i; factor++) {
            if (i % factor === 0) numFactors.push(factor);
        }
        if (numFactors.length === 1) result.push(i);
    }

    if (result.indexOf(input) == -1) {
        return false
    } else {
        return true
    }

}
// let pruebafuncion2 = numPrimo(17) //funciona
// console.log(pruebafuncion2) // true



function esMayor(a) {

    
    var numeroMayor = Math.max(...a)
    return numeroMayor

}
var resultMayor= esMayor(pruebaInser)
console.log(resultMayor)

// function print(numeroMayor,arraydefinodo ){

//     console.log("El Número mayor es:" + numeroMayor)
//     console.log("array al azar es:" + arraydefinodo)

// }


// // var nuevaAarrya = star(tamañoArray)
// print=(esMayor(),nuevaAarrya)