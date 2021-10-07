


// 10. Realiza una aplicación que nos pida un número de ventas a introducir, después
// nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
// Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo
// que no.


let numeroDeventas = Number(prompt("introduce ventas"))
numeroDeventas = 6

let ventastotales = Number()

console.log(ventastotales)


for (var i = 0; i < numeroDeventas; i++) {
    let ventaActual = Number(prompt("Introduce monto"))
    ventastotales += ventaActual
}

// I = 0; ventaActual = 200; ventasTotales = 200
// I = 1; ventaActual = 300; ventasTotales = 500
// I = 2; ventaActual = 400; ventasTotales = 900
// I = 3; ventaActual = 200; ventasTotales = 1100
// I = 4; ventaActual = 200; ventasTotales = 1300
// I = 5; ventaActual = 200; ventasTotales = 1500


console.log(ventastotales);

