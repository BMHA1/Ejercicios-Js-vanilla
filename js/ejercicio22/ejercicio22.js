// 22.Crea un array de números de un tamaño pasado por prompt, el array contendrá
// números aleatorios primos entre los números deseados, por último, nos indicar cual
// es el mayor de todos. Haz un método para comprobar que el número aleatorio es
// primo, puedes hacer todos los métodos que necesites.


var tamañoArray = Number(prompt("Intoduce el tamaño del array"));
var Arraycontenedor = [];



function insertarArray(tamañoArray) {

    for (let i = 0; i <= tamañoArray; i++) {
        console.log(tamañoArray)
        var numeroaletorio = Math.floor(Math.random() * (tamañoArray - 0)) + 0;
        if (numeroprimo(numeroaletorio)) {
            Arraycontenedor.push(numeroaletorio)
        }
    }
}

numeroprimo = (a) => {

    if (a % 2 == 0 || a == 1) {

        return false
    } else {
        return true
    }
}


function esMayor(){

var numeroMayor=Math.max(...Arraycontenedor)
return numeroMayor

}




let resultado = insertarArray(tamañoArray);

