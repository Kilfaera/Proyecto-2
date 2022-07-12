import { menuStar } from "../menu/menuStart/menuStart.js";
import { Clase } from "../Modules/Clases.js";
import { gameover } from "../Modules/gameover.js";
import { dodge } from "../Modules/igbattle.js";

function finalbattle(player, mob){
    let playerHp = player.hp
    let mobHp = mob.hp;
    let esquivar
    let contador = 0
    console.log("%cPreparate para la batalla final contra... DIOS","color:red")
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
                console.log(`%cVida de ${mob.nombre}: 0`,`color:red`)
                mob.alive = false
                console.log(`
                ███████╗███████╗██╗     ██╗ ██████╗██╗██████╗  █████╗ ██████╗ ███████╗███████╗
                ██╔════╝██╔════╝██║     ██║██╔════╝██║██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝
                █████╗  █████╗  ██║     ██║██║     ██║██║  ██║███████║██║  ██║█████╗  ███████╗
                ██╔══╝  ██╔══╝  ██║     ██║██║     ██║██║  ██║██╔══██║██║  ██║██╔══╝  ╚════██║
                ██║     ███████╗███████╗██║╚██████╗██║██████╔╝██║  ██║██████╔╝███████╗███████║
                ╚═╝     ╚══════╝╚══════╝╚═╝ ╚═════╝╚═╝╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚══════╝╚══════╝                                                                            
                `)
                clearInterval(lucha)
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
        player.hp = playerHp;
        
    }

export {finalbattle}