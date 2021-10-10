// <!-- 5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
// realizará un método al que le pasaremos el número como parámetro, devolverá un
// String con el numero convertido a binario. Para convertir un número decimal a
// binario,
//  debemos dividir entre 2 el número y el resultado de esa división se divide
// entre 2 de nuevo hasta que no se pueda dividir más, el resto que obtengamos de
// cada división formara el número binario, de abajo a arriba. -->


var numeroDecimal = Number(prompt("introduce numero a convertir"))
console.log(numeroDecimal);
var arraybinario = []

// function buscarBinario(a) {

//     while (a >= 1) {
//         var resto = a % 2
//         arraybinario.unshift(resto)
//         a = a / 2

//     }

//     return arraybinario

// }



function buscarBinario(a) {

    if (a >= 1) {
        var resto = a % 2
        arraybinario.unshift(resto)
        a = a / 2
        buscarBinario(a)
    }

}

buscarBinario(numeroDecimal);
console.log(arraybinario)


// arraybinario.unshift(resto)
// console.log(arraybinario)

// for(var i =0 ; i==(numeroDecimal>1);i++){
// var resto = Math.floor(numeroDecimal % 2)
// console.log("entro al bucle");
//         console.log(resto)
//         arraybinario.unshift(resto)
//         numeroDecimal=numeroDecimal/2
//         console.log(arraybinario)
//         console.log(numeroDecimal)

// }




// 404004
// console.log(400/2)200
// console.log(400%2)