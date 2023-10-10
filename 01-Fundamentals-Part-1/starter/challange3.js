// const scoreDolphin = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 100 + 110) / 3;
// console.log(scoreDolphin, scoreKoalas);

// if (scoreDolphin > scoreKoalas && scoreDolphin >= 100) {
//   console.log("Dolphin wins the trophy 🏆");
// } else if (scoreDolphin < scoreKoalas && scoreKoalas >= 100) {
//   console.log("koalas wins the trophy 🏆");
// } else if (
//   scoreDolphin === scoreKoalas &&
//   scoreDolphin >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("its a tie 🏆 ");
// } else {
//   console.log("no ones wins the trophy 😢 ");
// }

//switch case

// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("i would plan the course structure");
//     console.log("i would go to coding meetup");
//     break;

//   case "tuesday":
//     console.log("i would prepare theory videos");
//     break;

//   case "wednesday":
//   case "thursday":
//     console.log("i would write code examples");
//     break;

//   case "friday":
//     console.log("i would record coding videos");
//     break;

//   case "saturday":
//   case "sunday":
//     console.log("i will enjoy my weekend :D");
//     break;

//   default:
//     console.log("its not a valid day !");
// }

//now we will do

// const day = "sunday";

// if (day === "monday") {
//   console.log("i would plan the course structure");
//   console.log("i would go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("i would prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
// we use OR logical operator
//   console.log("i would write code examples");
// } else if (day === "friday") {
//   console.log("i would record coding videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("i will enjoy the weekend");
// } else {
//   console.log("not a valid day");
// }

//ternary operator use cases
// const age = 56;

// if (age >= 18) {
//   console.log("drink wine 🍷");
// } else {
//   console.log("drink water 🥤");
// }

//lets do this with ternary operator

// const drink = age >= 18 ? "drink wine" : "drink waterrr";
// console.log(drink); // this is so simple and easy

//coding challange 4

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? `${bill * 0.15}` : `${bill * 0.2}`;

console.log(tip);

const totalValue = bill + Number(tip); // actually tip is string but bill is number

console.log(
  `the bill was ${bill} , the tip was ${tip}, and the total value ${totalValue}`
);
