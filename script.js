function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice; //"rock", "paper", or "scissors"
    //console.log(choice);
}

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

    switch(x) {
        case playerChoseRock:
            break;
        case playerChosePaper:
            break;
        case playerChoseScissors:
            break;
        case playerChoseNone:
            break;
    }
}