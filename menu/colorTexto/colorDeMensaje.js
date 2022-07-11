import { Menu } from "../menu.js"
import { colorTexto } from "./menuColorTexto.js"
import { menuInicio } from "../Inicio/inicio.js";
import { configMenu } from "../menuConfig/menuConfig.js";
import { selecClasePj } from "../../Personaje/creacionPersonaje.js";
import { confirmSeleccion } from "../../Personaje/creacionPersonaje.js";
import { menuStart } from "../menuStart/menuStart.js";
import { elecColorTexto } from "./menuColorTexto.js";
import { menuPath } from "../../Road/mainPath.js";
import { Door } from "../../Road/Directions/north.js";

const colorMenu = new Menu('Selecciona un color para el menu', ['Naranja', 'Violeta', 'Fuxia', 'volver']);
const colorMensaje = new Menu('Seleccione un color para el mensaje de inicio', ['Rojo', 'Rosado Fuerte', 'Azul', 'volver'])

export function colorDeMensaje(){
    colorMensaje.mostrarOpciones();
    switch(colorMensaje.getUserInput(colorMensaje)){
        case 0:
            menuInicio.SetcolorMensaje('red');
            menuStart.SetcolorMensaje('red');
            configMenu.SetcolorMensaje('red');
            elecColorTexto.SetcolorMensaje('red');
            colorMensaje.SetcolorMensaje('red');
            colorMenu.SetcolorMensaje('red');
            selecClasePj.SetcolorMensaje('red');
            confirmSeleccion.SetcolorMensaje('red');
            menuPath.SetcolorMensaje('red')
            Door.SetcolorMensaje('red')
            colorTexto();
            break;
        case 1:
            menuInicio.SetcolorMensaje('#FF1493');
            menuStart.SetcolorMensaje('#FF1493');
            configMenu.SetcolorMensaje('#FF1493');
            elecColorTexto.SetcolorMensaje('#FF1493');
            colorMensaje.SetcolorMensaje('#FF1493');
            colorMenu.SetcolorMensaje('#FF1493');
            selecClasePj.SetcolorMensaje('#FF1493');
            confirmSeleccion.SetcolorMensaje('#FF1493');
            menuPath.SetcolorMensaje('#FF1493')
            Door.SetcolorMensaje('#FF1493')
            colorTexto();
            break
        case 2:
            menuInicio.SetcolorMensaje('blue');
            menuStart.SetcolorMensaje('blue');
            configMenu.SetcolorMensaje('blue');
            elecColorTexto.SetcolorMensaje('blue');
            colorMensaje.SetcolorMensaje('blue');
            colorMenu.SetcolorMensaje('blue');
            selecClasePj.SetcolorMensaje('blue');
            confirmSeleccion.SetcolorMensaje('blue');
            menuPath.SetcolorMensaje('blue')
            Door.SetcolorMensaje('blue')
            colorTexto();
            break;
        case 3:
            colorTexto();
    }
}

export function colorDeMenu(){        
    colorMenu.mostrarOpciones();
    switch(colorMenu.getUserInput(colorMenu)){
        case 0:
            menuInicio.SetcolorMenuOpciones('orange');
            menuStart.SetcolorMenuOpciones('orange');
            configMenu.SetcolorMenuOpciones('orange');
            elecColorTexto.SetcolorMenuOpciones('orange');
            colorMensaje.SetcolorMenuOpciones('orange');
            colorMenu.SetcolorMenuOpciones('orange');
            selecClasePj.SetcolorMenuOpciones('orange');
            confirmSeleccion.SetcolorMenuOpciones('orange');
            menuPath.SetcolorMenuOpciones('orange'); 
            Door.SetcolorMenuOpciones('orange');   
            colorTexto()
            break;
        case 1:
            menuInicio.SetcolorMenuOpciones('#8A2BE2');
            menuStart.SetcolorMenuOpciones('#8A2BE2');
            configMenu.SetcolorMenuOpciones('#8A2BE2')
            elecColorTexto.SetcolorMenuOpciones('#8A2BE2')
            colorMensaje.SetcolorMenuOpciones('#8A2BE2')
            colorMenu.SetcolorMenuOpciones('#8A2BE2') 
            selecClasePj.SetcolorMenuOpciones('#8A2BE2');
            confirmSeleccion.SetcolorMenuOpciones('#8A2BE2');
            menuPath.SetcolorMenuOpciones('#8A2BE2');
            Door.SetcolorMenuOpciones('#8A2BE2');            
            colorTexto();
            break;
        case 2:
            menuInicio.SetcolorMenuOpciones('#FF00FF');
            menuStart.SetcolorMenuOpciones('#FF00FF');
            configMenu.SetcolorMenuOpciones('#FF00FF');
            elecColorTexto.SetcolorMenuOpciones('#FF00FF');
            colorMensaje.SetcolorMenuOpciones('#FF00FF');
            colorMenu.SetcolorMenuOpciones('#FF00FF');
            selecClasePj.SetcolorMenuOpciones('#FF00FF');
            confirmSeleccion.SetcolorMenuOpciones('#FF00FF');
            menuPath.SetcolorMenuOpciones('#FF00FF');
            Door.SetcolorMenuOpciones('#FF00FF') 
            colorTexto();
            break;
        case 3:
            colorTexto();
    }
}