import { CaminoEste } from "./Directions/east.js"
import { CaminoNorte } from "./Directions/north.js"
import { CaminoSur } from "./Directions/south.js"
import { CaminoOeste} from "./Directions/west.js"
import { Menu } from "../menu/menu.js"
import { personaje } from "../Personaje/creacionPersonaje.js"

//las lineas que tienen comentarios son las que voy a cambiar
export const menuPath = new Menu ('¿Que quieres hacer?:',['Ir al Norte','Ir al Sur','Ir al Este','Ir al Oeste',`Ver estadisticas`])
function Camino(){
    let where, north = 0, east = 0
    console.log("%cDespertaste en un pasillo tetrico, no sabes porque estas aqui pero... Sientes que debes salir aqui...","color:yellow")
do{
    console.log("Norte:",north,"Este:", east)
    menuPath.mostrarOpciones()
    switch(menuPath.getUserInput(menuPath)){
        case 0:
            north=CaminoNorte(north, east)
        break
        
        case 1:
            north = CaminoSur(north, east)
        break

        case 2:
            east = CaminoEste(north, east)
        break
  
        case 3:
            east = CaminoOeste(north, east)
        break
        case 4:
            personaje.descripcion()
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
