import { Menu } from "../menu/menu.js";
import { inicio } from "../menu/funcionesMenu.js";

import {guerrero,paladin, mago, berserker} from "./RAZAS.js";

let nombre, validate;


const selecClasePj = new Menu('Escoge una clase:',['Guerrero','Paladin','Mago','Berserker', 'volver'])
const confirmSeleccion = new Menu('¿Estas seguro de escoger esta clase?',['Si','No, Volver'])

export function nombrePj(){    
    do{
        console.log('%c¿Que nombre deseas para tu personaje?','color:yellow')
        nombre = prompt('')
        validate = parseInt(prompt("¿Estas seguro?\n1. Si\n2. No\n"))        
        if(validate == 1){ 
        break;
        }else if(validate == 2) {
            console.log('%c¿Escribe el nombre que desees?')
            nombre = prompt("")    
        }else{console.log("Selecciona una opcion valida")
            }
        }while(true)
}

function clasePj(){
    selecClasePj.mostrarOpciones()
    switch(selecClasePj.getUserInput(selecClasePj)){
        case 0:
            guerrero.stats();
            confirm();
            break;
        case 1:
            paladin.stats();
            confirm();
            break;
        case 2:
            mago.stats();
            confirm();
            break;
        case 3:
            berserker.stats();
            confirm();
            break;
        case 4:
            inicio()
    }
}

function confirm(){
    confirmSeleccion.mostrarOpciones();
    switch(confirmSeleccion.getUserInput(confirmSeleccion)){
        case 0:
            console.log("Play");
            break
        case 1:
            clasePj();            
    }
}

