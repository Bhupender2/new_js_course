"use strict";

//functions

// function logger() {
//   console.log("my name is slim shady");
// }
// imvoking, calling and running the functions
// logger();
// logger();
// logger();

// function foodProcessor(apple, oranges) {
//   const juice = `juice with ${apple} apples and ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = foodProcessor(5, 0);
// console.log(appleJuice);

//function declaration and expressions

// function declaration and you can call them before even defining it which is basically not a good practice
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1998);
// console.log(age1);

// //function expressions and you can not call them before defining it
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1996);
// console.log(age1, age2);

// //arrow functions

// const calcAge3 = (birthYear) => 2037 - birthYear; //automatically return hota h ismein no need to add return keyword

// const age3 = calcAge3(1999);

// console.log(age3);

// arrow functions find your retirement age

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} will be retired in ${retirement} years`;
// };
// console.log(yearUntilRetirement(1998, "bob"));

//function calling function inside of it

// const cutPieces = function (fruits) {
//   return fruits * 4;
// };

// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangesPieces = cutPieces(oranges);

//   const juice1 = `juice with ${applePieces} apple pieces and ${orangesPieces} oranges pieces`;
//   return juice1;
// };

// console.log(fruitProcessor(5, 8));

// coding challange javascript fundamentals part 2

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3; //arrow function

//average score of dolhphin

const avgDolphinsScore = calcAverage(44, 23, 71);

//average score of Koalas

const avgKoalasScore = calcAverage(65, 54, 49);

// arrow function checkWinner

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins the game (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`koalas wins the game (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("no ones wins the game");
  }
};
checkWinner(avgDolphinsScore, avgKoalasScore);

// now we are starting with arrays

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 2011, 2002, 1989];

const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);

// calculator bill values coding challenge

const bills = [125, 555, 44];

// building a function name calcTip

const calcTip = (bill) => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

console.log(calcTip(100));

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[bills.length - 1]);

const tips = [tip1, tip2, tip3];
console.log(tips);

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);
