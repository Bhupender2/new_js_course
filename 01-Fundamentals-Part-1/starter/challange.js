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
