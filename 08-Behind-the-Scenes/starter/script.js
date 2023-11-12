'use strict';

console.log(this); //if we simply console this keyword it will points to the global object (window)

const calcAge = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this); //as we know it will be undefined
};
calcAge(1991); // this keyword is only defined when the function is called if the function is not called than it will not assigned

// now arrow function

const calcAgeArrow = birthyear => {
  console.log(2037 - birthyear);
  console.log(this); // as we know arrow function doesnt have their own this keyword so here it will point to this keyword in the global scope
};
calcAgeArrow(1199);

// // this keyword in the object
// // const jonas = {
// //   year: 1997,
// //   calcAge: function () {
// //     console.log(this);
// //     console.log(2037 - this.year);
// //   },
// // };
// // jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; //we simply copy calcAge method from jonas to matilda that means now in matilda object calcAge function will also be present . now this is called method borrowing
// // now matilda object is calling calcAge method and see is This Keyword is pointing towards matilda now
// matilda.calcAge();

// //important point - this keyword will point to matilda if matilda is the one who is calling the function it doesnt matter is if the calcAge function is written in the jonas object

// // this is a regular function
// const f = jonas.calcAge;
// f();
// in console it will say undefined(this keyword ) because its a regular function now (f is a regular function )

// regular vs arrow function difference ----------------

var firstName = 'Matilda'; // var create property in the global object (window) and it is one of the reason not to use var

const jonas = {
  firstName: 'jonas',
  year: 1996,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    //solution 1
    // const self = this;
    // const isMellianial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year<=1996);
    // };
    // isMellianial(); // this is a regular function so it will show undefined so we used we assigned this to the (self ) variable and then used it
    //solution 2
    const isMellianial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMellianial();
  }, // here we use arrow function coz it will take this keyword from its parent function.

  // never ever use an arrow function as a method
  greet: () => {
    console.log(`hey${this.firstName}`); // output is heyUndefined because arrow function dont have their own this keyword so they look for their parent scope this keyword and it is global scope (window ) here
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword only exists in regular functions like function expression and function declaration but not in arrow function

const addExrp = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExrp(2, 3, 8, 9); // we can put more argument it will not show errors it will just add on agruments object

// arrow function
// const addExrpArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addExrpArrow(2, 3, 4, 5); // it will show error coz there is no arguments keyword (object ) in arrow function

//------------------------------------------------
// primitive type
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'davis';
console.log(lastName, oldLastName); // davis williams

// reference types

const jessica = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
};
const marriedJessica = jessica; // it will not create a new object it is just another variable in the stack which holds the reference to the original object it is because it   hold the same memory address
marriedJessica.lastName = 'davis';
console.log('before marriage:', jessica); // same object in  both
console.log('after marriage', marriedJessica); // same object in both   {firstName:"jessica", lastName:"davis" , age: 27}

// marriedJessica={} this object will stored in different position in memory so the refernce to the position have to change here and that doesnot work coz that is in the CALL STACK and its a constant in the stack

// copying object
const jessica2 = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
  family: ['alice', 'bhupi'],
};
const jessicaCopy = Object.assign({}, jessica2); // it will create a shallow copy (only to one level not in the deep level ( object inside object will not be copied ) )

jessicaCopy.lastName = 'mehta';
// they will not be a same object

jessicaCopy.family.push('mary');
jessicaCopy.family.push('mario');

//everything is same but their lastname wil be different
console.log('before marriage:', jessica2);
console.log('after marriage', jessicaCopy);
