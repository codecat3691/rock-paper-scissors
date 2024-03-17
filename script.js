const rock = `Rock`;
const paper = `Paper`;
const scissors = `Scissors`;


function getComputerChoice(){
    
    let randomNumber = Math.floor(Math.random() * 3);
    let result;

    if(randomNumber == 0){
        result = rock;
    }

    else if(randomNumber == 1){
        result = paper;
    }

    else {
        result = scissors;
    }

    return result;
}

console.log(getComputerChoice());