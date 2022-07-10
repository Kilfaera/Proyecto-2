import { CaminoEste } from "./Directions/east.js"
import { CaminoNorte } from "./Directions/north.js"
import { CaminoSur } from "./Directions/south.js"
import { CaminoOeste} from "./Directions/west.js"
import { Menu } from "../menu/menu.js"

//las lineas que tienen comentarios son las que voy a cambiar
export const menuPath = new Menu ('A donde quieres ir:',['Norte','Sur','Este','Oeste'])
function Camino(){
    let where, north = 0, east = 0
    console.log("Despertaste en un pasillo tetrico, no sabes porque estas aqui pero... Sientes que debes salir aqui...")
do{
    console.log(north, east)
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