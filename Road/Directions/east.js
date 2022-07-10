import { battle } from "../../Stages/Battle.js"
import { personaje } from "../../Personaje/creacionPersonaje.js"
import { grifo } from "../../Personaje/RAZAS.js"
import { swordEquip } from "../swordRoom.js"
import { Door } from "./north.js"

export function CaminoEste(north, east){
    switch(north){
        case 0:
            console.log("%cHay una pared, No puedes avanzar", "color: red")
        break
        case 1:
            switch(east){
                case 0:
                    east++
                    console.log("%cEntras a una habitacion con una lampara de llama azul","color:blue")
                break
                case 1:
                    Door.mostrarOpciones()
                    switch(Door.getUserInput(Door)){
                        case 0:
                            console.log("%cDecidiste abrir la puerta y avanzar","color:green")
                            if(grifo.alive === true){
                                east++
                                battle(personaje, grifo)//batalla grifo
                            }else{
                                console.log("%cObservas el cadaver del Grifo","color:blue")
                            }
                        break
                        case 1:
                            console.log("%cDecidiste no abrir la puerta","color:red")

                        break
                    }
                break
                case 2:
                    console.log("%cHay una pared, No puedes avanzar", "color: red")
                }
        break
        case 2: 
        console.log("%cHay una pared, No puedes avanzar", "color: red")
        break;
        case 3:
            switch(east){
                case 0: 
                    east++
                    console.log("%cEntras a una habitación totalmente amarilla... Te sientes perturbado","color:blue")
                break
                case 1:
                    east++
                    console.log("%cEntras a una habitación con una armadura oxidada","color:blue")
                break
                case 2:
                        console.log("%cHay una puerta","color:blue")
                        Door.mostrarOpciones()
                        switch(Door.getUserInput(Door)){
                            case 0:
                                console.log("%cDecidiste abrir la puerta y avanzar","color:green")
                                east++
                                swordEquip()
                            break
                            case 1:
                                console.log("%cDecidiste no abrir la puerta","color:red")
                            break
                        }
                break
                case 3:
                    console.log("%cHay una pared, No puedes avanzar", "color: red")
                break
            }
        }
    return east
}