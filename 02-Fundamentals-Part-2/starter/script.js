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
