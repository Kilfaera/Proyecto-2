import { Clase } from "../Clases.js"

class Mago extends Clase {
    constructor(nombre, clase, hp, at, ap, crit, turn){
        super(nombre, clase, hp, at, ap, crit, turn)
    }

    ability(enemigo){
        let fire = Math.round(this.ap * 2)
        console.log(`%cUsaste la habilidad "BOLA DE FUEGO". Hiciste ${fire} de daño`, `color:orange`)
        enemigo.hp -= fire
    }
}
export {Mago}