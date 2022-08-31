const ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors";

const WIN = "YOU WIN!",
  LOSE = "YOU LOSE!",
  DRAW = "DRAW!";

// Create three buttons, one for each selection.
// Add an event listener to the buttons that call your playRound function with
// the correct playerSelection every time a button is clicked.
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

// Add a div for displaying results and change all of your console.logs into DOM methods.

// Display the running score.

// Announce a winner of the game once a player reaches 5 points.

function computerChoice() {
  let choice = Math.floor(Math.random() * 3);
  // console.log(choice);

  switch (choice) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 2:
      return SCISSORS;
    default:
      return "ERROR";
  }
}

function playerChoice() {
  let choice = prompt(
    "Enter (R)'rock', (P)'paper', or (S)'scissors'."
  ).toLowerCase();
  // console.log(choice);

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
      return alert("Invalid choice. Try again!");
  }
}

function playRound() {
  let playerHand = playerChoice();
  let computerHand = computerChoice();
  // console.log(playerHand)
  // console.log(computerHand)

  switch (playerHand) {
    case ROCK:
      if (computerHand === ROCK) {
        return DRAW;
      }
      if (computerHand === PAPER) {
        return LOSE;
      }
      if (computerHand === SCISSORS) {
        return WIN;
      }

    case PAPER:
      if (computerHand === PAPER) {
        return DRAW;
      }
      if (computerHand === SCISSORS) {
        return LOSE;
      }
      if (computerHand === ROCK) {
        return WIN;
      }

    case SCISSORS:
      if (computerHand === SCISSORS) {
        return DRAW;
      }
      if (computerHand === ROCK) {
        return LOSE;
      }
      if (computerHand === PAPER) {
        return WIN;
      }

    default:
      return console.log("ERROR: User entered invalid choice");
  }
}

function game() {
  let p1 = 0,
    cpu1 = 0;

  // for (i = 0; i < 5; ++i) {
  let outcome = playRound();
  // console.log(outcome);

  if (outcome === WIN) {
    ++p1;
  }
  if (outcome === LOSE) {
    ++cpu1;
  }

  // console.log("p1 = " + p1 + ", cpu1 = " + cpu1);

  // if (p1 >= 3 || cpu1 >= 3) {
  // break;
  // } // if p1 or cpu1 >= 3
  // } // for i < 5

  if (p1 === cpu1) {
    return DRAW;
  }
  if (p1 > cpu1) {
    return WIN;
  }
  if (p1 < cpu1) {
    return LOSE;
  }
}

alert(game());
