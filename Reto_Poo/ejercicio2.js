// Haz una clase llamada Password que siga las siguientes condiciones:
// • Que tenga los atributos longitud y contraseña . Por defecto, la longitud será de 8.
// • Los constructores serán los siguiente:
// Incluye el método que genere una contraseña aleatoria con esa longitud.
class Password {
    constructor(longitud) {
        this.longitud = longitud;
        this.contraseña = ''
    }
    generarContrase() {
        for (let i = 0; i <= this.longitud; i++) {
            this.contraseña += Math.floor(Math.random() * 9)
        }
        return 
    }
}
let contraseña1 = new Password(8)
contraseña1.generarContrase()
console.log(contraseña1.contraseña)