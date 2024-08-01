'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Direct destructuring
  orderDelivery: function ({
    time = 'default 20:00',
    address = 'default address',
    mainIndex,
    starterIndex = 0,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} o'clock.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  // mainIngredient is mandatory, otherIngredient is not (...)
  // (...otherIngredient) will collect all of the REST of the arguments into an array
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// Utilizes the orderDelivery method object within the restaurant object
restaurant.orderDelivery({
  time: '22.30',
  address: 'Nordre gate',
  mainIndex: 2,
  starterIndex: 2,
});

//
// Destructure object;
// if not destructured: const name = restaurant.name
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// Destructure object, but change variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default value set and empty array if object non-existence. Useful for API data where consistent results are uncertain
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // [] (4)
//
// Destructure array
// console.log(restaurant.order(0, 1));
// Destructured - how to receive 2 return values from a fn (comma separated)
const [starterCourse, mainCourse] = restaurant.order(0, 1);
console.log(starterCourse, mainCourse);

// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(`Opening hours from ${open} to ${close}`);

//---- Spread operator ----//

// Include current array values into a new array
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr); // (5) [1, 2, 7, 8, 9]
console.log(...newArr); // 1 2 7 8 9

console.log(restaurant.mainMenu); // (3) ['Pizza', 'Pasta', 'Risotto']
const newMenu = [...restaurant.mainMenu, 'bolognese'];
const evenNewerMenu = [...newMenu, 'grandiosa'];
console.log(evenNewerMenu); // (5) ['Pizza', 'Pasta', 'Risotto', 'bolognese', 'grandiosa']

// Copy array
const copyMainMenu = [...restaurant.mainMenu];
console.log(copyMainMenu);

// Join 2 arrays or more
const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(fullMenu);

const str = 'Morten';
const letters = [...str, ' ', 'R.'];
console.log(letters); // (8) ['M', 'o', 'r', 't', 'e', 'n', ' ', 'R.']

// Real world example
// Makes prompts that logs the inputs typed in into the 'orderPasta ' method in the 'restaurant' object
const ingredients = [
  // prompt('lets make pasta! Ingredient 1?'),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

// Call fn 'orderPasta'
restaurant.orderPasta(...ingredients);
// Instead of
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// Objects
const newRestaurant = {
  foundedIn: 1988,
  ...restaurant,
  founder: 'Morten Ramfjord',
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorrrrante';
console.log(restaurant.name); // Classico Italiano (original)
console.log(restaurantCopy.name); // Ristorrrrante (new name)

//---- REST patters ----//

// 1) Destructuring

// Arrays
// SPREAD, because on RIGHT side of =
const spreadArr = [1, 2, ...[3, 4]];
console.log(spreadArr); // (4) [1, 2, 3, 4]

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); // Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // {thu: {…}, fri: {…}}

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i]; // adds current number to the current sum
  console.log(sum);
};
// Numbers comressed into an array
add(2, 3); // 5
add(2, 4, 6, 8, 9); // 29

// Calling the 'add function' with the values in array 'x' using the spread operator
const x = [23, 5, 7];
add(...x);
console.log(x); // (3) [23, 5, 7]

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

console.log(3 || 'Morten');
