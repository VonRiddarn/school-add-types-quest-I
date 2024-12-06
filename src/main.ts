import "./styles.css";

import { getMonsterDummyArray, Monster } from "./func/monster";
import { getDogsDummyArray } from "./func/dog";
import User, { getUserDummyArray } from "./func/user";
import { Utilities } from "./func/utilities";

// Fixa så funktionen gör det den ska
Utilities.printSum(1, 2);
Utilities.printSum(5, 12);

const arr: User[] = getUserDummyArray();

console.log(`Vi har ${arr.length} stycken användare.`);
console.log(`Medelåldern på alla användare är ${Utilities.getAverage(arr, "age")}`);
console.log(`Medelantalet hobbies per användare är ${Utilities.getAverageFromArray(arr, "hobbies")}`);
console.log(`Den personen med flest hobbies har ${Utilities.getHighestValueLength(arr, "hobbies")} stycken hobbies`);
let msg = `Den äldsta personen är ${Utilities.getHighestValue(arr, "age")}`;
msg += ` och den yngsta är ${Utilities.getLowestValue(arr, "age")}`;
console.log(msg);

const dogs = getDogsDummyArray();

console.log(`Vi har ${dogs.length} stycken hundar.`);
console.log(`Hundarna har ${Utilities.getUniqueValues(dogs, "color").length} antal unika färger.`);
console.log(`Den vanligaste färgen bland alla hundar är: ${Utilities.getMostCommonValue(dogs, "color")}.`);
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

console.log(`Antalet monster som har vingar är ${Utilities.filterWithBoolean(monsters, "hasWings").length}`);

const noWingedMonster = Utilities.filterWithBoolean(monsters, "hasWings", true);
console.log(noWingedMonster);

console.log("User age average:");
console.log(Utilities.getAverage(arr, "age"));
console.log("Monster age average:");
console.log(Utilities.getAverage(monsters, "age"));
console.log("Monster tentacle average:");
console.log(Utilities.getAverage(monsters, "tentacles"));