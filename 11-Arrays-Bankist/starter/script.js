'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//-------DOM MANIPULATION------
// we can write this in global context but that is not a good practice so always create a function
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // first emptying the container so that we can pit the new elements in it
  //.textContent=0   it is similar to innerHtml but here we return html tags instead of text
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">
    ${i + 1} ${type}
    </div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html); // adding html inside the movement container first argument is the string where we want to add and second argument is what html code we want to add
  });
};

//---display total value---

const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  console.log(acc.balance);

  labelBalance.textContent = `${acc.balance}€`;
};

//---total incomes (deposits(money that was only deposited not withdrawal))

const displaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter((inter, i, arr) => {
      console.log(arr); // only interset value which are greater than 1 will be stored
      return inter >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${Math.abs(interest)}€`;
};

// making a function which make a property of initials into account array modifying the previous function

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserName(accounts);
console.log(accounts);

const updateUI = function (acc) {
  //display movements
  displayMovements(acc.movements);

  //display balance
  displayBalance(acc);

  // display summary
  displaySummary(acc);
};

let currentAccount; // defining the currentAccount outside beacuse we will need this currentAccount later in other functions

//---button is in form element so here in html when we click on submit button its default behavior is to reload the page and to prevent this we will give e(event) parameter to the event handler (call back function).
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // it will prevent the page to reload on clicking the login button -prevent form from submitting
  currentAccount = accounts.find(
    // find method will return undefined if no one matches the condition
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount); // currentAccount is just another variable which point to the same object in the memory heap like Account1 ,2,3 ,4
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and message
    labelWelcome.textContent = `Welcome ${currentAccount.owner.split(' ')[0]}`;

    inputLoginUsername.value = inputLoginPin.value = ''; //we can do this because assignment operator works from right to left ...

    inputLoginPin.blur(); // input field will looses its focus
    //changing the opacity on login
    containerApp.style.opacity = 100;
    //update the UI
    updateUI(currentAccount);
  }
}); // hitting enter on any input fields will trigger a click event on btnlogin button---it is an interseting facts

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); // it will prevent it from reloading or preventing it from submitting
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  //clearing the input fields
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.userName !== currentAccount.userName
  ) {
    // doing the transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    //update the UI
    updateUI(currentAccount);
  }
});

//------REQUESTING A LOAN-----
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //adding the deposit
    currentAccount.movements.push(amount);

    //update the UI
    updateUI(currentAccount);
  }
  // clearing the input fields

  inputLoanAmount.value = '';
});

// -----CLOSING AN ACCOUNT-----

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // finding the index
    const index = accounts.findIndex(
      // find index is similar to find method but it returns the index of the first element which satisfies the condition not the ELEMENT. and both find and findindex is introduced in es6 so they dont work in superold browser
      acc => acc.userName === currentAccount.userName
    );

    // indexOf() -- we can do this but it only when the value is in the array for simpler condition but findIndex we can create complex condition but with indexof we cant

    // delete account
    accounts.splice(index, 1); // first one is the index from where the deletion will start 2nd one is how many element will be deleted

    //hide ui
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = ''; // whether the username is correct or not on clicking the close Button we need to clear the input fields
});

// ---------OVERALL BALANCE OF THE BANK------

const overallBalance = accounts
  .flatMap(mov => mov.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// ----SORTING THE MOVEMENTS---
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// console.log(currencies);
// //similar to array it passes the value, key and the intire map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

//--------------------------------------------------------coding challange 1

// const checkDogs = function (dogsJulia, dogsKate) {
//   const updatedJuliaDogs = dogsJulia.slice(); // we are making a shallow copy coz its a bad practice to mutate the parameters

//   updatedJuliaDogs.shift();
//   updatedJuliaDogs.splice(-2);

//   console.log(updatedJuliaDogs);

//   // making an array from the two datas
//   const remainingDog = updatedJuliaDogs.concat(dogsKate);

//   console.log(remainingDog);

//   //for remaining dogs we will use forEach method to loop over array to find out which one is puppy and which one is adult

//   remainingDog.forEach(function (dogAge, i) {
//     const adultOrPuppy =
//       dogAge >= 3
//         ? console.log(
//             `Dog Number ${i + 1} is an adult and is ${dogAge} Years Old`
//           )
//         : console.log(`Dog Number ${i + 1} is still a puppy 🐶`);
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//map method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

//using function expression
// const movementsUSD = movements.map(function (mov, i) {
//   // map returns a new array so we need to store it
//   console.log(mov * eurToUsd);
//   return mov * eurToUsd;
// });

//using arrow function
// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movementsUSD);

// taking the initals of the userName

// const user = 'Steven Thomas Williams';
// const userName = user
//   .toLocaleLowerCase()
//   .split(' ')
//   .map(name => name[0])
//   .join('');

// console.log(userName);

// making a function out of it instead of writing it into the global context

// const createUserName = function (user) {
//   const userName = user
//     .toLocaleLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   return userName; // userName will return all the return values in a NEW ARRAY
// };

// console.log(createUserName('Steven Thomas Williams'));

// //coding challange 2

// const calcAverageHumanAge = function (ages) {
//   const humanAgeData = ages.map(function (age) {
//     if (age <= 2) return 2 * age;
//     else if (age > 2) return 16 + 4 * age;
//   });
//   console.log(humanAgeData);

//   const olderDogs = humanAgeData.filter(function (age) {
//     return age >= 18;
//   });

//   console.log(olderDogs);

//   //1st method of doing it

//   const totalHumanAge =
//     olderDogs.reduce(function (acc, age) {
//       return acc + age;
//     }, 0) / olderDogs.length;

//   //2nd method of doing it ----like this (2+3)/2 === 2/2+3/2

//   // const totalHumanAge = olderDogs.reduce(function (acc, age, i, arr) {
//   //   return acc + age / arr.length; -----we are diving in every iteration
//   // }, 0);

//   console.log(totalHumanAge);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// coding challange 3 --calculating humanAverageAge using arrow function only

// const calcAverageHumanAge = ages =>
//   ages
//     .map(mov => (mov <= 2 ? mov * 2 : 16 + mov * 4))
//     .filter(mov => mov >= 18)
//     .reduce((acc, mov, i, arr) => acc + mov / arr.length, 0);

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// for (const account of accounts)
//   if (account.owner === 'Jessica Davis') console.log(account);
