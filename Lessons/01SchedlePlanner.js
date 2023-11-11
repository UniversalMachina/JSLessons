const prompt = require('prompt-sync')();

const day_of_the_week = prompt("What is the day of the week");
const name = prompt("what is your name");
const goal = prompt("what is your goal");
const output = `Hello ${name}\nThe day is ${day_of_the_week}\nhere is your goal${goal}`;
console.log(output);