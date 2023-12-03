'use strict';

const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
}; // addTax is a higher order function coz it returns a function
console.log(addTax(0.23)(100));
