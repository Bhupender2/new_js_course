'use strict';

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// question 1

const newdogs = dogs.forEach(
  dogInfo => (dogInfo.recommendedFood = Math.trunc(dogInfo.weight ** 0.75 * 28))
);
console.log(dogs);

//question 2

const findingOwner = dogs.find(dogInfo => dogInfo.owners.includes('Sarah'));

// if (findingOwner.recommendedFood > findingOwner.curFood) {
//   console.log('it is eating to much');
// } else {
//   console.log('it is eating too little');
// }

findingOwner.recommendedFood > findingOwner.curFood
  ? console.log('it is too little')
  : console.log('it is eating too much');

//question 3

const ownersEatTooMuch = dogs
  .filter(dogInfo => dogInfo.curFood > dogInfo.recommendedFood)
  .reduce((arr, curr) => {
    arr.push(curr.owners);
    return arr;
  }, [])
  .flat();
console.log(ownersEatTooMuch);

console.log(`${ownersEatTooMuch.join(' and ')} dog's are eating too much`);

const ownersEatTooLittle = dogs
  .filter(dogInfo => dogInfo.curFood < dogInfo.recommendedFood)
  .reduce((arr, curr) => {
    arr.push(curr.owners);
    return arr;
  }, [])
  .flat();
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooLittle.join(' and ')} dog's are eating too little`);

//question 5

console.log(dogs.some(dogInfo => (dogInfo.recommendedFood = dogInfo.curFood)));

//question 6
console.log(
  dogs.some(
    dogInfo =>
      dogInfo.curFood > dogInfo.recommendedFood * 0.9 &&
      dogInfo.curFood < dogInfo.recommendedFood * 1.1
  )
);

// question 7
console.log(
  dogs.filter(
    dogInfo =>
      dogInfo.curFood > dogInfo.recommendedFood * 0.9 &&
      dogInfo.curFood < dogInfo.recommendedFood * 1.1
  )
);

//question 8

const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood); // sorted in an ascending order

console.log(dogsSorted);
