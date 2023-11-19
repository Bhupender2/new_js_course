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
  [`day-${2 + 4}`]: {
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
