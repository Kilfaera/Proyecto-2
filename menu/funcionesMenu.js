import { Menu } from "./menu.js"
import { character } from "./CharCreation.js"

const menuInicio = new Menu('Bienvenido al juego de la vida',['Start', 'Config','clave secreta'])//Toca pensar en donde la colocamos
const configMenu = new Menu ('Configuracion',['Color de Texto','volver'])
const elecColorTexto = new Menu('Elija el color de lo que desea cambiar',['Mensaje de Bienvenida', 'Menu de opciones', 'Volver'])
const colorMensaje = new Menu('Seleccione un color para el mensaje de inicio', ['Rojo', 'Rosado Fuerte', 'Azul', 'volver'])
const colorMenu = new Menu('Selecciona un color para el menu', ['Naranja', 'Violeta', 'Fuxia', 'volver']);



export function inicio(){
menuInicio.mostrarOpciones()
const respUser = menuInicio.getUserInput(menuInicio);
    if(respUser === 0){
        console.log('%cCREACION DE PERSONAJE','color:red')
        character();
    }else if(respUser === 1){
        menuConfig();
    }else if(respUser === 2){
        //comprobClave();
        console.log('comprobar clave')
    }
}

function menuConfig(){        
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
    
    
    function colorTexto(){       
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
    
    function colorDeMensaje(){
        colorMensaje.mostrarOpciones();
        switch(colorMensaje.getUserInput(colorMensaje)){
            case 0:
                menuInicio.SetcolorMensaje('red');
                configMenu.SetcolorMensaje('red');
                elecColorTexto.SetcolorMensaje('red');
                colorMensaje.SetcolorMensaje('red');
                colorMenu.SetcolorMensaje('red');
                colorTexto();
                break;
            case 1:
                menuInicio.SetcolorMensaje('#FF1493');
                configMenu.SetcolorMensaje('#FF1493');
                elecColorTexto.SetcolorMensaje('#FF1493');
                colorMensaje.SetcolorMensaje('#FF1493');
                colorMenu.SetcolorMensaje('#FF1493');
                colorTexto();
                break
            case 2:
                menuInicio.SetcolorMensaje('blue');
                configMenu.SetcolorMensaje('blue');
                elecColorTexto.SetcolorMensaje('blue');
                colorMensaje.SetcolorMensaje('blue');
                colorMenu.SetcolorMensaje('blue');
                colorTexto();
                break;
            case 3:
                colorTexto();
        }
    }
    
    function colorDeMenu(){        
        colorMenu.mostrarOpciones();
        switch(colorMenu.getUserInput(colorMenu)){
            case 0:
                menuInicio.SetcolorMenuOpciones('orange')
                configMenu.SetcolorMenuOpciones('orange')
                elecColorTexto.SetcolorMenuOpciones('orange')
                colorMensaje.SetcolorMenuOpciones('orange')
                colorMenu.SetcolorMenuOpciones('orange')                
                colorTexto()
                break;
            case 1:
                menuInicio.SetcolorMenuOpciones('#8A2BE2');
                configMenu.SetcolorMenuOpciones('#8A2BE2')
                elecColorTexto.SetcolorMenuOpciones('#8A2BE2')
                colorMensaje.SetcolorMenuOpciones('#8A2BE2')
                colorMenu.SetcolorMenuOpciones('#8A2BE2') 
                colorTexto();
                break;
            case 2:
                menuInicio.SetcolorMenuOpciones('#FF00FF');
                configMenu.SetcolorMenuOpciones('#FF00FF')
                elecColorTexto.SetcolorMenuOpciones('#FF00FF')
                colorMensaje.SetcolorMenuOpciones('#FF00FF')
                colorMenu.SetcolorMenuOpciones('#FF00FF') 
                colorTexto();
                break;
            case 3:
                colorTexto();
        }
    }



