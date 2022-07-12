import { Clase } from "../Clases.js"

class Paladin extends Clase {
    constructor(nombre, clase, hp, at, ap, crit, turn){
        super(nombre, clase, hp, at, ap, crit, turn)
    }

    ability(enemigo){
        let perseverance = this.ap*5
        console.log(`%cUsaste la habilidad "PERSEVERANCIA". Te curaste ${perseverance} de vida`,`color:yellow`)
        this.hp += perseverance
    }
}
export {Paladin}