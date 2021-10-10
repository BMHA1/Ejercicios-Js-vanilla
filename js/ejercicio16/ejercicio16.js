// Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
// realizara mediante un método al que le pasamos el número como parámetro. Para
// calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por
// ejemplo, si introducimos un 5, realizara esta operación 5*4*3*2*1=120.



var introduceNumero = Number(prompt("introduce numero"));





calculoFactorial = (a) => {

        let numeroFactorial = a
        
    for (var i = numeroFactorial - 1; i > 0; --i) {

        numeroFactorial *= i


    }
    return numeroFactorial

}

let resultado = calculoFactorial(introduceNumero)
console.log(resultado)
