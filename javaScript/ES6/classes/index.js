// import { Animal, Cat } from './animal.js';
import { Player, TennisPlayer } from './animal.js';

// console.log(Animal.return10());
// let cat = new Animal('Cat', 4);
// let cat_2 = new Cat('Cat', 4);

// cat.legs = 5;
// cat.makeNoise();
// cat.makeNoise("meow");
// console.log(cat.legs)
// console.log(cat.type)

// // get method return the function as a property 
// console.log(cat.metaData)
//     // Type: Cat, Legs: 3
// cat_2.makeNoise();
let newFootball = new Player("Messi", "Argentina");
let newTennis = new TennisPlayer("Rafeal Nadal", "spain", 34);
console.log(newFootball.bornPlace);
console.log(newTennis.playerAge);
console.log(newTennis.bornPlace);

let newFootballPl = new Player();
let newTennisPL = new TennisPlayer();
newFootballPl.bornPlace_1("Messi", "Argentina");
newTennisPL.playerAge_1("Rafeal Nadal", 34);