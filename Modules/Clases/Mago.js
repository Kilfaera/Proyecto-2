import { Clase } from "../Clases.js"

class Mago extends Clase {
    constructor(nombre, clase, hp, at, ap, crit, turn){
        super(nombre, clase, hp, at, ap, crit, turn)
    }

    ability(enemigo){
        console.log("%cUsaste la habilidad \"BOLA DE FUEGO\"", "color:orange")
        enemigo.hp -= Math.round(this.ap * 2)
    }
}
export {Mago}