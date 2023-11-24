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
