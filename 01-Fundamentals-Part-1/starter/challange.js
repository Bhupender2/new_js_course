//challange 1
// try to use const everytime and use of let to the minimum so obviousy we will change the data so we use let otherwise by commenting also we can do that
let markWeight = 78;
let johnWeight = 92;
let markHieght = 1.69;
let johnHieght = 1.95;

let johnBmi = johnWeight / johnHieght ** 2;
console.log(johnBmi);

let markBmi = markWeight / markHieght ** 2;
console.log(markBmi);

markWeight = 95;
johnWeight = 85;
markHieght = 1.88;
johnHieght = 1.76;
console.log(johnBmi);
console.log(markBmi);

//challange 2

if (markBmi > johnBmi) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

//challange 3
let dolphinFirstGame = 96;
let dolphinSecondGame = 108;
let dolhpinThirdGame = 89;

let koalosFirstGame = 88;
let koalasSecondGame = 91;
let koalasThirdGame = 110;

let dolphinAverageScore =
  (dolphinFirstGame + dolphinSecondGame + dolhpinThirdGame) / 3;

console.log(dolphinAverageScore);

let koalosAverageScore =
  (koalosFirstGame + koalasSecondGame + koalasThirdGame) / 3;

console.log(koalosAverageScore);

//type conversion and type coercion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + "18");
console.log("23" + 1);

const money = 0;
if (money) {
  console.log("save");
} else {
  console.log("get a job");
}

// equatiy operator
const favourite = Number(prompt("whats your number bitch!!!"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("cool bitch !! 23 is a cool number");
} else if (favourite === 7) {
  console.log("7 is also a good number");
} else {
  console.log("this is a trash number");
}

//loical operators

const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = true;

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("sarah is a good fit for driving");
} else {
  console.log("someone else should drive");
}
