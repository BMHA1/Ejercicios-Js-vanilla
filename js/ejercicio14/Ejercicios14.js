// 2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios
// pasados por el usuario (prompt). Crea un método donde pasamos como parámetros
// entre que números queremos que los genere, podemos pedirlas al usuario antes de
// generar los números. Este método devolverá un número entero aleatorio. Muestra
// estos números por consola.



var numeroMinimo = Number(prompt("Introduzca parametro minimo"));
var numeroMaximo = Number(prompt("Introduzca parametro mayor"));
var cantidadDenumeros = Number(prompt("Introduzca"));

function aleatorio(a, b) {//entiendase a como el valor minimo y b como maximo
    return Math.floor(Math.random() * ((b + 1) - a) + a);
}

for (var i = 0; i < cantidadDenumeros; i++) {

    var resultado = aleatorio(numeroMinimo, numeroMaximo)
    console.log(resultado)
}

