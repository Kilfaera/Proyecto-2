import { Clase } from "../Clases.js"

    class Berserker extends Clase {
    constructor(nombre, clase, hp, at, ap, crit, turn){
        super(nombre, clase, hp, at, ap, crit, turn)
    }

    ability(enemigo){
        console.log("%cUsaste la habilidad \"FURIA IMPARABLE\"","color:red")
        enemigo.hp -= Math.round(this.at * 3)
        let selfdamage = Math.round(this.hp*0.3)
        this.hp -= selfdamage
        console.log(`%cRecibiste ${selfdamage} de daño por usar "FURIA IMPARABLE"`,`color:red`)
    }
}
export{Berserker}