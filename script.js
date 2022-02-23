function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice; //"rock", "paper", or "scissors"
    //console.log(choice);
}

let score = 0; //setup counter

function playRound(playerSelection, computerSelection) {
    /* psuedocode
    change player input to case-sensitive 
    player plays rock
        computer plays rock 
            tie
        computer plays paper
            lose 
        computer plays scissors 
            win
    player plays paper
        computer plays rock
            win 
        computer plays paper
            tie 
        computer plays scissors
            lose 
    player plays scissors
        computer plays rock
            lose 
        computer plays paper
            win 
        computer plays scissors
            tie 
    player plays none of the options
        fail
    */
    let playerSelectionRefined = playerSelection.toLowerCase(); //turn user input to lowercase. Should now be "rock", "paper", or "scissors"

    playerSelection = playerSelectionRefined; //set the new value back to the original

    computerSelection = computerPlay(); //get computer input

    //console.log(score); 

    //console.log("CPU answered: " + computerSelection); //debugging only - show computer input

    switch(playerSelection) {
        case "rock":
          if (computerSelection == "rock") {
            console.log("Tie. Computer plays rock.");
            return score;
          } else if (computerSelection == "paper") {
            console.log("Lose. Computer plays paper.");
            return score--;
          } else {
            console.log("Win! Computer plays scissors.");
            return score++;
          }
        break;
            
        case "paper":
          if (computerSelection == "rock") {
            console.log("Win! Computer plays rock.");
          } else if (computerSelection == "paper") {
            console.log("Tie. Computer plays paper.");
          } else {
            console.log("Lose. Computer plays scissors.");
          }
          break;

        case"scissors":
          if (computerSelection == "rock") {
            console.log("Lose. Computer plays rock.");
          } else if (computerSelection == "paper") {
            console.log("Win! Computer plays paper.");
          } else {
            console.log("Tie. Computer plays scissors.");
          }
          break;

        default:
         console.log("Not a valid input, please try again.");
    }

    //Win message
    //Lose message
    //Tie message
}