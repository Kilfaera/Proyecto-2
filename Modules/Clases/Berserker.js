import { Clase } from "../Clases.js"

    class Berserker extends Clase {
    constructor(nombre, clase, hp, at, ap, crit, turn){
        super(nombre, clase, hp, at, ap, crit, turn)
    }

    ability(enemigo){
        const fury = Math.round(this.at * 3)
        enemigo.hp -= fury
        console.log(`%cUsaste la habilidad "FURIA IMPARABLE". Hiciste ${fury} de daño`,`color:red`)
        let selfdamage = Math.round(this.hp*0.3)
        this.hp -= selfdamage
        console.log(`%cRecibiste ${selfdamage} de daño por usar "FURIA IMPARABLE"`,`color:red`)
    }
}
export{Berserker}