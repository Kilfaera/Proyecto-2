import { Guerrero } from "../Modules/Clases/Guerrero.js";
import { Paladin } from "../Modules/Clases/Paladin.js";
import { Mago } from "../Modules/Clases/Mago.js";
import { Berserker } from "../Modules/Clases/Berserker.js";
import { Clase } from "../Modules/Clases.js";

export const guerrero = new Guerrero ("", 'Guerrero', 700, 70, 0, 20, 3);
export const paladin = new Paladin ("",'Paladin', 1000, 40, 50, 20, 8);
export const mago = new Mago ("", 'Mago', 600, 20, 100, 20, 2);
export const berserker = new Berserker ("", 'Berserker', 600, 140, 0, 40, 3);

export const slime = new Clase("slime", "monstruo", 700, 70, 0, 20)

const zombie = new Clase("Zombie", "zombie", "700", 50, 0, 20, 100)
const grifo = new Clase("Grifo", "", 1000, 60, 0, 20, 100)
const minotauro = new Clase("Minotauro", "", 1200, 40, 0, 30, 100)
const harpia = new Clase("Harpia", "", 800, 60, 0, 30, 100)
const ogro = new Clase("Ogro", "", 1300, 70, 0, 40, 100)
const DIOS = new Clase("DIOS", "DIOS", 10000, 500, 200, 60, 10)

export {zombie, grifo, minotauro, harpia, ogro, DIOS}