let getComputerChoice = () => {
  const validGames = ['rock', 'paper', 'scissors']
  let randomIndex = Math.floor(Math.random() * 3)
  return validGames[randomIndex]
}

/*
 In case player wins return 1
 In case computer wins return -1
 In case draw returns 0
 */
let playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if (playerSelection === computerSelection) {
    return 0;
  } else if ((playerSelection == 'rock' && computerSelection == 'paper')
    || (playerSelection == 'paper' && computerSelection == 'scissors')
    || (playerSelection == 'scissors' && computerSelection == 'rock')) {
    return -1;
  } else {
    return 1;
  }
}

// let game = () => {
//   let numberOfRounds = 5
//   let playerScore = 0, computerScore = 0
//   while (numberOfRounds--) {
//     let playerSelection = prompt('Enter you choice..')
//     let computerSelection = getComputerChoice()
//     let result = playRound(playerSelection, computerSelection)
//     if (result.includes('Win')) ++playerScore
//     else if (result.includes('Lose')) ++computerScore
//     console.log(result)
//   }
//   if (playerScore === computerScore) {
//     return `Draw! both have ${playerScore} points`
//   } else if (playerScore > computerScore) {
//     return `You Win! Player has ${playerScore} points and Computer has ${computerScore} points`
//   } else {
//     return `You Lose! Computer has ${computerScore} points and Player has ${playerScore} points`
//   }
// }

// console.log(game())

let playerScore = 0, computerScore = 0;
const playerScoreElement = document.querySelector('.result .player');
const computerScoreElement = document.querySelector('.result .computer');
const statusElement = document.querySelector('.status');

function playVsComputer(playerSelection) {
  let computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  switch (result) {
    case 1:
      ++playerScore;
      if(playerScore === 5){
        statusElement.innerText = `WOW!! You Won This Round! You: ${playerScore}, computer: ${computerScore}`;
        playerScoreElement.innerText = `You: ${playerScore = 0}`;
        computerScoreElement.innerText = `computer: ${computerScore = 0}`;
      }else{
        statusElement.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScoreElement.innerText = `You: ${playerScore}`;
      }
      break;
    case -1:
      ++computerScore;
      if(computerScore === 5){
        statusElement.innerText = `You Lost This Round! You: ${playerScore}, computer: ${computerScore}`;
        playerScoreElement.innerText = `You: ${playerScore = 0}`;
        computerScoreElement.innerText = `computer: ${computerScore = 0}`;
      }else{
        statusElement.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScoreElement.innerText = `computer: ${computerScore}`;
      }
      break;
    default:
      statusElement.innerText = `Draw! ${playerSelection} and ${computerSelection}`;
  }
}

const rockBtn = document.querySelector('.btn.rock');
const paperBtn = document.querySelector('.btn.paper');
const scissorsBtn = document.querySelector('.btn.scissors');

rockBtn.addEventListener('click', () => playVsComputer('rock'))
paperBtn.addEventListener('click', () => playVsComputer('paper'))
scissorsBtn.addEventListener('click', () => playVsComputer('scissors'))