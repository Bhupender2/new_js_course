'use strict';

document.body.append(document.createElement('textarea')); // it will be explained in the further section
document.body.append(document.createElement('button'));

// adding event handler tyo button element beacuse on clicking on button element all the transformation is happening...

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  console.log(text);
  const subText = text.split('\n');
  console.log(subText); // it is an array of five strings
  for (const [i, item] of subText.entries()) {
    const [first, last] = item.trim().toLocaleLowerCase().split('_');
    const stringtext = `${first}${last.replace(
      last[0],
      last[0].toUpperCase()
    )}`.padEnd(20, '  ');

    console.log(`${stringtext}${'✅'.repeat(i + 1)}`);
  }
});

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
console.log(flights.split('+'));

// now we are applying for of loop in this array that we got
// we have to slice the string two times so we make a function for this
const getSlicedCode = str => str.toUpperCase().slice(0, 3);

for (const flight of flights.split('+')) {
  const [a, b, c, d] = flight.split(';');
  const output = `${a.startsWith('_Delayed') ? '🔴' : ''}${a.replace(
    /_/g,
    ' '
  )} from ${getSlicedCode(b)} to ${getSlicedCode(c)} (${d.replace(
    ':',
    'h'
  )})`.padStart(50);
  console.log(output);
}
