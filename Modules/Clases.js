class Clase{
    constructor(nombre, clase, hp, at, ap, crit, turn){
        this.nombre = nombre
        this.clase = clase
        this.hp = hp
        this.at = at
        this.ap = ap
        this.crit = crit
        this.abilityTurn = turn
        this.alive = true
    }
    descripcion(){
        console.log(`%cClase: ${this.clase}\nVida: ${this.hp}\nAtaque: ${this.at}\nPoder de habilidad: ${this.ap}\nProbabilidad de critico: ${this.crit}%\nTurnos para su habilidad: ${this.abilityTurn}`,"color:#572364")
    }

    attack(enemigo){
        let critico = Math.round(Math.random()*(100-0))
        if (critico<=this.crit){
            console.log(`%cGOLPE CRITICO DE ${this.nombre}`, `color:red`)
            enemigo.hp -= Math.round(this.at*0.8)
        }else{ enemigo.hp -= this.at }
        
    }

}
export {Clase}