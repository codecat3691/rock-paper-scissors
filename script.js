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

function getPlayerChoice(){

    let playerSelection;

    playerSelection = prompt(`Please enter rock, paper or scissors`).toLowerCase();

    if(playerSelection == rock || playerSelection == paper || playerSelection == scissors) {
        return playerSelection;
    }
    else {
        alert(`Please enter rock, paper or scissors, not something else!`)
        return getPlayerChoice();
    }

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

let playerPoints = 0;
let computerPoints = 0;


function playRound(playerSelection, computerSelection){

    if(playerSelection == rock && computerSelection == rock){
        return alert(rockChoice), alert(rockTie);
    }
    else if(playerSelection == paper && computerSelection == paper){
        return alert(paperChoice), alert(paperTie);
    }
    else if(playerSelection == scissors && computerSelection == scissors){
        return alert(scissorsChoice), alert(scissorsTie);
    }
    else if(playerSelection == rock && computerSelection == scissors){
        playerPoints++;
        return alert(scissorsChoice), alert(rockWin);
    }
    else if(playerSelection == paper && computerSelection == rock){
        playerPoints++;
        return alert(rockChoice), alert(paperWin);
    }
    else if(playerSelection == scissors && computerSelection == paper){
        playerPoints++;
        return alert(paperChoice), alert(scissorsWin);
    }
    else if(playerSelection == rock && computerSelection == paper){
        computerPoints++;
        return alert(paperChoice), alert(rockLose);
    }
    else if(playerSelection == paper && computerSelection == scissors){
        computerPoints++;
        return alert(scissorsChoice), alert(paperLose);
    }
    else if(playerSelection == scissors && computerSelection == rock){
        computerPoints++;
        return alert(rockChoice), alert(scissorsLose);
    }
}

function playGame(){

    playRound(getPlayerChoice(), getComputerChoice());
        
    alert(`And the winner is...`);
    if(playerPoints > computerPoints){
        alert(`Player score: ${playerPoints}. Computer score: ${computerPoints}.`);
        alert(`You! The Player by ${playerPoints} vs ${computerPoints}!`)
    }
    else if(playerPoints < computerPoints){
        alert(`Player score: ${playerPoints}. Computer score: ${computerPoints}.`);
        alert(`Awww! The Computer by ${computerPoints} vs ${playerPoints}`)
    }
    else if(playerPoints == computerPoints){
        alert(`Player score: ${playerPoints}. Computer score: ${computerPoints}.`);
        alert(`OMG! Its a tie by ${playerPoints} vs ${computerPoints}!`)
    }
    
}

playGame();