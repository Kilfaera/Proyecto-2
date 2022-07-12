import { Clase } from "../Clases.js"

class Guerrero extends Clase {
    constructor(nombre, clase, hp, at, ap, crit, turn){
        super(nombre, clase, hp, at, ap, crit, turn)
    }

    ability(enemigo){
        let valor = Math.round(this.at * 2)
        console.log(`%cUsaste la habilidad "VALOR". Hiciste ${valor} de daño`, `color:orange`)
        enemigo.hp -= valor
    }
} 
export {Guerrero}