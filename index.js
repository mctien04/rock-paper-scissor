const options = ["rock", "paper", "scissors"];

function getComputerChoice () {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice == computerChoice) {
        return "It's a tie"
    }
    else if (
        (playerChoice == 'rock' && computerChoice == ' scissors') ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper"))
    {
        return "Win"
  }
  else {
    return "Lose"
  }

