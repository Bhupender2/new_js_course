'use strict';

// // function 1

// const upperWord = function (str) {
//   const [firstWord, ...others] = str.split(' ');
//   return [firstWord.toUpperCase(), ...others].join(' ');
// };

// // function 2

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const transformer = function (str, fn) {
//   // this is a H.O function coz its take a function as an argument
//   console.log(`string that is going to transformed: ${str}`);
//   console.log(`transformed string : ${fn(str)}`);
//   console.log(`transformed by : ${fn.name}`); // name is a function property
// };

// transformer('javascript is the best language in the world', oneWord);
// transformer('javascript is the best language in the world', upperWord);

// //writing the function returning function with using arrow function

// const greet = greeting => name => {
//   console.log(`${greeting} ${name}`);
// };

// const greeterHey = greet('hey');
// greeterHey('jonas');
// greeterHey('bhupender');

// the call and the apply method

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book : function(){} ----we can right this but we use es6 method shorthand in object
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}` // this keyword will point to the object whom the method is called --book method in called on which method
    );
    this.bookings.push({
      flight: ` ${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, 'bhupender singh mehta');
lufthansa.book(999, 'kritika Mehta');

// after some year lufthansa created a new airline

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EU',
  bookings: [],
  //simply copying the book method here is a bad practice so we'll not do it so we will just store that method in an external function so that we can use it again and again
};

const book = lufthansa.book; // creating an external function here and store the book method here

// book(23, 'sara williams') -- now book is a regular function so here this keyword will be undefined atleast in STRICT MODE --so now to tell which object this keyword should point or we can say how this keyword should look like it will be possible with the help of three methods (call , apply , bind )

book.call(eurowings, 23, 'sarah williams'); // first argument is exactly where we want this keyword to point to and then the rest of the arguments-- here we call the call method which then call the Book function with this keyword set to EUROWING ....
console.log(eurowings);

// call method allow to set this keyword explicitly

book.call(lufthansa, 77, 'bhilli bi');
console.log(lufthansa);

// apply method similar to call but it will take this keyword as its first arguments and the rest as an array of arguments(data)

const flightData = [545, 'bhumi cooper'];
book.apply(eurowings, flightData); // second arguments is an array of data

// apply method is not used anymore coz we can use call instead of apply

book.call(eurowings, ...flightData); // we can use call instead of apply all the time by destructing array
