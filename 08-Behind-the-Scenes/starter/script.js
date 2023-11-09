'use strict';

// console.log(this); //if we simply console this keyword it will points to the global object (window)

// const calcAge = function (birthyear) {
//   console.log(2037 - birthyear);
//   console.log(this); //as we know it will be undefined
// };
// calcAge(1991); // this keyword is only defined when the function is called if the function is not called than it will not assigned

// // now arrow function

// const calcAgeArrow = birthyear => {
//   console.log(2037 - birthyear);
//   console.log(this); // as we know arrow function doesnt have their own this keyword so here it will point to this keyword in the global scope
// };
// calcAgeArrow(1199);

// this keyword in the object
const jonas = {
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge; //we simply copy calcAge method from jonas to matilda that means now in matilda object calcAge function will also be present . now this is called method borrowing
// now matilda object is calling calcAge method and see is This Keyword is pointing towards matilda now
matilda.calcAge();

//important point - this keyword will point to matilda if matilda is the one who is calling the function it doesnt matter is if the calcAge function is written in the jonas object

// this is a regular function
const f = jonas.calcAge;
f();
// in console it will say undefined(this keyword ) because its a regular function now (f is a regular function)
