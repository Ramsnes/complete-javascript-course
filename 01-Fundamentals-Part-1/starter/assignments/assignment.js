URL = "https://codingheroes.io/assignments/values-and-variables.html";
// Values and Variables
let country = "Norway";
let continent = "Europe";
let population = "6";

console.log(country);
console.log(continent);
console.log(population);

// Data types
let isIsland = "false";
let language;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// let, const and var
language = "Norwegian";
console.log(language);

// Basic Operators
let norwaySplit = population / 2;
console.log(norwaySplit);

norwaySplit++;
console.log(norwaySplit);

const finland = 6;
console.log(norwaySplit > finland);

const averagePopulation = 33;
console.log(norwaySplit < averagePopulation);

const description =
  country +
  " " +
  "is in Europe, and its" +
  " " +
  norwaySplit +
  " " +
  "million people" +
  " " +
  "speak Norwegian.";
console.log(description);

// Strings and Template Literals
const betterDescription = `${country} is in Europe, and it's ${norwaySplit} million people speak ${language}.`;
console.log(betterDescription);

// Taking Decisions: if / else Statements
// population = 6 - line 5
// averagePopulation = 33 - line 34
if (population > averagePopulation) {
  console.log(`${country}'s is above average`);
} else {
  console.log(
    `${country}'s population is ${
      averagePopulation - population
    } million below average`
  );
}

// Type conversion
// + converts to String
// - * / converts to number
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // "617"
console.log("19" - "13" + 17); // 23
console.log("123" < 57); //  false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// Equality Operators: == vs. ===
//const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
const numNeighbours = 3;
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

const switchLanguage = "chinese";

switch (switchLanguage) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language, too");
}
