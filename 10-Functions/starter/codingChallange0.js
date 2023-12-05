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
    const updatedAnswer =
      answer >= 0 && answer <= 3
        ? (this.answers[answer] += 1)
        : 'choose a valid option';
    console.log(updatedAnswer);
    console.log(poll.answers);
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
