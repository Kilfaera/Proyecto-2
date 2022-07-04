import { PantCarga } from "./Comienzo/pantCarga.js";
import { inicio } from "./menu/funcionesMenu.js";

const pantaCarga = new PantCarga()



async function cargaGame(){
    await new Promise (resolve =>{
        let charPosition = 1
        const carga = setInterval(()=>{
        if(charPosition === pantaCarga.pantCarga.length+1){
          clearInterval(carga)
          pantaCarga.printMsj()
          inicio()    
          resolve()    
        }
        console.clear()
        console.log(".")
        console.log(pantaCarga.pantCarga.slice(0,charPosition))
        charPosition++
        },250)
        })
           
}

cargaGame()
