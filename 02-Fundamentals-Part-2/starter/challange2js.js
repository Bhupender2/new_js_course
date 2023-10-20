"use strict";
// coding challange 3 on javascript fundamental part-2
const markMiller = {
  fullName: "Mark Miller",
  mass: 78,
  hieght: 1.68,
  calcBMI: function () {
    this.bmi = this.mass / this.hieght ** 2;
    return this.bmi;
  },
};

const johnSmith = {
  fullName: "John Smith",
  mass: 92,
  hieght: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.hieght ** 2;
    return this.bmi;
  },
};
johnSmith.calcBMI();
markMiller.calcBMI();

console.log(markMiller.bmi);
console.log(johnSmith.bmi);

if (markMiller.bmi > johnSmith.bmi) {
  console.log(
    `${markMiller.fullName}'s BMI (${markMiller.bmi}) is higher than ${johnSmith.fullName}'s BMI (${johnSmith.bmi})`
  );
} else if (johnSmith.bmi > markMiller.bmi) {
  console.log(
    `${johnSmith.fullName}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.fullName}'s BMI (${markMiller.bmi})`
  );
}
// coding challange Q-4 javascript Fundamentals Part 2

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]; //creating an array of Bills
const tips = [];
const totals = []; // creating an empty array of totals and tips

const calcTip = function () {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + calcTip(bills[i]));
}
console.log(tips, totals);
