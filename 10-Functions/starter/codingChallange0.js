'use strict';

// const addTax = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// }; // addTax is a higher order function coz it returns a function
// console.log(addTax(0.23)(100));

//coding challange of function section

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  //question 2
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    //1st method
    // const updatedAnswer =
    //   answer >= 0 && answer <= 3
    //     ? (this.answers[answer] += 1)
    //     : 'choose a valid option';
    //  console.log(updatedAnswer);

    //2nd method-- more concise when we dont know the array length
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    console.log(this.answers);
    this.displayResults('string');
  },

  // question 3
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer() ---calling a function here

const register = poll.registerNewAnswer;

//question 2
document.querySelector('.poll').addEventListener('click', register.bind(poll)); // we using bind beacuse here this keyword on calling function will point to poll element

// question 3

// poll.displayResults.call({ answers: [2, 3, 5, 7, 8, 11] }, 'string'); // we now wanted to point this keyword to our new answers method

poll.displayResults.bind({ answers: [2, 3, 5, 7, 8, 11111] })('array');

// closures example demonstration

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();

// coding challanage 2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
