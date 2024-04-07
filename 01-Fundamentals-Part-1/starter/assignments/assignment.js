URL = "https://codingheroes.io/assignments/values-and-variables.html"
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

norwaySplit ++;
console.log(norwaySplit);

const finland = 6;
console.log(norwaySplit > finland);

const averagePopulation = 33;
console.log(norwaySplit < averagePopulation);

const description = country + " " + "is in Europe, and its" + " " + norwaySplit + " " + "million people" + " " + "speak Norwegian.";
console.log(description);

// Strings and Template Literals
const betterDescription = `${country} is in Europe, and it's ${norwaySplit} million people speak ${language}.`
console.log(betterDescription);

// Taking Decisions: if / else Statements
// population = 6 - line 5
// averagePopulation = 33 - line 34
if (population > averagePopulation) {
    console.log(`${country}'s is above average`)
} else {
    console.log(`${country}'s population is ${averagePopulation - population} million below average`)
}