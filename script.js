// Declare choices array for the game
const choices = ['rock', 'paper', 'scissors'];
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

// Randomly choose for the computer
let computerSelection = function() {

    // Randomly select an integer within the array (0 - 2)
   let selection = Math.floor(Math.random() * choices.length);
   return choices[selection];
}

// Allow player to input their rock, paper, or scissors selection (playerSelection should be case insensitive)
let playerSelection = function() { 
    let raw_selection = prompt("Choose rock, paper, or scissors!");

    // Convert choice to lowercase to ensure accurate string comparisons
    let selection = raw_selection.toLowerCase();

    // Alert user if they submitted an invalid choice
    if (selection != 'rock' && selection != 'paper' && selection != 'scissors')
    {
        alert(`${raw_selection} is an invalid choice`);
    }
    return selection;
}

// Declare variable to hold result of each round
let result;

// Take playerSelection and computerSelection as input, and determine round winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
    {
        alert(`Draw! Computer chose ${computerSelection}.`);
        result = 'draw';
    }

    else if (playerSelection === 'rock' && computerSelection === 'scissors')
    {
        alert(`You win! Rock beats scissors.`);
        result = 'win';
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper')
    {
        alert('You lose! Paper beats rock.');
        result = 'loss';
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper')
    {
        alert('You win! Scissors beats paper.');
        result = 'win';
    }

    else if (playerSelection === 'scissors' && computerSelection === 'rock')
    {
        alert('You lose! Rock beats scissors.');
        result = 'loss';
    }

    else if (playerSelection === 'paper' && computerSelection === 'scissors')
    {
        alert('You lose! Scissors beats paper.');
        result = 'loss';
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock')
    {
        alert('You win! Paper beats rock.');
        result = 'win';
    }
    return result;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5)
    {   
        playRound(playerSelection(), computerSelection());
        if (result === 'win') {
            playerScore++;
        }
        
        else if (result === 'loss' ) {
            computerScore++;
        }
    
        alert(`Score: Player ${playerScore}, Computer ${computerScore}`);
    }
}
playGame();
