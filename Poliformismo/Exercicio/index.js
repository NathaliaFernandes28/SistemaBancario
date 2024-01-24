const Thief = require("./Thief.js");
const warrior = require("./warrior.js");
const Mage = require("./Mage.js");

//Vamos fazer as instancias dessas classes//
const arthur = new Mage("Arthur", 50, 60, 30, 40);
const beatrice = new Thief("Nathalia, 150, 50, 100");
const cain = new warrior("Cain", 500, 400, 300, 200);

console.table({ arthur, beatrice, cain });
