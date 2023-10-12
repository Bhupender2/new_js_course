"use strict";

//functions

function logger() {
  console.log("my name is slim shady");
}
// imvoking, calling and running the functions
logger();
logger();
logger();

function foodProcessor(apple, oranges) {
  const juice = `juice with ${apple} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = foodProcessor(5, 0);
console.log(appleJuice);

//function declaration and expressions

// function declaration and you can call them before even defining it which is basically not a good practice
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1998);
console.log(age1);

//function expressions and you can not call them before defining it
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1996);
console.log(age1, age2);

//arrow functions

const calcAge3 = (birthYear) => 2037 - birthYear; //automatically return hota h ismein no need to add return keyword

const age3 = calcAge3(1999);

console.log(age3);

// arrow functions find your retirement age

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} will be retired in ${retirement} years`;
};
console.log(yearUntilRetirement(1998, "bob"));

//function calling function inside of it

const cutPieces = function (fruits) {
  return fruits * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangesPieces = cutPieces(oranges);

  const juice1 = `juice with ${applePieces} apple pieces and ${orangesPieces} oranges pieces`;
  return juice1;
};

console.log(fruitProcessor(5, 8));
