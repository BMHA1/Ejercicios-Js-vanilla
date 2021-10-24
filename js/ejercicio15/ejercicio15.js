// 3. Crea una aplicación que nos pida un número por prompt y con un método se lo
// pasamos por parámetro para que nos indique si es o no un número primo, debe
// devolver true si es primo sino false. Un número primo es aquel solo puede dividirse
// entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin
// embargo, 17 si es primo.

var introduceNumero = Number(prompt("ji"))

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
        return "false no es primo nooooooooooo"
    } else {
        return "true, porque sí, él es numero primo!17"
    }

}
let resultado = numPrimo(introduceNumero)
console.log(resultado)

  