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
}

function game() {
    let player = 0;
    let computer = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt("Enter your choice of rock, paper, or scissors");
      const computerSelection = getComputerChoice();
  
      console.log(playRound(playerSelection, computerSelection));
  
      const result = playRound(playerSelection, computerSelection);
  
      if (result === "Win") {
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        player++;
      } else if (result === "Lose") {
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
        computer++;
      }
    }
    console.log(`Final Score: Player ${player} - ${computer} Computer`);

    // Determine the overall winner
    if (player > computer) {
      console.log("Congratulations! You are the overall winner!");
    } else if (player < computer) {
      console.log("Computer wins! Better luck next time.");
    } else {
      console.log("It's a tie. No overall winner.");
    }
  }
  
  game();