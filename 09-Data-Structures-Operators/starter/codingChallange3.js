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
