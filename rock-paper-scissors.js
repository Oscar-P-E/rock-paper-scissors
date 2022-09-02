const ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors";

const WIN = "YOU WIN!",
  LOSE = "YOU LOSE!",
  DRAW = "DRAW!";

const scoreboard = document.querySelector(".scoreboard");
const playerScoreboard = document.querySelector(".player-score");
const computerScoreboard = document.querySelector(".computer-score");

let playerScore = 0,
  computerScore = 0;

playerScoreboard.textContent = playerScore;
computerScoreboard.textContent = computerScore;

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", playRound);
});

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

  if (playerHand === ROCK) {
    if (computerHand === PAPER) {
      ++computerScore;
    }
    if (computerHand === SCISSORS) {
      ++playerScore;
    }
  }

  if (playerHand === PAPER) {
    if (computerHand === SCISSORS) {
      ++computerScore;
    }
    if (computerHand === ROCK) {
      ++playerScore;
    }
  }

  if (playerHand === SCISSORS) {
    if (computerHand === ROCK) {
      ++computerScore;
    }
    if (computerHand === PAPER) {
      ++playerScore;
    }
  }

  playerScoreboard.textContent = playerScore;
  computerScoreboard.textContent = computerScore;

  if (playerScore >= 5) {
    scoreboard.setAttribute("style", "color: green");
    alert(WIN);
    playerScore = 0;
    computerScore = 0;
    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;
    scoreboard.setAttribute("style", "color: black");
  }

  if (computerScore >= 5) {
    scoreboard.setAttribute("style", "color: red");
    alert(LOSE);
    playerScore = 0;
    computerScore = 0;
    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;
    scoreboard.setAttribute("style", "color: black");
  }
}
