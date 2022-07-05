import { Guerrero } from "../Modules/Clases/Guerrero.js";
import { Paladin } from "../Modules/Clases/Paladin.js";
import { Mago } from "../Modules/Clases/Mago.js";
import { Berserker } from "../Modules/Clases/Berserker.js";
import { Clase } from "../Modules/Clases.js";

export const guerrero = new Guerrero ("", 'Guerrero', 700, 70, 0, 20, 3);
export const paladin = new Paladin ("",'Paladin', 1000, 40, 50, 20, 8);
export const mago = new Mago ("", 'Mago', 600, 20, 100, 20, 2);
export const berserker = new Berserker ("", 'Berserker', 400, 140, 0, 40, 3);

export const slime = new Clase("slime", "monstruo", 700, 70, 0, 20)