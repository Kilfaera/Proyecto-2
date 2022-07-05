import { Clase } from "../Clases.js"

class Paladin extends Clase {
    constructor(nombre, clase, hp, at, ap, crit, turn){
        super(nombre, clase, hp, at, ap, crit, turn)
    }

    ability(enemigo){
        console.log("%cUsaste la habilidad \"PERSEVERANCIA\"","color:yellow")
        this.hp += this.ap*5
    }
}
export {Paladin}