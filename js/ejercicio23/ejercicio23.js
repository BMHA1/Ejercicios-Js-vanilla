// 11. Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos
// estará rellenado con números aleatorios y el otro apuntará al array anterior, reasigna
// los valores del segundo array con valores aleatorios. Después, crea un método que
// tenga como parámetros, los dos arrays y devuelva uno nuevo con la multiplicación
// de la posición 0 del array1 con el del array2 y así sucesivamente. Por último, muestra
// el contenido de cada array.2


var tamañoArray = Number(prompt("introducir numero"))


function rellenar(a) {
    var arrayAleatorio = [];
    for (let i = 0; i <= a; i++) {
        console.log(a)
        var numeroaletorio = Math.floor(Math.random() * (a - 0)) + 0;
        console.log(numeroaletorio)
        arrayAleatorio.push(numeroaletorio)
    }

    return arrayAleatorio
}


var primerArray = rellenar()
var segundoArray = rellenar()


function multiplicacion(array1, array2) {

    for (a = 0; a <= array1.length; a++) {

        var result = []
        result.push[array1[i] * array2[i]]

    }


}
