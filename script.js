const rock = `rock`;
const paper = `paper`;
const scissors = `scissors`;

function getComputerChoice(){
    
    let computerSelection;

    let randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber == 0){
        computerSelection = rock;
    }

    else if(randomNumber == 1){
        computerSelection = paper;
    }

    else {
        computerSelection = scissors;
    }

    return computerSelection;
}

const rockTie = `Its a tie! Rock wont beat Rock`;
const paperTie = `Its a tie! Paper wont beat Paper`;
const scissorsTie = `Its a tie! Scissors wont beat Scissors`;
const rockWin = `You Win! Rock beats Scissors`;
const paperWin = `You Win! Paper beats Rock`;
const scissorsWin = `You Win! Scissors beats paper`;
const rockLose = `You Lose! Paper beats Rock`;
const paperLose = `You Lose! Scissors beats Paper`;
const scissorsLose = `You Lose! Rock beats Scissors`;
const rockChoice = `Computer chooses rock!`;
const paperChoice = `Computer chooses paper!`;
const scissorsChoice = `Computer chooses scissors!`;

const initialExplanation = `Choose your destiny...`;
const initialCondition = `Taste victory by scoring 5 points!`;

let playerPoints = 0;
let computerPoints = 0;

let explanation = document.getElementById("explanation");
let condition = document.getElementById("condition");


function playRound(playerSelection, computerSelection){

    if(playerSelection == rock && computerSelection == rock){
        return explanation.textContent = rockChoice, condition.textContent = rockTie;
    }
    else if(playerSelection == paper && computerSelection == paper){
        return explanation.textContent = paperChoice, condition.textContent = paperTie;
    }
    else if(playerSelection == scissors && computerSelection == scissors){
        return explanation.textContent = scissorsChoice, condition.textContent = scissorsTie;
    }
    else if(playerSelection == rock && computerSelection == scissors){
        playerPoints++;
        document.getElementById("playerScore").textContent = "PlayerScore: " + playerPoints;
        document.getElementById("computerScore").textContent = "ComputerScore: " + computerPoints;
        return explanation.textContent = scissorsChoice, condition.textContent = rockWin;
    }
    else if(playerSelection == paper && computerSelection == rock){
        playerPoints++;
        document.getElementById("playerScore").textContent = "PlayerScore: " + playerPoints;
        document.getElementById("computerScore").textContent = "ComputerScore: " + computerPoints;
        return explanation.textContent = rockChoice, condition.textContent = paperWin;
    }
    else if(playerSelection == scissors && computerSelection == paper){
        playerPoints++;
        document.getElementById("playerScore").textContent = "PlayerScore: " + playerPoints;
        document.getElementById("computerScore").textContent = "ComputerScore: " + computerPoints;
        return explanation.textContent = paperChoice, condition.textContent = scissorsWin;
    }
    else if(playerSelection == rock && computerSelection == paper){
        computerPoints++;
        document.getElementById("playerScore").textContent = "PlayerScore: " + playerPoints;
        document.getElementById("computerScore").textContent = "ComputerScore: " + computerPoints;
        return explanation.textContent = paperChoice, condition.textContent = rockLose;
    }
    else if(playerSelection == paper && computerSelection == scissors){
        computerPoints++;
        document.getElementById("playerScore").textContent = "PlayerScore: " + playerPoints;
        document.getElementById("computerScore").textContent = "ComputerScore: " + computerPoints;
        return explanation.textContent = scissorsChoice, condition.textContent = paperLose;
    }
    else if(playerSelection == scissors && computerSelection == rock){
        computerPoints++;
        document.getElementById("playerScore").textContent = "PlayerScore: " + playerPoints;
        document.getElementById("computerScore").textContent = "ComputerScore: " + computerPoints;
        return explanation.textContent = rockChoice, condition.textContent = scissorsLose;
    }

}


let winnerDisplayed = false;

// Adding event listeners to each button
document.getElementById('rock').addEventListener('click', function() {
    if(playerPoints < 5 && computerPoints < 5){
        playRound(rock, getComputerChoice());
    }
    else{

        if(!winnerDisplayed){
            playWinner();
            winnerDisplayed = true;
        }
        else{
            playPopup();
        }

    }
});

document.getElementById('paper').addEventListener('click', function() {
    if(playerPoints < 5 && computerPoints < 5){
        playRound(paper, getComputerChoice());
    }
    else{

        if(!winnerDisplayed){
            playWinner();
            winnerDisplayed = true;
        }
        else{
            playPopup();
        }

    }
});

document.getElementById('scissors').addEventListener('click', function() {
    if(playerPoints < 5 && computerPoints < 5){
        playRound(scissors, getComputerChoice());
    }
    else{
        
        if(!winnerDisplayed){
            playWinner();
            winnerDisplayed = true;
        }
        else{
            playPopup();
        }

    }
});


function playWinner(){

    explanation.textContent = "And the winner is...";

    if(playerPoints > computerPoints){
        
        condition.textContent = `You! The Player by ${playerPoints} vs ${computerPoints}!`;
    }
    else if(playerPoints < computerPoints){
        
        condition.textContent = `Awww! The Computer by ${computerPoints} vs ${playerPoints}`;
    }
    else if(playerPoints == computerPoints){
        
        condition.textContent = `OMG! Its a tie by ${playerPoints} vs ${computerPoints}!`;
    }
    
}

function playPopup(){

    var popup = document.getElementById('popup');
    var playAgainButton = document.getElementById('playAgainButton');
    var message = document.getElementById('message');

    popup.style.display = 'flex';

    message.textContent = playerPoints > computerPoints ? 'You Win!' : 'You Lose!';

    function playAgain() {
        
        popup.style.display = 'none';

        playerPoints = 0;
        computerPoints = 0;
        explanation.textContent = initialExplanation;
        condition.textContent = initialCondition;

        document.getElementById("playerScore").textContent = "PlayerScore: " + playerPoints;
        document.getElementById("computerScore").textContent = "ComputerScore: " + computerPoints;

        winnerDisplayed = false;
    }

    playAgainButton.addEventListener('click', playAgain);
}