"use strict";

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity},`;
}

const descFinland = describeCountry("Finland", 6, "Helsinki");

console.log(descFinland);

// Function Declarations vs. Expressions
// function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);

console.log(percPortugal1, percChina1, percUSA1);

// Arrow functions
const percentageOfWorld3 = (population) => (population / 7900) * 100;
percentageOfWorld3();

const percNorway = percentageOfWorld3(6);
console.log(percNorway);

// Functions Calling Other Functions
const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  console.log(description);
};

describePopulation("Portugal", 10);
describePopulation("China", 1441);
describePopulation("USA", 332);

// Challenge #1
/* 
Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
 */

const calcAverage = (score1, score2, score3) => {
  return score1 + score2 + score3 / 3;
};

// Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
// Data 2
let scoreDolphins2 = calcAverage(85, 54, 41);
let scoreKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win(${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Dolphins win(${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("It's a draw ...");
  }
};

checkWinner(scoreDolphins, scoreKoalas); // draw
checkWinner(scoreDolphins2, scoreKoalas2); // Dolphins win

// Introduction to Arrays
const populations = [4, 3, 6, 7];

if (populations.length === 4) {
  console.log(populations);
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

// Basic Array Operations (Methods)
const neighbours = ["sweden", "denmark", "finland"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop("Utopia");
console.log(neighbours);

if (!neighbours.includes("germany")) {
  console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("sweden")] = "Republic of Sweden;";
console.log(neighbours);

//Introduction to Objects
const myCountry = {
  country: "Norway",
  capital: "Oslo",
  language: "Norwegian",
  population: 6,
  neighbours: ["Sweden", "Denmark", "Finland"],

  // Object Methods lesson tasks
  // 1
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million norwegian-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  // 2
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

//
// Dot vs. bracket notation

// Challenge
const morten = {
  firstName: "Morten",
  friends: ["Andre", "Alise", "Siri"],
};

const nameKey = "Name";

console.log(
  morten.firstName +
    " " +
    "has" +
    " " +
    morten.friends.length +
    " " +
    "friends" +
    ", " +
    "and his best friend is called" +
    " " +
    morten.friends[2] +
    "."
);
// or
console.log(
  `${morten.firstName} has ${morten.friends.length} friends, and his best friend is called ${morten.friends[2]}`
);

// Lesson task
console.log(
  `${myCountry.country} has ${myCountry.population} million norwegian-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);
//increase and decrease population by 2
myCountry.population += 2;
console.log(myCountry.population);

myCountry.population -= 2;
console.log(myCountry.population);

//
// Object methods
const morten2 = {
  firstName: "Morten",
  friends: ["Andre", "Alise", "Siri"],
  birthYear: 1988,
  job: "student",
  hasDriversLicence: true,

  calcAge: function () {
    this.age = 2024 - this.birthYear; // Creates new key called age
    return this.age; // returns new key
  },

  // Challenge method
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicence ? "a" : "no"} drivers licence.`;
  },
};

console.log(morten2.calcAge()); // fn output = 36
console.log(morten2.age); // new key value = 36

// Challenge log
console.log(morten2.getSummary());

// Calling methods to activate them, making the logging of myCountry complete.
myCountry.describe();
myCountry.checkIsland();

console.log(myCountry); // False (isn't an island)

// Coding challenge 3
/* 
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:

1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method

3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
 */

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);
// 27.309968138370508 24.194608809993426

console.log(
  mark.bmi > john.bmi
    ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`
    : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`
); // Mark Miller's BMI (27.309968138370508) is higher than John Smith's BMI (24.194608809993426)!

//
// The for loop

// Task
for (let vote = 1; vote <= 50; vote++) {
  console.log(`Voter number ${vote} is currently voting`);
}

//
// Looping arrays, breaking and continuing
const mortenArray = [
  "Morten",
  "Ramfjord",
  ["Andre", "Alise", "Siri"],
  1988,
  "student",
];
const types = [];

for (let i = 0; i < mortenArray.length; i++) {
  // Reading array
  console.log(mortenArray[i]);

  // Filling array
  // types[i] = typeof mortenArray[i];
  types.push(typeof mortenArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}
console.log(ages);

// continue and break
// continue = skip
// break = terminate loop
console.log("---Only strings---");
for (let i = 0; i < mortenArray.length; i++) {
  if (typeof mortenArray[i] !== "string") continue;

  console.log(mortenArray[i]);
}

console.log("---Break with number---");
for (let i = 0; i < mortenArray.length; i++) {
  if (typeof mortenArray[i] === "number") break;

  console.log(mortenArray[i]);
}

//
// Looping backwards and loops in loops
const mortenArray2 = [
  "Morten",
  "Ramfjord",
  ["Andre", "Alise", "Siri"],
  1988,
  "student",
];

for (let i = mortenArray2.length - 1; i >= 0; i--) {
  console.log(i, mortenArray2[i]);
}
// Loop inside a loop
// loop 1 runs, logging exercise 1 including all repititions. Then repeats logging exercise 2 including all repititions.
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(
      `Loop in a loop: Exercise ${exercise}: Lifting weight repetition ${rep}`
    );
  }
}

// Task
// Log all the countries, not the arrays themselves
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

// First looping the array of arrays
// Second looping the sub-arrays [i]

// The [i] is the arrays ["canada", "Mexico"]
// The [y] in [i][y] is the loop withing the [i] (sub-array)
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Array & sub array loop: Neighbours ${listOfNeighbours[i][y]}`);
  }
}

//
//
// While loop
// NOTE:  Make use of a While loop when we need a loop without a counter or don't know how long a loop will run. If the dice rolls 6 first, the whole code never runs. A 'for loop' would be the correct loop here
let rep = 1;
while (rep <= 10) {
  console.log(`While loop: Lifting weight repetition ${rep}`);
  rep++;
}

// Roll the dice until we reach 6
let dice = Math.floor(Math.random() * 6) + 1; // add +1 since we want to exclude 0 in the dice roll
console.log(dice);

while (dice !== 6) {
  // If not 6, run this code
  console.log(`You rolled a ${dice}`);
  dice = Math.floor(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log(`You rolled a ${dice}! Congrats, you WIN!`);
  }
}

// Task
// Copy pasted since this challenge sucks
const percentages3 = [];

let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}

console.log(percentages3);
