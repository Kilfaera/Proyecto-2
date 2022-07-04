export class item{
    constructor(nombre, at, hp, ap){
        this.nombre = nombre
        this.at = at
        this.hp = hp
        this.ap = ap
    }

    ItemStats(){
        console.log(`Nombre: ${this.nombre}\nVida: ${this.hp}\nAtaque: ${this.at}\nPoder de habilidad: ${this.ap}`)

    }

}


