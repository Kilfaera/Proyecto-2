import { Menu } from "../menu.js";
import { colorTexto } from "../colorTexto/menuColorTexto.js";
import { inicio } from "../Inicio/inicio.js";

export const configMenu = new Menu ('Configuracion',['Color de Texto','volver'])

export function menuConfig(){        
    configMenu.mostrarOpciones();
    switch (configMenu.getUserInput(configMenu)){
        case 0:
            colorTexto();
            break;
        case 1:
            inicio();
            break;
    }

}