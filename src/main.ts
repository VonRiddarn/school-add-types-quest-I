import "./styles.css";

import { getAllNoWingedMonster, getMonsterDummyArray, Monster, numberOfMonstersWithWings } from "./func/monster";
import { commonColor, getDogsDummyArray, numberOfColors } from "./func/dog";
import User, { getUserDummyArray } from "./func/user";
import { Utilities } from "./func/utilities";

// Fixa så funktionen gör det den ska
const printSum = (a: number, b: number) => {
	console.log(a +b);
};

printSum(1, 2);
printSum(5, 12);

const arr: User[] = getUserDummyArray();

console.log(`Vi har ${arr.length} stycken användare.`);
console.log(`Medelåldern på alla användare är ${Utilities.getAverage(arr, "age")}`);
console.log(
	`Medelantalet hobbies per användare är ${Utilities.getAverageFromArray(arr, "hobbies")}`
);
// skriv ut "Den personen med flest hobbies har Y stycken hobbies". Byt ut Y mot ett funktionsanrop. Skapa den funktionen.
// skriv ut "Den äldsta personen är A och den yngsta är B". Byt ut A och B mot funktionsanrop. Ska de två funktionerna

const dogs = getDogsDummyArray();

console.log(`Vi har ${dogs.length} stycken hundar.`);
console.log(`Hundarna har ${numberOfColors(dogs)} antal unika färger.`);
console.log(
	`Den vanligaste färgen bland alla hundar är: ${commonColor(dogs)}.`
);
// vi vill ha en pretty print som skriver ut alla färger som hundarna har och hur många hundar det finns av varje färg
console.log(Utilities.objectToStringAll(dogs));

const monsters: Monster[] = getMonsterDummyArray();

console.log(`Vi har ${monsters.length} stycken monster.`);
console.log(`Medelåldern på alla monster är ${Utilities.getAverage(monsters, "age")}`);
console.log(
	`Medelantalet tentakler för alla monster är ${Utilities.getAverage(monsters, "tentacles")}`
);

// loopa igenom alla monster och skriv ut dem med prettyPrintMonster
// Changed prettyPrintMonster to monsterToString / and added monsterToStringAll
// This solution adheres to separation of concerns
console.log(Utilities.objectToStringAll(monsters));

console.log(
	`Antalet monster som har vingar är ${numberOfMonstersWithWings(monsters)}`
);

const noWingedMonster = getAllNoWingedMonster(monsters);
console.log(noWingedMonster);

console.log("User age average:");
console.log(Utilities.getAverage(arr, "age"));
console.log("Monster age average:");
console.log(Utilities.getAverage(monsters, "age"));
console.log("Monster tentacle average:");
console.log(Utilities.getAverage(monsters, "tentacles"));