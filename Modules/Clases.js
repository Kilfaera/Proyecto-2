export class clase{
    constructor(nombre, clase, hp, at, ap){
        this.nombre = nombre
        this.clase = clase
        this.hp = hp
        this.at = at
        this.ap = ap
    }
    stats(){
        console.log(`Clase: ${this.clase}\nVida: ${this.hp}\nAtaque: ${this.at}\nPoder de habilidad: ${this.ap}`)
    }
}

