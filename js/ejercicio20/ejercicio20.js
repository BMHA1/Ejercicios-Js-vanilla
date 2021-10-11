// 20.Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
// por consola el índice y el valor al que corresponde. Haz dos métodos, uno para
// rellenar valores y otro para mostrar.

var arrayDiez = []
var ingresoNumeros = 0;

function rellenar() {

    for (var i = 0; i <= 9; i++) {

        ingresoNumeros = Number(prompt("introduzca numero"))
        arrayDiez.push(ingresoNumeros)

        print(i,arrayDiez[i])

    }
    //return arrayDiez
}


function print(posicion, valor) {
   console.log(' La posición de este valor en el array es ->', posicion)
   console.log(' El valor de esta posicion en el array es ->', valor)
}


rellenar()
