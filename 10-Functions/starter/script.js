'use strict';

// function 1

const upperWord = function (str) {
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
};

// function 2

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const transformer = function (str, fn) {
  // this is a H.O function coz its take a function as an argument
  console.log(`string that is going to transformed: ${str}`);
  console.log(`transformed string : ${fn(str)}`);
  console.log(`transformed by : ${fn.name}`); // name is a function property
};

transformer('javascript is the best language in the world', oneWord);
transformer('javascript is the best language in the world', upperWord);

//writing the function returning function with using arrow function

const greet = greeting => name => {
  console.log(`${greeting} ${name}`);
};

const greeterHey = greet('hey');
greeterHey('jonas');
greeterHey('bhupender');
