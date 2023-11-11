const prompt = require('prompt-sync')();

// Now you can use prompt() to get user input synchronously
const adjective = prompt('Please enter an adjective: ');
const noun = prompt('Please enter a noun: ');
const verb = prompt('Please enter a verb ending in -ing: ');
const place = prompt('Please enter a place: ');

// Create a story using the inputs
const story = `The ${adjective} ${noun} was ${verb} at the ${place}.`;
console.log(story);
