import { Menu } from "../menu.js"
import { menuConfig } from "../menuConfig/menuConfig.js";
import { colorDeMensaje, colorDeMenu } from "./colorDeMensaje.js";

export const elecColorTexto = new Menu('Elija el color de lo que desea cambiar',['Mensaje de Bienvenida', 'Menu de opciones', 'Volver'])

export function colorTexto(){       
    elecColorTexto.mostrarOpciones()
    switch(elecColorTexto.getUserInput(elecColorTexto)){
        case 0:
            colorDeMensaje();
            break;
        case 1:
            colorDeMenu();
            break;
        case 2:
            menuConfig();
            break;
    }
}