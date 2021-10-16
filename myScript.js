let playerScore=0;
let computerScore=0;
let roundNum=0;
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
        resultText.textContent=`${matchOutcomeMessage}`;
        pointEarned=1;
    }
    else if(playerSelection == "Rock" && computerSelection =="Rock"){
        matchOutcomeMessage= "It's a tie! Rock cannot beat rock.";
        resultText.textContent=`${matchOutcomeMessage}`;
        pointEarned=0;
    }
    else if(playerSelection == "Rock" && computerSelection =="Paper"){
        matchOutcomeMessage= "You lose! Paper beats rock.";
        resultText.textContent=`${matchOutcomeMessage}`;
        pointEarned=-1;
    }
    else if(playerSelection == "Paper" && computerSelection =="Rock"){
        matchOutcomeMessage= "You win! Paper beats rock.";
        resultText.textContent=`${matchOutcomeMessage}`;
        pointEarned=1;
    }
    else if(playerSelection == "Paper" && computerSelection =="Paper"){
        matchOutcomeMessage= "It's a tie! Paper cannot beat paper.";
        resultText.textContent=`${matchOutcomeMessage}`;
        pointEarned=0;
    }
    else if(playerSelection == "Paper" && computerSelection =="Scissors"){
        matchOutcomeMessage= "You lose! Scissors beats paper.";
        resultText.textContent=`${matchOutcomeMessage}`;
        pointEarned=-1;
    }
    else if(playerSelection == "Scissors" && computerSelection =="Rock"){
        matchOutcomeMessage= "You lose!! Rock beats scissors.";
        resultText.textContent=`${matchOutcomeMessage}`;
        pointEarned=-1;
    }
    else if(playerSelection == "Scissors" && computerSelection =="Paper"){
        matchOutcomeMessage= "You win! Scissors beats paper.";
        resultText.textContent=`${matchOutcomeMessage}`;
        pointEarned=1;
    }
    else if(playerSelection == "Scissors" && computerSelection =="Scissors"){
        matchOutcomeMessage= "It's a tie! Scissors cannot beat scissors.";
        resultText.textContent=`${matchOutcomeMessage}`;
        pointEarned=0;
    }
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
function game(playerSelection){
    let matchOutcome;
    roundNum++;//new round
    matchOutcome=playRound(playerSelection, computerPlay());
    if(matchOutcome==1){
        playerScore++;
        playerScoreDiv.textContent=`${playerScore}`;
    }
    else if(matchOutcome==-1){
        computerScore++;
        pcScoreDiv.textContent=`${computerScore}`;
    }
    else if(matchOutcome==404){
        resultText.textContent="invalid selection";
        roundNum--; //go again
    }
    if(roundNum>=5){
        if(computerScore>playerScore){
            resultText.textContent="You lose!";
        }
        else if(playerScore>computerScore){
            resultText.textContent="You win!";
            
        }
        else{
            resultText.textContent="It's a tie!";
        }
        roundNum=0;
        computerScore=0;
        playerScore=0;
        playerScoreDiv.textContent=`${playerScore}`;
        pcScoreDiv.textContent=`${computerScore}`;
    }
    roundDiv.textContent=`Round: ${roundNum}`;
}





const rockBtn= document.querySelector('#Rock');
rockBtn.onclick=() => game('rock');

const paperBtn= document.querySelector('#Paper');
paperBtn.onclick=() => game('paper');

const scissorsBtn= document.querySelector('#Scissors');
scissorsBtn.onclick=() => game('scissors');

const playerScoreDiv=document.querySelector('#player');
const pcScoreDiv=document.querySelector('#pc');
const resultText=document.querySelector('#matchOutcomeMessage');
const roundDiv=document.querySelector('#round')