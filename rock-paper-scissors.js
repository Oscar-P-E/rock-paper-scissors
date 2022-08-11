const ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors";

function computerChoice() {
  let choice = Math.floor(Math.random() * 3);
  console.log(choice);

  switch (choice) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 2:
      return SCISSORS;
    default:
      return "error: something went wrong (you have reached the default case)"
  }
}


function playerChoice() {

  let choice = prompt("Enter (R)'rock', (P)'paper', or (S)'scissors'.").toLowerCase();
  console.log(choice);

  switch (choice) {
    case "r":
    case "rock":
      return ROCK;

    case "p":
    case "paper":
      return PAPER;

    case "s":
    case "scissors":
      return SCISSORS;

    default:
      return console.log("Error: Something went wrong (you have reached the default case)");
  }
}


function playRound() {

  let playerHand = playerChoice()
  let computerHand = computerChoice()
  console.log(playerHand)
  console.log(computerHand)

  switch (playerHand) {
    case ROCK:
      if (computerHand === ROCK) {
        return alert("DRAW!");
      }
      if (computerHand === PAPER) {
        return alert("YOU LOSE!");
      }
      if (computerHand === SCISSORS) {
        return alert("YOU WIN!");
      }

    case PAPER:
      if (computerHand === PAPER) {
        return alert("DRAW!");
      }
      if (computerHand === SCISSORS) {
        return alert("YOU LOSE!");
      }
      if (computerHand === ROCK) {
        return alert("YOU WIN!");
      }

    case SCISSORS:
      if (computerHand === SCISSORS) {
        return alert("DRAW!");
      }
      if (computerHand === ROCK) {
        return alert("YOU LOSE!");
      }
      if (computerHand === PAPER) {
        return alert("YOU WIN!");
      }

    default:
      return console.log("Error: Something went wrong (you have reached the default case)");
  }
}

// function game()
// game() calls playRound() and plays 5 rounds, keeping score, and reports overall winner.
// use console.log to display winner at end of each round

// feel free to create any additional helper functions if wanted.
