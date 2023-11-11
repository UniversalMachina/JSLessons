const prompt = require('prompt-sync')();


// Generate a random number between 1 and 100
let correctNumber = Math.floor(Math.random() * 100) + 1;
let guess = 0;

// Use a for loop to give the user 10 chances to guess
for (let i = 0; i < 10; i++) {
  guess = prompt("Guess a number between 1 and 100:");

  // Convert the guess to a number
  guess = Number(guess);

  // Use conditionals to check the guess
  if (guess === correctNumber) {
    console.log("Congratulations! You guessed the right number!");
    break;
  } else if (guess < correctNumber) {
    console.log("Too low! Try a higher number.");
  } else if (guess > correctNumber) {
    console.log("Too high! Try a lower number.");
  }

  // If the user runs out of turns, let them know the game is over
  if (i === 9) {
    console.log(`Sorry, you've run out of guesses. The correct number was ${correctNumber}.`);
  }
}