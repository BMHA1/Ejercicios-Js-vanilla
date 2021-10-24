// Crearemos una superclase llamada Electrodoméstico con las siguientes
// características:

// • Sus atributos son precio base, color, consumo energético (letras entre A y F) y
// peso. Indica que se podrán heredar.

// • Por defecto, el color será blanco, el consumo energético será F, el precio Base es
// de 100 € y el peso de 5 kg. Usa constantes para ello.

// • Los colores disponibles son blanco, negro, rojo, azul y gris. No importa si el
// nombre esta en mayúsculas o en minúsculas..


class Electrodomestico {
    #_precioBase
    #_color
    #_consumoEnergetico
    #_peso
    constructor(precio, color, consumoEnergetico, peso) {

        this.consumoEnergetico = consumoEnergetico;
        this.comprobarConsumo(consumoEnergetico)
        this.precioBase = precio;
        this.calcularPrecio(this.consumoEnergetico, peso)
        this.color = color;
        this.comprobarColor(color)
        this.peso = peso
    }
    // set consumoEnergetico(consumoEnergetico) {
    //   return 
    // }
    // get consumoEnergetico() {
    //     return this.#_consumoEnergetico
    // }
    // set color(color) {
    //     // if (color !== String) {
    //     //     this.#_color = color
    //     // }
    // }
    // get color() {
    //     return this.#_color
    // }

    // set precioBase(precio) {
    //     // if (precio >0) {

    //     //     this.#_precioBase = precio
    //     // }
    // }
    // get precioBase() {
    //     return this.#_precioBase
    // }
    // set peso(peso) {
       
    // }
    // get peso() {
    //     return this.#_peso
    // }

    comprobarConsumo(letraComprabar) {
        const letras = ['A', 'B', 'C', 'D', 'E', 'F']
        if (letras.includes(letraComprabar)) return this.consumoEnergetico = letraComprabar
        else return this.consumoEnergetico = 'F'
    }
    comprobarColor(color) {
        const colores = ["blanco", "negro", "azul", "gris", "rojo"]
        if (colores.includes(color)) return this.color = color
        else return this.color = 'blanco'
    }
    calcularPrecio(letra, peso) {
        let precioTamaño = 0
        const tablaPrecio = {
            "A": 100,
            "B": 80,
            "C": 60,
            "D": 50,
            "E": 30,
            "F": 10
        }
        if (peso < 19) {
            precioTamaño = 10
        } else if (peso >= 20 || peso < 50) {
            precioTamaño = 50;
        } else if (peso >= 50 && peso < 80) {
            precioTamaño = 80
        } else if (peso >= 80) {
            precioTamaño = 100
        }
        this.precioBase = precioTamaño + tablaPrecio[letra]
        return this.precioBase
    }

}

class Nevera  extends Electrodomestico{

        constructor(precio, color, consumoEnergetico, peso,carga){
            super(precio, color, consumoEnergetico, peso)
            this.carga=carga
            this.comprobarConsumo(consumoEnergetico)
            this.calcularPrecio(consumoEnergetico, peso, carga)
        }

        // set carga(carga){
            
        // }
        // get carga(){
        //     return carga
   
        calcularPrecio(letra, peso,carga) {
           
            let precioTamaño = 0
            let precioCarga=0
            const tablaPrecio = {
                "A": 100,
                "B": 80,
                "c": 60,
                "D": 50,
                "E": 30,
                "F": 10
            }
            if (peso < 19) {
                precioTamaño = 10
            } else if (peso >= 20 || peso < 50) {
                precioTamaño = 50;
            } else if (peso >= 50 && peso < 80) {
                precioTamaño = 80
            } else if (peso >= 80) {
                precioTamaño = 100
            }

            if(carga>30) precioCarga =50 
            else precioCarga = 0



            this.precioBase = precioTamaño + tablaPrecio[letra]+precioCarga
            return this.precioBase
        }

}


let nevera1 = new Nevera(100, 'blanco', 'A',30,35)
let nevera2 = new Nevera(30, 'verde', 'A',45,60)
let nevera3 = new Nevera(100, 'azul', 'A',34,60)
let nevera4 = new Nevera(80, 'blanco', 'A',80,60)
let nevera5 = new Nevera(35, 'gris', 'A',50,10)

class Televisor extends Electrodomestico{
    constructor(precio, color, consumoEnergetico, peso, resolucion=20, _4k=false){
        super(precio, color, consumoEnergetico, peso)

        this.resolucion=resolucion
        this._4k=_4k
        this.comprobarConsumo(consumoEnergetico)
        this.calcularPrecio(consumoEnergetico, peso, resolucion,_4k)
       
    }
    // get resolucion(){

    // }

    // get _4k(){

    // }
    calcularPrecio(letra, peso,resolucion,definicion) {
           
        let precioTamaño = 0
        let precioResolucion=1
        let precioDefinicion = 0

        const tablaPrecio = {
            "A": 100,
            "B": 80,
            "C": 60,
            "D": 50,
            "E": 30,
            "F": 10
        }
        if (peso < 19) {
            precioTamaño = 10
        } else if (peso >= 20 || peso < 50) {
            precioTamaño = 50;
        } else if (peso >= 50 && peso < 80) {
            precioTamaño = 80
        } else if (peso >= 80) {
            precioTamaño = 100
        }

        if(resolucion>30) precioResolucion = 1.30 
        else precioResolucion = 1

        if (definicion) precioDefinicion = 50


        this.precioBase = (precioTamaño + tablaPrecio[letra]+precioDefinicion)*(precioResolucion)
        return this.precioBase
    }
    
}
let tv1 = new Televisor( undefined,'blanco','A',10,40,true)
let tv2 = new Televisor( undefined,'blanco','D',10,40,true)
let tv3 = new Televisor(undefined,'negro','E',10,30,false)
let tv4 = new Televisor( undefined,'negro','A',10,30,true)
let tv5 = new Televisor( undefined,'azul','C',10,30,false)



class MainAPP {
    constructor(){
        
        this.carrito = []
    }
    calculartotal(carrito){
        let claseTelevisor=[]
        let clasenevera=[]

        for(  let i=0;i<= carrito.length; i++){

                if(carrito[i].carga){
                  clasenevera=carrito.push[i]
                }else{
                claseTelevisor=carrito.push[i]
                }
        }
        console.log(`Precio total nevera ${clasenevera} + precio total televisor: ${claseTelevisor}` )
    }

}
let compra=[tv1,tv2,tv3,tv4,tv5,nevera1, nevera2,nevera3,nevera4,nevera5]
let carrito = new MainAPP()
carrito.calculartotal(compra)