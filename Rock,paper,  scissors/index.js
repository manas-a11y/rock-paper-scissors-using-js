const choices = ["rock","paper","scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const playerscore = document.getElementById("player-score");
const computerscore = document.getElementById("computer-score");
let playerscores = 0;
let computerscores = 0;

function playgame(playerschoice){
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let result ="";

    if(computerchoice === playerschoice){
        result = "It's a tie!";
    }
    else{
        switch(playerschoice){
            case "rock":
                result = (computerchoice === "scissors") ? "you win" : "you lose";
                break;
            case  "paper":
                result = (computerchoice === "rock") ? "you win" : "you lose";
                break;
            case "scissors":
                result = (computerchoice === "rock") ? "you lose" : "you win";
                break;

        }
    }
    playerdisplay.textContent = `PLAYER:${playerschoice}`;
    computerdisplay.textContent = `COMPUTER:${computerchoice}`;
    resultdisplay.textContent = result;

    resultdisplay.classList.remove("greenText", "redText");

    switch(result){
        case "you lose":
            resultdisplay.classList.add("redText");
            playerscores++;
            playerscore.textContent = playerscores;
            break;
        case "you win":
            resultdisplay.classList.add("greenText");
            computerscores++;
            computerscore.textContent = computerscores;
            break;
    }
}