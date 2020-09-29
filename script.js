const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

let userInput;
let computerWins;
let userWins;
let userScore = 0;
let computerScore = 0;

const winningMessage = document.querySelector(".winner-msg");
const userCount = document.querySelector(".user-count");
const compCount = document.querySelector(".comp-count");

const imgUser = document.querySelector(".default-U");
const imgComp = document.querySelector(".default-C");

const buttons = document.querySelectorAll(".play");
for (const button of buttons) {
  button.addEventListener("click", () => {
    if (button.value === "rock") {
      userInput = ROCK;
    } else if (button.value === "paper") {
      userInput = PAPER;
    } else {
      userInput = SCISSORS;
    }
    if (!computerWins && !userWins) {
      let roundWinner = playRound(userInput, computerPlay());
      updateGame(roundWinner);
    }
  });
}

function updateGame(roundWinner) {
  if (roundWinner === "computer") {
    computerScore += 1;
  } else if (roundWinner === "user") {
    userScore += 1;
  }
  userCount.textContent = userScore;
  compCount.textContent = computerScore;
  if (computerScore === 5) {
    computerWins = true;
    winningMessage.textContent = "Computer wins, You loose!";
  } else if (userScore === 5) {
    userWins = true;
    winningMessage.textContent = "You win, computer looses!";
  }
}

function computerPlay() {
  return Math.floor(Math.random() * 3) + 1;
}

function playRound(userSelection, computerSelection) {
  if (computerSelection === ROCK) {
    imgComp.src = "images/c-rock.svg";
  } else if (computerSelection === PAPER) {
    imgComp.src = "images/c-paper.svg";
  } else {
    imgComp.src = "images/c-scissors.svg";
  }

  if (userSelection === ROCK) {
    imgUser.src = "images/u-rock.svg";
  } else if (userSelection === PAPER) {
    imgUser.src = "images/u-paper.svg";
  } else {
    imgUser.src = "images/u-scissors.svg";
  }

  let roundWinner = "draw";
  if (computerSelection === ROCK && userSelection === PAPER) {
    roundWinner = "user";
    winningMessage.textContent = "You win! Paper wraps Rock!";
  } else if (computerSelection === ROCK && userSelection === SCISSORS) {
    roundWinner = "computer";
    winningMessage.textContent = "You lose! Rock blunts Scissors!";
  } else if (computerSelection === PAPER && userSelection === ROCK) {
    roundWinner = "computer";
    winningMessage.textContent = "You lose! Paper wraps Rock!";
  } else if (computerSelection === PAPER && userSelection === SCISSORS) {
    roundWinner = "user";
    winningMessage.textContent = "You win! Scissors cut paper!";
  } else if (computerSelection === SCISSORS && userSelection === ROCK) {
    roundWinner = "user";
    winningMessage.textContent = "You win! Rock blunts Scissors!";
  } else if (computerSelection === SCISSORS && userSelection === PAPER) {
    roundWinner = "computer";
    winningMessage.textContent = "You lose! Scissors cuts Paper!";
  } else {
    winningMessage.textContent = "It's a draw!";
  }
  return roundWinner;
}
