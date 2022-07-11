import { personaje } from "../Personaje/creacionPersonaje.js"
import { Menu } from "../menu/menu.js"

let sword = true
const equip = new Menu ('¿Quieres equipar la espada?:',['Si','No'])

export function swordEquip(){
    if (sword == true){
        console.log("%cApareciste en una habitación casi vacia, lo unico que en ella es una espada tan oscura como la noche","color:yellow")
        equip.mostrarOpciones()
        switch(equip.getUserInput(equip)){
        case 0:
            personaje.hp+=5000
            personaje.at+=2000
            personaje.ap+=1000
            personaje.crit = 100
            sword = false
            personaje.descripcion()
        break
        case 1:
            console.log("Entendido")
        break
        }
    }else{
        console.log("No hay nada aca")
    }
}