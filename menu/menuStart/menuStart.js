import { personaje } from "../../Personaje/creacionPersonaje.js";
import { inicio } from "../Inicio/inicio.js";
import { Menu } from "../menu.js";
import { tutorial } from "../../Stages/stages.js";
import { slime } from "../../Personaje/RAZAS.js";

export const menuStart = new Menu ('Escoga una opcion:',['Comenzar tutorial','Comenzar juego','volver'])

export function menuStar(){
    menuStart.mostrarOpciones();
    switch (menuStart.getUserInput(menuStart)){
        case 0:
            tutorial(personaje, slime)
            break;
        case 1:
            console.log("play game")
            break;
        case 2: 
            inicio()
    }
}



