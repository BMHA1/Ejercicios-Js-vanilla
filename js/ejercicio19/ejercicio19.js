// Crea una aplicación que nos convierta una cantidad de euros introducida por prompt
// a otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
// parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
// devolverá ningún valor, mostrará un mensaje indicando el cambio.
// El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €




function comprobar(monto, divisa) {
    console.log(typeof divisa)

    if (typeof divisa == Number) {
        
        alert("divisa debe ser un string, no un simbolo ni un numero");
        return false
        
    } else if (monto <= 0) {
        
        alert("ingrese número positivo o mayor a cero");
        return false
    }
    
    return true;
}




function cambio(monto, divisa,) {
    console.log(dolar)
    console.log(monto)
    if (divisa == "dolar") {
        
        return monto * dolar
        
    } else if (divisa == "yenes") {
        
        return monto * yenes
        
    } else if (divisa == "libras") {
        
        return monto * libras

    }
    
}

const dolar = 1.28611
const yenes = 129.852
const libras = 0.86
var cantidadEuros = Number(prompt("introduzca cantidad de euros"))
var monedaCambio = prompt("moneda que desea cambiar: ¿dolar,yenes o libras?")
if (comprobar(cantidadEuros, monedaCambio)) {
    
    var result= cambio(cantidadEuros, monedaCambio);
    alert(Math.floor(result))
    console.log(Math.floor(result))
}


