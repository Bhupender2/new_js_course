'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// in those square brackets we can comute the values
const openingHours = {
  [weekdays[1]]: {
    open: 12,
    close: 22,
  },
  [weekdays[3]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // first enhacement is we can we write call object inside like this
  openingHours,

  // using method shorthand syntax for object literals
  order(starterIndex, mainIndex) {
    return [
      restaurant.starterMenu[starterIndex],
      restaurant.mainMenu[mainIndex],
    ];
  },
  orderDelivery({
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

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`
    );
  },
};
console.log(restaurant.openingHours.mon?.open);

//optional chaining is used there if the properties exists

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // here we are retrieving property dymaically from openingHours object so we use "[ ]" square bracket notation not "." dot notation.
  console.log(`on ${day} ,we are open at ${open} `);
}

// with optional chaining we can check if the method exists or not before we call it

console.log(restaurant.order?.(0, 1) ?? 'method does not exists');

// with optional chaining we can also check if the array is empty or not

const users = [{ name: 'bhupender', email: 'b.mehtss2017@gmail' }];

// with optional chaining
console.log(users[0]?.name ?? 'user array empty');

// without optional chaining
if (users.length > 0) console.log(users[0].name);
else console.log('empty array');

//object loop but not directly more like their properties are iterable so we can loop them

// PROPERTIES NAME

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open at ${properties.length} days`;

for (const day of properties) {
  openStr += ` ${day},`;
}
console.log(openStr);

//PROPERTY VALUES

const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(
    `on ${day} the restraunt will open at ${open} and closed at ${close}`
  );
}
