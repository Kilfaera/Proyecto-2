export class base{
    constructor(nombre, clase, hp, at, ap){
        this.nombre = nombre
        this.clase = clase
        this.hp = hp
        this.at = at
        this.ap = ap
    }
}


export class player extends base{
    constructor(username, clase, hp, at , ap, mp){
        super()
    }
}