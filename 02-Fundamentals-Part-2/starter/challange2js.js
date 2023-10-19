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
