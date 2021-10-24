// Reto 1
// Haz una clase llamada Persona que siga las siguientes condiciones:

// • Sus atributos son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura.

// • Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo
// (0 números, cadena vacía para String, etc.). Sexo será hombre por defecto, usa una
// constante para ello.

// • Instancia al menos tres objetos.

class Persona {
    constructor(DNI,nombre,peso,altura,edad){
        this.DNI= DNI,
        this.nombre = nombre,
        this.peso=peso,
        this.altura=altura,
        this.edad=edad,
        this.sexo= "H"//
    }
}   


let persona1 = new Persona ("Y6101895D", "brajin",85,1.80,27)
console.log(persona1)
let persona2 = new Persona("Y6122859D", "julio",90,2.00,45)
console.log(persona2)
let persona3 = new Persona("y1234569e", "miguel", 64, 3.2,80 )
console.log(persona3)




