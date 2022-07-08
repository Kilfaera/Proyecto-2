import { PantCarga } from "./Comienzo/pantCarga.js";
import { inicio } from "./menu/Inicio/inicio.js";


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
  },200)
  })


  promesa.then(result =>{
    pantaCarga.printMsj();  
    inicio();
    
  })
