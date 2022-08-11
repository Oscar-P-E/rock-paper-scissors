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

// function playRound() plays a round of RPS

// prompt() user input selection (case INsensitive)

// takes computer (random) selection

// return string that says you win/lose/draw

// function game()
// game() calls playRound() and plays 5 rounds, keeping score, and reports overall winner.
// use console.log to display winner at end of each round

// feel free to create any additional helper functions if wanted.
