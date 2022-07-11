import { finalbattle } from "../../Stages/finalBattle.js"
import { battle } from "../../Stages/Battle.js"
import { personaje } from "../../Personaje/creacionPersonaje.js"
import { DIOS, zombie, minotauro, harpia } from "../../Personaje/RAZAS.js"
import { Menu } from "../../menu/menu.js"
export const Door = new Menu ('¿Deseas abrir la puerta y avanzar?:',['Si','No'])
let door
export function CaminoNorte(north, east){
    switch(north){
                case 0:
                    if (east == 2){
                    Door.mostrarOpciones()
                    switch(Door.getUserInput(Door)){
                        case 0:
                            console.log("%cDecidiste abrir la puerta y avanzar","color:green")
                            console.log("%cObservas el cadaver de un grifo","color:blue")
                            north++
                        break
                        case 1:
                            console.log("%cDecidiste no abrir la puerta","color:red")
                        break
                    }
                    }   
                    else{
                        console.log("%cAvanzas hacia el norte","color:green")
                        north++
                        if (zombie.alive === true){
                            battle(personaje, zombie)//batalla zombie
                        }else{
                            console.log("%cEntras al cuarto y ves el cadaver de un zombie","color:blue")
                        }
                    }
            break
            case 1:
                switch(east){
                    case 0:
                        console.log("%cAvanzas hacia el norte","color:green")
                        north++
                        if (minotauro.alive === true){
                            battle(personaje, minotauro)//batalla minotauro
                        }else{
                            console.log("%cEntras al cuarto y observas el cadaver del minotauro","color:blue")
                        }
                    break
                    case 1:
                        console.log("%cHay una pared, No puedes avanzar", "color: red")
                    break
                    case 2:
                        console.log("%cAvanzas hacia el norte","color:green")
                        console.log("%cEntras a un cuarto con una extraña pintura","color:blue")
                        north++
                    break
                }
            break
            case 2:
                if(east == 2){
                    console.log("%cAvanzas hacia el norte","color:green")
                    console.log("%cEntras a una habitacion con una armadura oxidada","color:blue")
                    north++
                }else{
                    console.log("%cAvanzas hacia el norte","color:green")
                    north++
                    if(harpia.alive == true){
                        battle(personaje, harpia)//batalla Harpia
                    }else{
                        console.log("%cObservas el cadaver un Harpia en el suelo","color:blue")
                    }
                }
            break
            case 3:
                if(east == 0){
                    console.log("%cAvanzas hacia el norte","color:green")
                    console.log("%cObservas una Gran e Imponente puerta","color:yellow")
                    Door.mostrarOpciones()
                    switch(Door.getUserInput(Door)){
                        case 0:
                            console.log("%cDecidiste abrir la puerta y avanzar","color:green")
                            north++
                            finalbattle(personaje, DIOS)//BATALLA FINAL CONTRA DIOS
                        break
                        case 1:
                            console.log("%cDecidiste no abrir la puerta","color:red")
                        break
                    }
                }
                else{
                    console.log("%cHay una pared, No puedes avanzar", "color: red")
                }
            break
        }
    return north
}