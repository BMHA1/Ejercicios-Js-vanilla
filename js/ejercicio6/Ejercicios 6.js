


//reto 6 Lee un número por teclado que pida el precio de un producto (puede tener
// decimales) y calcule el precio final con IVA. El IVA sera una constante que sera
// del 21%

let numeroIva = Number(prompt("Introduzca precio del producto"))
const iva = 1.21
let resutadoProducto = numeroIva * iva;
console.log(`total a pagar ${resutadoProducto}`);

// 7. Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.


let variableN = 0

while (variableN <= 99) {

    variableN++;
    console.log(variableN)
}


// 8.Haz el mismo ejercicio anterior con un bucle for.



for (var i = 0; i <= 100; i++) {

    console.log(i)
}

// 9.Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza
// el bucle que desees.

for (var i = 0; i <= 100; i++) {

    if (i % 2 == 0 || i % 3 == 0) {
        console.log(i)
    }

}

// 10. Realiza una aplicación que nos pida un número de ventas a introducir, después
// nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
// Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo
// que no.

let numeroDeventas = Number(prompt("introduce ventas"))

let ventastotales = 0

for (var i = 0; i < numeroDeventas; i++) {

    let ventaActual = Number(prompt("Introduce monto"))

    ventastotales += ventaActual

}

console.log(ventastotales);


// reto 11: Crea una aplicación que nos pida un día de la semana y que nos diga si es un día
// laboral o no. Usa un switch para ello.

let diaSemana = prompt("introducediadelasemana")


switch (diaSemana) {
    case "lunes":
        alert("Es Laboral");
        break;
    case "martes":
        console.log("Es Laboral")
        break
    case "miercoles":
        console.log("Es Laboral")
        break
    case "jueves":
        console.log("Es Laboral")
        break
    case "viernes":
        console.log("Es Laboral")
        break
    case sábado:
        console.log("!!a descansar!!")
        break;
    case domingo:
        console.log("!!a descansar!!")
        break;
    default:
}


// 12. Escribe una aplicación con un String que contenga una contraseña cualquiera.
// Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando
// aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo
// “Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale,
// aunque le queden intentos).

const contraseña = "soygrande";


for (var i = 0; i <= 2; i++) {

    let clave = prompt("Introduzca contraseña")
    alert(i)

    if (contraseña == clave) {

        alert("Enhorabuena!!")
        i = 3
        console.log(i)
    } else {
        alert("te quedan" + (" ") + (2 - i) + (" ") + "intentos")
    }
}

alert("haz la tarea")



// 13.Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y
// un signo aritmético (String), según este último se realizará la operación
// correspondiente. Al final mostrara el resultado en un cuadro de dialogo.
// Los signos aritméticos disponibles son:
// +: suma los dos operandos.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)
// ^: 1o operando como base y 2o como exponente.
// %: módulo, resto de la división entre operando1 y operando2.

var numero1 = Number(prompt("introduzca numero 1"));
var numero2 = Number(prompt("introduzca numero2"));
var operacion = prompt("introduzca operacion o signo aritmético");


if (operacion == "sumar" || operacion === "+") {

    var resultado = numero1 + numero2
    alert(resultado)

} else if (operacion == "resta" || operacion === "-") {
    var resultado = numero1 - numero2
    alert(resultado)

} else if (operacion == "mulplicar" || operacion === "*") {
    var resultado = numero1 * numero2
    alert(resultado)


} else if (operacion == "division" || operacion === "/") {
    var resultado = numero1 / numero2
    alert(resultado)

} else if (operacion == "Resto" || operacion === "%") {
    var resultado = numero1 % numero2
    alert(resultado)

} else if (operacion == "exponente" || operacion === "^") {
    var resultado = numero1 ** numero2
    alert(resultado)
}