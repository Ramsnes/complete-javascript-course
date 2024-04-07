// JavaScript Fundamentals – Part 1
// Formula: BMI = mass / height ** 2 = mass / (height * height)

const massMark = 78;
const heigthMark = 1.69; // convert 169 to meter (1.69)

const massJohn = 92;
const heigthJohn = 1.95;

const BMIMark = massMark / heigthMark** 2; // or (heigthMark * heigthMark)
const BMIJohn = massJohn / heigthJohn** 2 ;
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

/*
- Create variables with mass and height for both.
- Calculate both BMI's based on formula given
- Log 'greater than' boolean
*/