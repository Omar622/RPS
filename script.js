let getComputerChoice = () => {
  const validGames = ['rock', 'paper', 'scissors']
  let randomIndex = Math.floor(Math.random() * 3)
  return validGames[randomIndex]
}

let playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if (playerSelection === computerSelection) {
    return `Draw! both played ${playerSelection}`
  } else if ((playerSelection == 'rock' && computerSelection == 'paper')
    || (playerSelection == 'paper' && computerSelection == 'scissors')
    || (playerSelection == 'scissors' && computerSelection == 'rock')) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  } else {
    return `You Win! ${playerSelection} beats ${computerSelection}`
  }
}

let game = () => {
  let numberOfRounds = 5
  let playerScore = 0, computerScore = 0
  while (numberOfRounds--) {
    let playerSelection = prompt('Enter you choice..')
    let computerSelection = getComputerChoice()
    let result = playRound(playerSelection, computerSelection)
    if (result.includes('Win')) ++playerScore
    else if (result.includes('Lose')) ++computerScore
    console.log(result)
  }
  if (playerScore === computerScore) {
    return `Draw! both have ${playerScore} points`
  } else if (playerScore > computerScore) {
    return `You Win! Player has ${playerScore} points and Computer has ${computerScore} points`
  } else {
    return `You Lose! Computer has ${computerScore} points and Player has ${playerScore} points`
  }
}


console.log(game())