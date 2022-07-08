import { dodge } from "../Modules/igbattle.js";
import {menuStar} from "../menu/menuStart/menuStart.js"


let contador = 0
function tutorial(player, mob){
    let playerHp = player.hp
    let mobHp = mob.hp;
    let esquivar
    console.log("%cAhora vas a tener tu primera batalla.\nLas batallas son automaticas por lo tanto una vez iniciada tendras que esperar hasta que finalize para saver el resultado de esta", "color:violet")
    console.log("%cDurante cada turno tus personajes se atacaran mutuamente entre si hasta que la vida de alguno llegue a 0", "color:violet")
    console.log("%cHay un 20% de probabilidades de que tu personaje O el enemigo esquiven los ataques asi que ¡TEN CUIDADO! y suerte ", "color:violet")
    console.log("%cTambien tienes una probabilidad de critico segun tu raza tanto tu como tu enemigo de critico en su ataque fisico. Puedes aumentarla con ciertos objetos", "color:violet")
    console.log("%cCada personaje puede usar sus habilidades cada ciertos turnos, estas seran usadas automaticamente", "color: violet")
    console.log("%c\n¡EMPEZEMOS!\n", "color:yellow")
    alert("")
    const luchaTuto = new Promise(resolve =>{
        const lucha = setInterval(function attacking(){ 
            esquivar = dodge()
            if (contador == player.abilityTurn){
                player.ability(mob)
                contador = 0
            }else if(esquivar === true){
                console.log("%cEl enemigo esquivo tu ataque", "color:red")
            }else{
                player.attack(mob)
            }
            if (mob.hp <= 0){
                console.log("%cHas ganado la batalla", "color:green")
                console.log(`%cVida del ${mob.nombre}: 0`,`color:red`)
                clearInterval(lucha)                
                resolve()
                return;
            }
            console.log(`%cVida del ${mob.nombre}: ${mob.hp}`,`color:blue`)
            esquivar = dodge()
            if (esquivar === true){
                console.log("%cEsquivaste el ataque de tu enemigo","color:green")
            }else{
                mob.attack(player)
            }
            if (player.hp <= 0){
                console.log("%cHas perdido la batalla","color: red")
                console.log(`%cVida de ${player.nombre}: 0`,`color:red`)
                clearInterval(lucha)                
                resolve()
                return;
            }
            console.log(`%cVida de ${player.nombre}: ${player.hp}`,`color:blue`)
            contador++
            console.log("**************************************************************************")
    
        }, 1500)
    });

    luchaTuto.then(resolve =>{
        console.log("**************************************************************************");

        player.hp = playerHp;
        mob.hp = mobHp;
        menuStar();
    })
    

  
}



    
export { tutorial }