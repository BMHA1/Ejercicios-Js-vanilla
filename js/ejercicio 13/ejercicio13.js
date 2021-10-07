// Crea una aplicación que nos calcule el área de un círculo, cuadrado o triangulo.
// Pediremos al usuario que figura queremos calcular su área y según lo introducido
// pedirá los valores necesarios para calcular el área. Para ello has de crear un método
// por cada figura para calcular cada área, este devolverá un número real. Muestra el
// resultado por consola.



// Aquí te mostramos que necesita cada figura:

// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado




var elegirFigura = prompt("introducir figura geometrica");
var resultado;


if (elegirFigura == "circulo") {

    var pedirRadio = Number(prompt("introduce radio"));

    resultado = (pedirRadio**circulo2) * Math.PI


} else if (elegirFigura == "triangulo") {

    var pedirBase = Number(prompt("introduce Base"));
    var pedirAltura = Number(prompt("introduce Altura"));

    resultado = (pedirAltura * pedirBase) / (2)

} else if (elegirFigura == "cuadrado") {

    var pedirLado = Number(prompt("introduce lado del cuadrado"));


    resultado = pedirLado**2;

}


console.log(resultado);