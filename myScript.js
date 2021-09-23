/************************************************************************************
 * Function: computerPlay()
   -Outputs a random rock paper scissor value 
 * argument: -none
 * return: Rock Paper or Scissors
 * Author: Bhupinder Singh
 * Date: Sept 23 2021
 * Revision:
 ************************************************************************************
*/
function computerPlay(){
    let computerNumVal= Math.floor(Math.random()*3) //Math.random returns a value between 0 to 1 not inclusive. The value is scaled by 3 and floored
                                                    //since the max number .random can provide is 0.99, the floor will round the value down. The max val will always be 2
    let computerChoice;                                                
    switch(computerNumVal){
        case 0: computerChoice="Rock"; 
                break;
        case 1: computerChoice="Scissors"; 
                break;
        case 2: computerChoice="Paper"; 
                break;
        default: computerChoice="Error"; 
                break;
    }                    
    return computerChoice;                                
}
/************************************************************************************
 * Function: playRount
   -Outputs the outcome of one round of rock paper scissors
 * argument: playerSelection and computerSelection
 * return: +1 if player wins, -1 if computer wins, 0 if tie
 * Author: Bhupinder Singh
 * Date: Sept 23 2021
 * Revision:
 ************************************************************************************
*/
function playRound(playerSelection, computerSelection){
    
    playerSelection= playerSelection.toLowerCase(); //converting to this format: Name. This way it's not key sensitive
    playerSelection= playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let matchOutcomeMessage="error"; //initial value is set to error.
    let pointEarned=404;//404 indicates an invalid selection

    //if statements to determine outcomes. There must be a big brain algorithm outhere instead.
    if(playerSelection == "Rock" && computerSelection =="Scissors"){
        matchOutcomeMessage= "You win! Rock beats scissors.";
        pointEarned=1;
    }
    else if(playerSelection == "Rock" && computerSelection =="Rock"){
        matchOutcomeMessage= "It's a tie! Rock cannot beat rock.";
        pointEarned=0;
    }
    else if(playerSelection == "Rock" && computerSelection =="Paper"){
        matchOutcomeMessage= "You lose! Paper beats rock.";
        pointEarned=-1;
    }
    else if(playerSelection == "Paper" && computerSelection =="Rock"){
        matchOutcomeMessage= "You win! Paper beats rock.";
        pointEarned=1;
    }
    else if(playerSelection == "Paper" && computerSelection =="Paper"){
        matchOutcomeMessage= "It's a tie! Paper cannot beat paper.";
        pointEarned=0;
    }
    else if(playerSelection == "Paper" && computerSelection =="Scissors"){
        matchOutcomeMessage= "You lose! Scissors beats paper.";
        pointEarned=-1;
    }
    else if(playerSelection == "Scissors" && computerSelection =="Rock"){
        matchOutcomeMessage= "You lose!! Rock beats scissors.";
        pointEarned=-1;
    }
    else if(playerSelection == "Scissors" && computerSelection =="Paper"){
        matchOutcomeMessage= "You win! Scissors beats paper.";
        pointEarned=1;
    }
    else if(playerSelection == "Scissors" && computerSelection =="Scissors"){
        matchOutcomeMessage= "It's a tie! Scissors cannot beat scissors.";
        pointEarned=0;
    }
    console.log(matchOutcomeMessage+"\n");
    //returning score.
    return pointEarned;                                              
}

/************************************************************************************
 * Function: game()
   -main function that runs 5 rounds and declares a winner
 * argument: none
 * return: none
 * Author: Bhupinder Singh
 * Date: Sept 23 2021
 * Revision:
 ************************************************************************************
*/
function game(){
    let playerSelection;
    let matchOutcome;
    let playerScore=0;
    let computerScore=0;
    for(let i=0; i<5;i++){
        console.log(`Round ${i+1}. Fight!\n`);
        playerSelection=window.prompt("Choose your weapon:");
        matchOutcome=playRound(playerSelection, computerPlay());
        //if matchOutcome is 1 then the player won. Add 1 to player score. If it's -1 do the same for the computer. If it's 0 do nothing (it's a tie). If it's 404 indicate there's an error and repeat the round. 
        if(matchOutcome==1){
            playerScore++;
        }
        else if(matchOutcome==-1){
            computerScore++;
        }
        else if(matchOutcome==404){
            console.log("invalid selection");
            i--; //go again
        }
        console.log(`Your score: ${playerScore} Opponent: ${computerScore}`);
    }
    if(playerScore>computerScore){
        console.log("You win!");
    }
    else
        console.log("You lose!");
}

game();

