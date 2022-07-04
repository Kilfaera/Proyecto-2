import { clase } from "../Modules/Clases.js"
export let personaje
export function character(){
    let validate, confirm = false, hp, at, ap, clase1
    let nombre = prompt("¿Que nombre deseas para tu personaje?\n")
    while(confirm===false){
        validate = parseInt(prompt("¿Estas seguro?\n1. Si\n2. No\n"))
        
        if(validate == 1){ confirm=true}
            else if(validate == 2) {nombre = prompt("¿Escribe el nombre que desees?\n")    
        }else{console.log("Selecciona una opcion valida")
            }
        }
    confirm=2
    console.clear
    while(confirm==2){
        clase1 = parseInt(prompt("Escoge una clase:\n1. Guerrero\n2. Paladin\n3. Mago\n4. Berserker\n"))
        switch(clase1){
            case 1: console.log("Clase: Guerrero\nVida: 700\nAtaque: 70\nPoder de Habilidad: 30");validate = true
            break;
            case 2: console.log("Clase: Paladin\nVida: 1000\nAtaque: 40\nPoder de Habilidad: 50");validate = true
            break;
            case 3: console.log("Clase: Mago\nVida: 600\nAtaque: 20\nPoder de Habilidad: 100");validate = true
            break;
            case 4: console.log("Clase: Berserker\nVida: 400\nAtaque: 140\nPoder de Habilidad: 0"); validate = true
            break;
            default: console.log("Ingresa una respuesta valida"); validate=false
        }
        if(validate===true)
        confirm = parseInt(prompt("¿Estas seguro de escoger esta clase?\n1. Si\n2. No\n"))
        console.clear
    }
    switch(clase1) {
        case 1:   
            personaje = new clase(nombre, "Guerrero", 700, 70, 30)
            break;
        case 2:
            personaje = new clase(nombre, "Paladin", 1000, 40, 50)
            break;
        case 3: 
            personaje = new clase(nombre, "Mago", 600, 20, 100)
            break;
        case 4:
            personaje = new clase(nombre, "Berserker", 400, 140, 0)
            break;
    } 
    
}
