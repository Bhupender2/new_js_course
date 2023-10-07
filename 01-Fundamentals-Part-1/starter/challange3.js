const scoreDolphin = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 100 + 110) / 3;
console.log(scoreDolphin, scoreKoalas);

if (scoreDolphin > scoreKoalas && scoreDolphin >= 100) {
  console.log("Dolphin wins the trophy 🏆");
} else if (scoreDolphin < scoreKoalas && scoreKoalas >= 100) {
  console.log("koalas wins the trophy 🏆");
} else if (
  scoreDolphin === scoreKoalas &&
  scoreDolphin >= 100 &&
  scoreKoalas >= 100
) {
  console.log("its a tie 🏆 ");
} else {
  console.log("no ones wins the trophy 😢 ");
}

//switch case

const day = "monday";

switch (day) {
  case "monday":
    console.log("i would plan the course structure");
    console.log("i would go to coding meetup");
    break;

  case "tuesday":
    console.log("i would prepare theory videos");
    break;

  case "wednesday":
  case "thursday":
    console.log("i would write code examples");
    break;

  case "friday":
    console.log("i would record coding videos");
    break;

  case "saturday":
  case "sunday":
    console.log("i will enjoy my weekend :D");
    break;

  default:
    console.log("its not a valid day !");
}

//now we will do
