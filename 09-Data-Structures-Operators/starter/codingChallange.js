'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// question -1
const [players1, players2] = game.players;
console.log(players1, players2);
// each array for players

//question 2
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

//question 3

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// question 4

const players1Final = ['Thiago', 'cautinho', 'perisic', ...players1];
console.log(players1Final);

//question 5-- we can to change the names of the odds object variabe

// const { team1, team2, x: draw } = game.odds;
// console.log(team1, draw, team2);

//----- OR WE CAN DO LIKE THIS------

const {
  odds: { team1, team2, x: draw },
} = game;
console.log(team1, draw, team2);

// Question 6
const printGoals = function (...players) {
  //we use rest operator to make an array here
  console.log(players);
  console.log(
    `total goals scored are ${players.length} and name of the players are ${players[0]}, ${players[1]}, ${players[2]}, ${players[3]} `
  );
};

printGoals(...game.scored); // we use spread operator to expand all the elements out of the array with a comma

//question 7 team with the lower odd is more likely to win

team1 < team2 && console.log('Team 1 is more likely to win ');

// regular doubt

const rest1 = {
  name: 'chapri',
  numGuests: 20,
};
const rest2 = {
  owner: 'bhupender',
  name: 'pizza la pizza',
};
