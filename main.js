import { PantCarga } from "./Comienzo/pantCarga.js";
import { inicio } from "./menu/funcionesMenu.js";
import { personaje } from "./Personaje/creacionPersonaje.js";
import { tutorial } from "../Proyecto-2/Stages/stages.js";
import { slime } from "./Personaje/RAZAS.js";


const pantaCarga = new PantCarga()


const promesa = new Promise (resolve =>{
  let charPosition = 1
  const carga = setInterval(()=>{
  if(charPosition === pantaCarga.pantCarga.length+1){
    clearInterval(carga)   
    resolve()    
  }
  console.clear()
  console.log(pantaCarga.pantCarga.slice(0,charPosition))
  charPosition++
  },250)
  })


  promesa.then(result =>{
    pantaCarga.printMsj();  
    inicio();
    tutorial(personaje, slime)
  })
