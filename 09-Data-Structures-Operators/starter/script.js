'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [
//       restaurant.starterMenu[starterIndex],
//       restaurant.mainMenu[mainIndex],
//     ];
//   },
// };

// this is the object------------------
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'GarlicBread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   //making an order function here to order from starterMenu and Mainmenu
//   order: function (starterIndex, mainIndex) {
//     return [
//       restaurant.starterMenu[starterIndex],
//       restaurant.mainMenu[mainIndex],
//     ];
//   },
// };

// // array destucting

// let [main, , secondary] = restaurant.categories; //we need to simply leave a hole in a destructing operator like we did here

// console.log(main, secondary); //  Italian Vegetarian

// //switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// //destructing method

// [main, secondary] = [secondary, main]; // [secondary, main] we are simply destructing this array and we dont use let coz we are simply reassigning the values and we dont need a temporary variable in the middle
// console.log(main, secondary);

// //recieve two return values from the function using destructing

// const [starterCourse, mainCourse] = restaurant.order(2, 0);
// console.log(starterCourse, mainCourse);

// // destructing inside destructing - nested desructing

// const nested = [2, 4, [5, 6]];

// const [i, , [e, f]] = nested;
// console.log(i, e, f);
// // we need to do destructing inside destructing to get all the elements

// // const [p,q,r] =[8,9]
// // console.log(p,q,r ); // 8 9 undefined beacuse r doesnt have exist in the array so it will get undefined  but if we set the default value then ...

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8,9 1 (r=1) coz  it doesnt exist in the array so it take its default value to 1

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
    return [
      restaurant.starterMenu[starterIndex],
      restaurant.mainMenu[mainIndex],
    ];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address, // setting the defalut values when they cant be destructed they will use default values!!!
  }) {
    // we will do destructing immediately as we received object in the parameter
    console.log(
      `Order Recieved ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`
    );
  },
};
// using spread operator---------real world example
// const ingredients = [
//   prompt("let's make pasta ingridient 1"),
//   prompt('ingredient 2'),
//   prompt('ingredients 3'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients); // using spread operator rather than manually adding arguments like ingredients[0] etc etc

//-----------------------------------------------------

// since es 2018 spread operators can be used in objects even though they are not iterables.....

//creating new restraunt object using restraunt object with some additonal data using spread operator

const newRestraunt = { foundedIn: 1998, ...restaurant, founder: 'gussipi' }; // using spread operator here in objects

//making a copy of restraunt object but this copy is good copy not a shallow one means innner object will have different address

const restrauntCopy = { ...restaurant }; // making a copy here this copy is not shallow its a good copy with different address
restrauntCopy.name = 'restrinto roma';
console.log(restrauntCopy.name); // restrinto roma
console.log(restaurant.name); // classico italiano
// it is not a shallow copy which means that they would point to different name (different address)

restaurant.orderDelivery({
  time: '22.30',
  address: 'Via Del Solem, 21',
  mainIndex: 2,
  starterIndex: 2,
}); //we passed an argument which is an object here

restaurant.orderDelivery({
  address: 'Via Del Solem, 21', // rest will be taken from the default values
});

// ------object destructing-------- it helps us to write less code it is very useful in API Call

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // simple destructing values are stored into new variables

// if we want to rename the variables we can do like this given below
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//another feature is to give default value to the variable that doesnt exist so that they will not give undefined

//----default value-----

const { menu = [], starterMenu: startes = [] } = restaurant;
console.log(menu, startes); // we have given menu a default value so it will be apply here it is useful in API Call coz at that time we dont know how the data will come

//----mutating objects----giving different values to the same variables

let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};

// we want to mutate the variable using object destructing
({ a, b } = obj); // we have to wrap this in paranthesis coz after curly braces JS expects it as a code block and we cant assign a code block to anything so we use paranthesis
console.log(a, b); // 23 7

// nested objects and  fri: { open: o, close: c } this is syntax of destructing an object inside destructor. we need to give exact keynames for that .....
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// for of loop for arrays

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const [i, el] of menu2.entries()) {
  // we just destructe the array elements
  console.log(`${i + 1}:${el}`);
}

// object literals enhancement here------
