'use strict';

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

const uniqueEvents = gameEvents.values();
console.log(uniqueEvents);

//map values into set
const uniqueEvents2 = new Set(uniqueEvents);

// first we create the set and then convert back to an array right here

console.log([...uniqueEvents2]);

//question 2
console.log(gameEvents.delete(64)); // it will only update but not return the whole map
console.log(gameEvents);

//question 3

console.log(`an event happened in every ${90 / gameEvents.size} minutes`);

// we can do a little adjustment in question 3

const lastEvent = [...gameEvents.keys()].pop(); // it will delete the last element and returns it too
console.log(lastEvent);

console.log(
  `an event happened in every ${lastEvent / gameEvents.size} minutes`
);

//question 4

for (const [keys, values] of gameEvents) {
  keys >= 45 && keys <= 92
    ? console.log(`[SecondHalf] ${keys}: ${values}`)
    : console.log(`[FirstHalf] ${keys}: ${values}`);
}

// second approach

for (const [keys, values] of gameEvents) {
  const half = keys >= 45 ? 'Second' : 'First';
  console.log(`[${half} Half] ${keys}:${values}`);
}

//string airplane question

const middleSeat = function (seat) {
  const s = seat.slice(-1);
  // b and e are middle seat
  s === 'B' || s === 'E'
    ? console.log('you are sitting in the middle seat')
    : console.log('you are lucky today');
};

middleSeat('11B');

// seeing if passengers are allowed or not in planes

const checkBaggage = function (items) {
  const baggageItem = items.toLowerCase(); // need to put everything first to lowercase otherwise there will be very variation like KNIFE , Knife,kNife, kniFE  which is very impractical so first put everything to lowwercase and then do all the work
  // baggageItem.includes('knife').includes('gun')     ------it returns a boolean not a string so chaining is not possible
  baggageItem.includes('knife') || baggageItem.includes('gun')
    ? console.log('you are not allowed')
    : console.log('welcome abord');
};

checkBaggage('i have a Knife');
checkBaggage('i have a gun');
checkBaggage('i have a knife and a gun');
checkBaggage('i have a candy');

//comparing emails

const compEmail = function (email, email2) {
  const needToChangeEmail = email2.toLowerCase().trim();

  needToChangeEmail === email
    ? console.log(`both are same email`)
    : console.log('both are different email');
};

compEmail('hello@jonas.io', '  Hello@Jonas.Io  \n');

const announcement = 'all the passangers comes to door 23, immediately door 23';

console.log(announcement.replace('door', 'gate'));
