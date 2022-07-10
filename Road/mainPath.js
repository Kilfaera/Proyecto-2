import {personaje} from "../Personaje/creacionPersonaje.js"
import {DIOS, ogro, grifo, zombie, harpia, minotauro} from "../Personaje/RAZAS.js"
import {finalbattle} from "../Stages/finalBattle.js"
import {battle} from "../Stages/Battle.js"

//las lineas que tienen comentarios son las que voy a cambiar
let battleN1 = true, battleN2 = true, battleN3 = true, battleN1W1 = true, battleN1E2 = true, sword = true
function Camino(){
    let where, north = 0, east = 0, west = 0, door, confirm, equip
    console.log("Despertaste en un pasillo tetrico, no sabes porque estas aqui pero... Sientes que debes salir aqui...")
do{
    where = parseInt(prompt("¿A donde quieres ir?\n1. Norte\n2. Sur\n3. Este\n4. Oeste\n"))
    switch(where){
        case 1:
            switch(north){
                case 0:
                    if (east == 2){
                    do{
                        console.log("Hay una puerta")
                        door = prompt("¿Deseas abrirla y avanzar?\n1. Si\n2. No\n")
                    if (door == "1"){
                        console.log("Decidiste abrir la puerta y avanzar")
                        north++
                        console.log("Observas el cadaves de un grifo")
                        confirm = true
                    }else if (door == "2"){
                        console.log("Decidiste no abrir la puerta")
                        confirm = true
                    }else{
                        console.log("ingresa una opcion valida")
                        confirm = false
                    }
                }while(confirm == false)}
                else{
                    console.log("Avanzas hacia el norte")
                    north++
                    if (battleN1 === true){
                        battle(personaje, zombie)
                        battleN1 = false
                    }else{
                        console.log("Entras al cuarto y ves el cadaver de un zombie")
                    }
                }
            break
            case 1:
                if(west == 1){
                    console.log("Hay una pared, no puedes avanzar")
                }else if(east == 1){
                    console.log("Hay una pared, no puedes avanzar")
                }else if(east == 2){
                    console.log("Avanzas hacia el norte")
                    console.log("Entras a un cuarto con una extraña pintura")
                    north++
                }else{
                    console.log("Avanzas hacia el norte")
                    north++
                    if(battleN2 === true){
                        battle(personaje, minotauro)//batalla minotauro
                        battleN2 = false
                    }else{
                        console.log("Entras al cuarto y observas el cadaver del minotauro")
                    }
                }
            break
            case 2:
                if(east == 2){
                    console.log("Avanzas hacia el norte")
                    console.log("Entras a una habitacion con una armadura oxidada")
                    north++
                }else{
                    console.log("Avanzas hacia el norte")
                    north++
                    if(battleN3 === true){
                        battle(personaje, harpia)//batalla arpia
                        battleN3 = false
                    }else{"Observas el cadaver un Harpia en el suelo"}
                }
            break
            case 3:
                if(east == 0 || west == 0){
                    do{
                        console.log("Observas una Gran e Imponente puerta")
                        door = prompt("¿Deseas abrirla y avanzar?\n1. Si\n2. No\n")
                    if (door == "1"){
                        console.log("Decidiste abrir la puerta y avanzar")
                        north++
                        finalbattle(personaje, DIOS)
                        confirm = true
                    }else if (door == "2"){
                        console.log("Decidiste no abrir la puerta")
                        confirm = true
                    }else{
                        console.log("ingresa una opcion valida")
                        confirm = false
                    }
                }while(confirm == false)
                }else{
                    console.log("Hay una pared, no puedes avanzar X")
                }
            break
        }
        break
        case 2:
            switch(north){
                case 0: console.log("Hay una pared, no puedes avanzar")
                break
                case 1:
                    if (west == 0 || east == 0){
                        north--
                        console.log("Volviste al cuarto en que despertaste")
                    }else if(east == 2){
                        north--
                        console.log("Un cuarto vacio")
                    }else{
                        console.log("Hay una pared, no puedes avanzar")
                    }
                break
                case 2:
                    if (east == 2){
                        north--
                        if(battleN1E2 == true){
                            battle(personaje, grifo)//batalla grifo
                            battleN1E2 = false
                        }else{
                            console.log("Observas el cadaver gigante del grifo")
                        }
                    }else{
                        north--
                        console.log("observas el cadaver de un zombie")
                    }
                break
                case 3:
                    if (east == 2){
                        north--
                        console.log("Un cuarto con una extraña pintura")
                    }else if(east == 0 || west == 0){
                        north--
                        console.log("Observas el cadaver de un minotauro")
                    }else{
                        console.log("Hay una pared, no puedes avanzar")
                    }
                break
            }
        break
        case 3:
            switch(north){
                case 0:
                    console.log("Hay una pared, No puedes avanzar")
                break
                case 1:
                    if (west = 1){
                        west--
                        console.log("Observas el cadaver de un zombie")
                    }else switch(east){
                        case 0:
                            east++
                            console.log("Entras a una habitacion con una lampara de llama azul")
                        break
                        case 1:
                            do{
                                console.log("Hay una puerta")
                                door = prompt("¿Deseas abrirla y avanzar?\n1. Si\n2. No\n")
                            if (door == "1"){
                                console.log("Decidiste abrir la puerta y avanzar")
                                east++
                                if(battleN1E2 == true){
                                    battle(personaje, grifo)//batalla grifo
                                    battleN1E2 = false
                                }else{
                                    console.log("Observas el cadaver del Grifo")
                                }
                                confirm = true
                            }else if (door == "2"){
                                console.log("Decidiste no abrir la puerta")
                                confirm = true
                            }else{
                                console.log("ingresa una opcion valida")
                                confirm = false
                            }
                        }while(confirm == false)
                        break
                        case 2:
                            console.log("Hay una pared, No puedes avanzar")
                    }
                break
                case 2: 
                console.log("Hay una pared no puedes avanzar")
                break;
                case 3:
                    if (west = 1){
                        west--
                        console.log("Observas el cadaver del Harpia")
                    }else switch(east){
                        case 0: 
                            east++
                            console.log("Entras a una habitación totalmente amarilla... Te sientes perturbado")
                        break
                        case 1:
                            east++
                            console.log("Entras a una habitación con una armadura oxidada")
                        break
                        case 2:
                            do{
                                console.log("Hay una puerta")
                                door = prompt("¿Deseas abrirla y avanzar?\n1. Si\n2. No\n")
                            if (door == "1"){
                                console.log("Decidiste abrir la puerta y avanzar")
                                east++
                                console.log("Encuentras una nota con un extraño codigo")
                                console.log("509")
                                confirm = true
                            }else if (door == "2"){
                                console.log("Decidiste no abrir la puerta")
                                confirm = true
                            }else{
                                console.log("ingresa una opcion valida")
                                confirm = false
                            }
                        }while(confirm == false)
                    break
                    }
                }
        break
        case 4:
            switch(north){
                case 0:
                    console.log("Hay una pared, No puedes avanzar")
                break
                case 1:
                    switch(east){
                        case 0:
                        do{
                            console.log("Hay una puerta")
                                door = prompt("¿Deseas abrirla y avanzar?\n1. Si\n2. No\n")
                            if (door == "1"){
                                console.log("Decidiste abrir la puerta y avanzar")
                                west++
                                if (battleN1W1 == true){
                                    battle(personaje, ogro)//batalla contra ogro
                                    battleN1W1 = false
                                }else{
                                    console.log("Observas el cadaver gigante del Ogro")
                                }
                                confirm = true
                            }else if (door == "2"){
                                console.log("Decidiste no abrir la puerta")
                                confirm = true
                            }else{
                                console.log("ingresa una opcion valida")
                                confirm = false
                            }
                        }while(confirm == false)
                        break;
                        case 1:
                            east--
                            console.log("Observas el cadaver del zombie")
                        break
                        case 2:
                            east--
                            console.log("Entras a una habitación con una lampara de llama azul")
                        break
                    }
                break
                case 2:
                    console.log("Hay una pared, no puedes avanzar")
                break
                case 3: switch(east){
                    case 0: console.log("Entras a una habitacion COMPLETAMENTE VACIA, tan vacia que da miedo")
                    break
                    case 1: 
                        east--
                        if(battleN3 == true){
                            battle(personaje, harpia)//batalla harpia
                            battleN3 = false
                        }else{console.log("Observas el cadaver del Harpia")}
                    break
                    case 2: 
                        east--
                        console.log("Entras a una habitacion completamente amarilla")
                    break
                    case 3:
                        east--
                        console.log("Una habitacion con una armadura oxidada")
                    break
                }

            }
            
        break
        case 509:
            if (sword == true){
                console.log("Apareciste en una habitación casi vacia, lo unico que en ella es una espada tan oscura como la noche")
                equip = parseInt(prompt("¿Quieres equiparla?\n1. Si\n2. No"))
                if (equip == 1){
                    personaje.hp+=4000
                    personaje.at+=2000
                    personaje.ap+=1000
                    personaje.crit = 100
                    sword = false
                    console.log()
                }else{console.log("Entendido")}
            }else{
                console.log("No hay nada aca")
            }
        break
        default: console.log("Escoge una opcion valida")
        break
    }
}while(north!=4)

console.log(`
███████╗███████╗██╗     ██╗ ██████╗██╗██████╗  █████╗ ██████╗ ███████╗███████╗
██╔════╝██╔════╝██║     ██║██╔════╝██║██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝
█████╗  █████╗  ██║     ██║██║     ██║██║  ██║███████║██║  ██║█████╗  ███████╗
██╔══╝  ██╔══╝  ██║     ██║██║     ██║██║  ██║██╔══██║██║  ██║██╔══╝  ╚════██║
██║     ███████╗███████╗██║╚██████╗██║██████╔╝██║  ██║██████╔╝███████╗███████║
╚═╝     ╚══════╝╚══════╝╚═╝ ╚═════╝╚═╝╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚══════╝╚══════╝                                                                            
`)
}

export {Camino}