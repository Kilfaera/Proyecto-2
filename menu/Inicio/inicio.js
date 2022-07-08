import { Menu } from "../menu.js";
import { nombrePj } from "../../Personaje/creacionPersonaje.js";
import { menuConfig } from "../menuConfig/menuConfig.js";

export const menuInicio = new Menu('Bienvenido al juego de la vida',['Start', 'Config','Exit'])

export function inicio(){
    menuInicio.mostrarOpciones()
    const respUser = menuInicio.getUserInput(menuInicio);
        if(respUser === 0){
            console.log('%cCREACION DE PERSONAJE','color:red')
            nombrePj();
        }else if(respUser === 1){
            menuConfig();
        }else if(respUser === 2){            
            console.log('%cHasta Pronto','color:yellow')
        }
    }
