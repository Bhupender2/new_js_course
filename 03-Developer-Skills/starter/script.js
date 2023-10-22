// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//what is temp amplitude Answer: difference between highest and the lowest temp

// understanding the problem

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// real question is how to compute the min and max temperture in array
// what is sensor error look like

// breaking up into sub-problems
//1. how to ignore errors
//2. find the max and min value
//3. sub min from max and return it

// create a function where we take array as an argument so we make a temp array

const calcTempAmpltitude = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  // Manager said we now recieve two array as an argument here
  // so there is only one problem here which is how to merge two arrays
  // we will merge the do array using concat() method
  console.log(temps.length);
  let max = temps[0]; // first we need to initialise the min and  max values atleast na
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];

    if (typeof currTemp !== "number") continue; // if the currTemp is different than no so exit from the current iteration and move on the next one
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min; //return an temperature amplitude which is the difference between max and min value
};
console.log(calcTempAmpltitude([1, 2, 3, 4, 5, 88], [2, 9, 4, 6, 90]));

// convert degree celcius into kelvin
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    // value: prompt("Degree celcius"), // prompt function hmesha ek string provide karta h always return a string
    value: 10,
  };
  console.table(measurement);
  const kelvin = Number(measurement.value) + 273; // object k bahar call kiya h toh "this" use nahi karenge kelvin hi use karenge
  console.log(typeof measurement.value);
  return kelvin;
};
console.log(measureKelvin());

//coding challange question -1 developer setup

const printForecast = function (arr) {
  let forecastString = "";
  for (let i = 0; i < arr.length; i++) {
    forecastString += `...${arr[i]} degree celcius in ${i + 1} days`;
  }
  console.log(typeof forecastString);
  return "..." + forecastString;
};

const forecast = printForecast([10, 20, 30, 11, 34]);
console.log(forecast);
