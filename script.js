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
        if (number == 1)
        {
            this.switchTurn();
            return;
        }
        this.currentScore += number ; 
        this.currentScoreElement.innerHTML = this.currentScore.toString();    
    }
    switchTurn(){
        if  (turn == 1)
            turn = 2;
        else 
            turn = 1;
        this.currentScore = 0 ; 
        this.currentScoreElement.innerHTML = "0";
    }
}


// ########## GLOBAL VARIABLES ##############
let player1 = undefined;
let player2 = undefined;

let turn = 1 ;
// ########## initializing global variables #############
{
    let score = document.querySelectorAll('.score');
    let currentScore = document.querySelectorAll(".current-score");
    player1 = new Player (score[0] , currentScore[0]);
    player2 = new Player (score[1] , currentScore[1]);
}

// ########## UTLILITY FUNCTIONS #############
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
// ##########  GAME FUNCTIONS ###############
function newGame(){
    player1.newGame();
    player2.newGame();
}

function roll(){
    if (turn == 1)
        player1.roll();
    else
        player2.roll();
}

// ########## CALLING FUNCTIONS ###########
newGame();