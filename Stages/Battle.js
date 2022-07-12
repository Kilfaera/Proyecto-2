import { menuStar } from "../menu/menuStart/menuStart.js";
import { gameover } from "../Modules/gameover.js";
import { dodge } from "../Modules/igbattle.js";
import { Clase } from "../Modules/Clases.js";

function battle(player, mob){
    let playerHp = player.hp
    let mobHp = mob.hp;
    let esquivar
    let contador = 0
    prompt(`PREPARATE PARA EL COMBATE CONTRA ${mob.nombre}`)
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
                console.log("%cHas Ganado la batalla", "color:green")
                console.log(`%cVida del ${mob.nombre}: 0`,`color:red`)
                mob.alive = false;
                clearInterval(lucha)
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
                console.log("%cConsejo: Prueba explorando el mapa (Puede encuentres algo que te ayude a ganar esta batalla)","color:yellow")
                gameover()
                clearInterval(lucha)
                Clase.alive = true
                menuStar()
                return;
            }
            console.log(`%cVida de ${player.nombre}: ${player.hp}`,`color:blue`)
            contador++
            console.log("**************************************************************************")
    
        }, 1500)
            console.log("**************************************************************************");
            player.hp = playerHp;
    }
export {battle}