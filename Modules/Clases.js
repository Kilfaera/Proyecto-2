class Clase{
    constructor(nombre, clase, hp, at, ap, crit, turn){
        this.nombre = nombre
        this.clase = clase
        this.hp = hp
        this.at = at
        this.ap = ap
        this.crit = crit
        this.abilityTurn = turn
    }
    descripcion(){
        console.log(`%cClase: ${this.clase}\nVida: ${this.hp}\nAtaque: ${this.at}\nPoder de habilidad: ${this.ap}\nTurnos para su habilidad: ${this.abilityTurn}`,"color:yellow")
    }

    attack(enemigo){
        enemigo.hp -=this.at
    }

}

class Guerrero extends Clase {
    constructor(nombre, clase, hp, at, ap, crit, turn){
        super(nombre, clase, hp, at, ap, crit, turn)
    }

    ability(enemigo){
        console.log("%cUsaste la habilidad \"VALOR\"", "color:orange")
        enemigo.hp -= Math.round(this.at * 2)
    }
} 
class Paladin extends Clase {
    constructor(nombre, clase, hp, at, ap, crit, turn){
        super(nombre, clase, hp, at, ap, crit, turn)
    }

    ability(enemigo){
        console.log("%cUsaste la habilidad \"PERSEVERANCIA\"","color:yellow")
        this.hp += this.ap*5
    }
}
class Mago extends Clase {
    constructor(nombre, clase, hp, at, ap, crit, turn){
        super(nombre, clase, hp, at, ap, crit, turn)
    }

    ability(enemigo){
        console.log("%cUsaste la habilidad \"BOLA DE FUEGO\"", "color:orange")
        enemigo.hp -= Math.round(this.ap * 2)
    }
}
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
export {Clase, Guerrero, Paladin, Mago, Berserker}

