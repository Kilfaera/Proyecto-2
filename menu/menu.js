import ColorTexto from "./texto.js";
   
 export class Menu{
    
     colorMenu = '#8A2BE2'
     colorMensaje = 'red'

    constructor(mensajeInicio,opciones){
        this.mensajeInicio = mensajeInicio;
        this.opciones = opciones;
    }

    SetcolorMensaje(color){
        this.colorMensaje = color
    }
    SetcolorMenuOpciones(color){
        this.colorMenu = color
    }

    mostrarOpciones(){
        new ColorTexto(this.mensajeInicio, this.colorMensaje).print();        
        for (let i = 0; i < this.opciones.length; i++){
           new ColorTexto(`${i+1}.- ${this.opciones[i]}`, this.colorMenu).print()
        }
    }    
    getUserInput(obj){
        let resUser = prompt('')
        while(true){
            if(this.#funValidacion(resUser)){
                return resUser -1}
            else{
                new ColorTexto(`Respuesta invalida, debe ingresar un numero.\nintente nuevamente:`,"yellow").print()
                obj.mostrarOpciones()
                resUser = prompt('')
            }
        }
    }    

    #funValidacion(input){
        return Boolean(Number(input))
    }
}








