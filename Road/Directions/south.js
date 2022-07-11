import { personaje } from "../../Personaje/creacionPersonaje.js"
import { grifo, minotauro, zombie } from "../../Personaje/RAZAS.js"
import { battle } from "../../Stages/Battle.js"

export function CaminoSur(north, east){
    switch(north){
        case 0: 
            console.log("%cHay una pared, No puedes avanzar", "color: red")
        break

        case 1:
            switch(east){
                case 0:
                    north--
                    console.log("%cVolviste al cuarto en que despertaste","color:blue")
                break
                case 1:
                    console.log("%cHay una pared, No puedes avanzar", "color: red")
                break
                case 2:
                    north--
                    console.log("%cAvanzas hacia el sur","color:green")
                    console.log("%cUn cuarto vacio", "color:blue")
                break
            }
        break

        case 2:
            switch(east){
                case 0:
                    console.log("%cAvanzas hacia el sur","color:green")
                    north--
                    console.log("%cObservas el cadaver del zombie, apesta","color:blue")
                break
                case 1:
                    console.log("%cHay una pared, No puedes avanzar", "color: red")
                break
                case 2:
                    console.log("%cAvanzas hacia el sur","color:green")
                    north--
                    if(grifo.alive === true){
                        battle(personaje, grifo)//batalla grifo
                    }else{
                        console.log("%cObservas el cadaver gigante del grifo","color:blue")
                    }
                break
            }
        break
        case 3:
            switch(east){
                case 0:
                    console.log("%cAvanzas hacia el sur","color:green")
                    north--
                    if(minotauro.alive == true){
                        battle(personaje, minotauro)//batalla minotauro
                    }else{
                        console.log("%cObservas el cadaver de un minotauro","color:blue")
                    }
                break
                case 1:
                    console.log("%cHay una pared, No puedes avanzar", "color: red")
                break
                case 2:
                    north--
                    console.log("%cAvanzas hacia el sur","color:green")
                    console.log("%cUn cuarto con una extraña pintura","color:blue")
                break
                case 3:
                    console.log("%cHay una pared, No puedes avanzar", "color: red")
                break
            }
        break
    }
    return north
}