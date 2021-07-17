'use strict';
// ########### CLASSES ######################
class Player{
    constructor(scoreElement , currentScoreElement)
    {
        this.score = 0;
        this.currentScore = 0;
        this.scoreElement = scoreElement;
        this.currentScoreElement = currentScoreElement;
    }
    newGame() {
        this.score = 0;
        this.currentScore = 0;
        this.scoreElement.innerHTML =  "0";
        this.currentScoreElement.innerHTML = "0";
    }
    roll(){
        let number = getRndInteger(1,6);
        showDice(number);
        if (number == 1)
        {
            this.switchTurn();
            return;
        }
        this.changeCurrentScore(this.currentScore+number);    
    }
    hold(){
        this.changeScore(this.score+this.currentScore);
        if(this.score >= 100)
        {
            win();
            endGame();
            return;
        }
        this.switchTurn();
    }
    switchTurn(){
        if  (turn == 1)
        {
            turn = 2;
            panel[1].classList.remove("fade");
            panel[0].classList.add("fade");
        }
            
        else 
        {
            turn = 1;
            panel[0].classList.remove("fade");
            panel[1].classList.add("fade");
        }
            
        this.currentScore = 0 ; 
        this.currentScoreElement.innerHTML = "0";
        
    }
    changeScore(score){
        this.score = score;
        this.scoreElement.innerHTML = this.score.toString();
    }
    changeCurrentScore(currentScore){
        this.currentScore = currentScore ; 
        this.currentScoreElement.innerHTML = this.currentScore.toString(); 
    }
}


// ########## GLOBAL VARIABLES ##############
let player1 = undefined;
let player2 = undefined;

let turn = 1 ;
let diceImage = document.getElementById('dice-image');
let panel = document.querySelectorAll(".panel");

// ########## initializing global variables #############
{
    let score = document.querySelectorAll('.score');
    let currentScore = document.querySelectorAll(".current-score");
    
    player1 = new Player (score[0] , currentScore[0] );
    player2 = new Player (score[1] , currentScore[1] );
    
}

// ########## UTLILITY FUNCTIONS #############
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
// ##########  GAME FUNCTIONS ###############
function startGame(){
    player1.newGame();
    player2.newGame();
}
function roll(){
    if (turn == 1)
        player1.roll();
    else
        player2.roll();
}
function hold(){
    if (turn == 1)
        player1.hold();
    else
        player2.hold();
}

function showDice(number){
    switch(number){
        case 1:
            diceImage.src = "dice-1.png";
            break;
        case 2:
            diceImage.src = "dice-2.png";
            break;
        case 3:
            diceImage.src = "dice-3.png";
            break;
        case 4:
            diceImage.src = "dice-4.png";
            break;
        case 5:
            diceImage.src = "dice-5.png";
            break;
        case 6:
            diceImage.src = "dice-6.png";
            break;
    }
}
function win(){
    document.getElementById("player-win").innerHTML = "PLAYER " +turn + " WINS";
}
function endGame(){
    let rollBtn = document.getElementById('roll-btn');
    rollBtn.disabled = true;
    rollBtn.classList.remove("btn-grad-hover");
    let holdBtn = document.getElementById('hold-btn');
    holdBtn.disabled = true;
    holdBtn.classList.remove("btn-grad-hover");


}
function newGame(){
    document.getElementById("player-win").innerHTML = "";
    let rollBtn = document.getElementById('roll-btn');
    rollBtn.disabled = false;
    rollBtn.classList.add("btn-grad-hover");
    let holdBtn = document.getElementById('hold-btn');
    holdBtn.disabled = false;
    holdBtn.classList.add("btn-grad-hover");
    turn = 1;
    panel[0].classList.remove("fade");
    panel[1].classList.add("fade");
    diceImage.src = "";
    startGame();
}
// ########## CALLING FUNCTIONS ###########
startGame();
