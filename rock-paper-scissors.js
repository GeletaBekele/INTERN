const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("PlayerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function reset(){
  playerScoreDisplay.textContent = "0";
  computerScoreDisplay.textContent = "0";
  result.textContent = "";
}
function playGame(playerChoice){
  
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if(playerChoice === computerChoice){
    result ="IT`S A TIE!"
  }
  else{
    switch(playerChoice){
      case "rock":
        result = (computerChoice === "scissors") ? "YOU WIN!": "YOU LOSE!";
        break;
      case "paper":
        result = (computerChoice === "rock") ? "YOU WIN!": "YOU LOSE!";
        break;
      case "scissors":
        result = (computerChoice === "paper") ? "YOU WIN!": "YOU LOSE!";
        break;
    }

  }
  playerDisplay.textContent = `PALYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;
  resultDisplay.classList.remove("greenText", "redText");


  switch(result){
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}