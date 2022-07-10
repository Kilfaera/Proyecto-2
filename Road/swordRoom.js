import { personaje } from "../Personaje/creacionPersonaje.js"

let sword = true, equip

export function swordEquip(){
    if (sword == true){
        console.log("Apareciste en una habitación casi vacia, lo unico que en ella es una espada tan oscura como la noche")
        equip = parseInt(prompt("¿Quieres equiparla?\n1. Si\n2. No"))
        if (equip == 1){
            personaje.hp+=5000
            personaje.at+=2000
            personaje.ap+=1000
            personaje.crit = 100
            sword = false
            personaje.descripcion()
        }else{console.log("Entendido")}
    }else{
        console.log("No hay nada aca")
    }
}