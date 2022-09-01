// function playRPS() {
const ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors";

const WIN = "YOU WIN!",
  LOSE = "YOU LOSE!",
  DRAW = "DRAW!";

let playerScore = 0,
  computerScore = 0;

// Create three buttons, one for each selection.
// Add an event listener to the buttons that call your playRound function with
// the correct playerSelection every time a button is clicked.
const buttons = document.querySelectorAll(".btn");
// let playerHand;

buttons.forEach((btn) => {
  // btn.addEventListener("click", playerChoice);
  btn.addEventListener("click", playRound);
});

// Add a div for displaying results and change all of your console.logs into DOM methods.

// Display the running score.

// Announce a winner of the game once a player reaches 5 points.

function computerChoice() {
  let choice = Math.floor(Math.random() * 3);

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

function playerChoice(e) {
  let choice = e.target.id;

  switch (choice) {
    case "rock-btn":
      return ROCK;

    case "paper-btn":
      return PAPER;

    case "scissors-btn":
      return SCISSORS;

    default:
      return alert("ERROR");
  }
}

function playRound(e) {
  let playerHand = playerChoice(e);
  let computerHand = computerChoice();
  console.log(`Player hand is ${playerHand}`);
  console.log(`Computer hand is ${computerHand}`);

  switch (playerHand) {
    case ROCK:
      if (computerHand === ROCK) {
        return DRAW;
      }
      if (computerHand === PAPER) {
        ++computerScore;
        return LOSE;
      }
      if (computerHand === SCISSORS) {
        ++playerScore;
        return WIN;
      }

    case PAPER:
      if (computerHand === PAPER) {
        return DRAW;
      }
      if (computerHand === SCISSORS) {
        ++computerScore;
        return LOSE;
      }
      if (computerHand === ROCK) {
        ++playerScore;
        return WIN;
      }

    case SCISSORS:
      if (computerHand === SCISSORS) {
        return DRAW;
      }
      if (computerHand === ROCK) {
        ++computerScore;
        return LOSE;
      }
      if (computerHand === PAPER) {
        ++playerScore;
        return WIN;
      }

    default:
      return console.log("ERROR");
  }
}

// // function game() {

// for (i = 0; i < 5; ++i) {
// //   let outcome = playRound();
// //   // console.log(outcome);

// //   if (outcome === WIN) {
// //     ++playerScore;
// //   }
// //   if (outcome === LOSE) {
// //     ++computerScore;
// //   }

// //   // console.log("playerScore = " + playerScore + ", computerScore = " + computerScore);

// //   // if (playerScore >= 3 || computerScore >= 3) {
// //   // break;
// //   // } // if playerScore or computerScore >= 3
// //   // } // for i < 5

// //   if (playerScore === computerScore) {
// //     return DRAW;
// //   }
// //   if (playerScore > computerScore) {
// //     return WIN;
// //   }
// //   if (playerScore < computerScore) {
// //     return LOSE;
// //   }
// // }

// // alert(game());
// }

// playRPS();
