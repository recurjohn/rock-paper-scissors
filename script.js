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
            document.getElementById('log').innerHTML = "Tie. You played rock. Computer plays rock.";
            document.getElementById('results').innerHTML = "Current score: " + score.toString();
            return score;
          } else if (computerSelection == "paper") {
            console.log("Lose. Computer plays paper.");
            document.getElementById('log').innerHTML = "Lose. You played rock. Computer plays paper.";
            score--;
            document.getElementById('results').innerHTML = "Current score: " + score.toString();
            return score;
          } else {
            console.log("Win! Computer plays scissors.");
            document.getElementById('log').innerHTML = "Win! You played rock. Computer plays scissors.";
            score++;
            document.getElementById('results').innerHTML = "Current score: " + score.toString();
            if (score == 5) {
              document.getElementById('results').innerHTML = "Congrats! You reached 5 points and won."; //does not end game
            }
            return score;
          }
            
        case "paper":
          if (computerSelection == "rock") {
            console.log("Win! Computer plays rock.");
            document.getElementById('log').innerHTML = "Win! You played paper. Computer plays rock.";
            score++;
            document.getElementById('results').innerHTML = "Current score: " + score.toString();
            return score;
          } else if (computerSelection == "paper") {
            console.log("Tie. Computer plays paper.");
            document.getElementById('log').innerHTML = "Tie. You played paper. Computer plays paper.";
            document.getElementById('results').innerHTML = "Current score: " + score.toString();
            return score;
          } else {
            console.log("Lose. Computer plays scissors.");
            document.getElementById('log').innerHTML = "Lose. You played paper. Computer plays scissors.";
            score--;
            return score;
          }

        case"scissors":
          if (computerSelection == "rock") {
            console.log("Lose. You played scissors. Computer plays rock.");
            document.getElementById('log').innerHTML = "Lose. Computer plays rock.";
            score--;
            document.getElementById('results').innerHTML = "Current score: " + score.toString();
            return score;
          } else if (computerSelection == "paper") {
            console.log("Win! Computer plays paper.");
            document.getElementById('log').innerHTML = "Win! You played scissors. Computer plays paper.";
            score++;
            document.getElementById('results').innerHTML = "Current score: " + score.toString();
            return score;
          } else {
            console.log("Tie. Computer plays scissors.");
            document.getElementById('log').innerHTML = "Tie. You played scissors. Computer plays scissors.";
            document.getElementById('results').innerHTML = "Current score: " + score.toString();
            return score;
          }

        default:
         console.log("Not a valid input, please try again.");
         document.getElementById('results').innerHTML = "Not a valid input, please try again.";
    }
}


function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        console.log("Round " + (i+1));
        let userAnswer = prompt("Please put in your answer");
        playRound(userAnswer); //If incorrect input, it keeps going. 
        console.log("Your current score is " + score); 

        /*if (i = (rounds.length - 1)) {
          console.log("Your final score is " + score);
        } else {
          console.log("Your current score is " + score); 
        }

        i++; //increment round */ //While loop code
    }

    console.log("Your final score is " + score);
    return score;
}

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

rock.addEventListener("click", function(){playRound("rock")});
paper.addEventListener("click", function(){playRound("paper")});
scissors.addEventListener("click", function(){playRound("scissors")});