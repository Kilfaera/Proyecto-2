import { personaje } from "../../Personaje/creacionPersonaje.js"
import { harpia } from "../../Personaje/RAZAS.js"
import { battle } from "../../Stages/Battle.js"

export function CaminoOeste(norte, este){
let north = norte, east = este
    switch(north){
        case 0:
            console.log("%cHay una pared, No puedes avanzar", "color: red")
        break
        case 1:
            switch(east){
                case 0:
                    console.log("%cHay una pared, No puedes avanzar", "color: red")
                break
                case 1:
                    console.log("%cAvanzas hacia el oeste","color:green")
                    east--
                    console.log("%cObservas el cadaver del zombie","color:blue")
                    break
                case 2:
                    console.log("%cAvanzas hacia el oeste","color:green")
                    east--
                    console.log("%cEntras a una habitación con una lampara de llama azul","color:blue")
                break
            }
        break
        case 2:
            console.log("%cHay una pared, No puedes avanzar", "color: red")
        break
        case 3: 
            switch(east){
                case 0:
                    console.log("%cHay una pared, No puedes avanzar", "color: red")
                    break
                case 1: 
                    console.log("%cAvanzas hacia el oeste","color:green")
                    east--
                    if(harpia.alive === true){
                        battle(personaje, harpia)//batalla harpia
                    }else{console.log("%cObservas el cadaver del Harpia","color:blue")}
                break
                case 2: 
                    console.log("%cAvanzas hacia el oeste","color:green")
                    east--
                    console.log("%cEntras a una habitacion completamente amarilla","color:blue")
                    break
                case 3:
                    console.log("%cAvanzas hacia el oeste","color:green")
                    east--
                    console.log("%cUna habitacion con una armadura oxidada","color:blue")
                break
        }
    }
    return east
}
