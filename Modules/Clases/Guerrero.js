import { Clase } from "../Clases.js"

class Guerrero extends Clase {
    constructor(nombre, clase, hp, at, ap, crit, turn){
        super(nombre, clase, hp, at, ap, crit, turn)
    }

    ability(enemigo){
        console.log("%cUsaste la habilidad \"VALOR\"", "color:orange")
        enemigo.hp -= Math.round(this.at * 2)
    }
} 
export {Guerrero}