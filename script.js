document.addEventListener('DOMContentLoaded', function () {

// Declare choices array for the game
const choices = ['rock', 'paper', 'scissors'];

// Declare button variables for player selection
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// Create selections variable to be updated after each round
const commentary = document.getElementById('commentary');

// Create score variables to be updated after each round
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');

// Randomly choose for the computer
function computerSelection() {

    // Randomly select an integer within the array (0 - 2)
   let selection = Math.floor(Math.random() * choices.length);
   return choices[selection];
};

// Declare variable to hold playerSelection
let playerSelection = '';

// Set playerSelection based on corresponding button click, then playRound
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        if (button.id === 'rock') {
            playerSelection = 'rock';
        }
        else if (button.id ==='paper') {
            playerSelection = 'paper';
        }
        else if (button.id === 'scissors') {
            playerSelection = 'scissors';
        }
        trackScore(playRound(playerSelection, computerSelection()));
    });
});

// Declare variable to hold result of each round
let result = '';

// Take playerSelection and computerSelection as input, and determine round winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
    {
        commentary.textContent = `Draw! Computer chose ${computerSelection}.`;
        result = 'draw';
    }

    else if (playerSelection === 'rock' && computerSelection === 'scissors')
    {
        commentary.textContent = `You win this round! Rock beats scissors.`;
        result = 'win';
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper')
    {
        commentary.textContent = 'You lose this round! Paper beats rock.';
        result = 'loss';
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper')
    {
        commentary.textContent = 'You win this round! Scissors beats paper.';
        result = 'win';
    }

    else if (playerSelection === 'scissors' && computerSelection === 'rock')
    {
        commentary.textContent = 'You lose this round! Rock beats scissors.';
        result = 'loss';
    }

    else if (playerSelection === 'paper' && computerSelection === 'scissors')
    {
        commentary.textContent = 'You lose this round! Scissors beats paper.';
        result = 'loss';
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock')
    {
        commentary.textContent = 'You win this round! Paper beats rock.';
        result = 'win';
    }
    return result;
};

// Initialize scores to 0
let playerTracker = 0;
let computerTracker = 0;

function trackScore(result) {
    if (result === 'win') {
        playerTracker++;
    }
    else if (result === 'loss' ) {
        computerTracker++;
    }

    // Display new score in UI
    playerScore.textContent = `${playerTracker}`;
    computerScore.textContent = `${computerTracker}`;

   if (computerTracker === 5) {
      commentary.textContent = "Computer wins :(";
    }
    else if (playerTracker === 5) {
        commentary.textContent = "You win :)";
    }
};
});
