
// let secretNumber = Math.floor(Math.random() * 20)+1;
//let previousAnswers = []
let numTries = 1
let nameResponse=[];
let previousAnswers=[];
let gameHistory={};
var scoreLess=gameHistory[nameResponse[j]]-numTries;
var scoreMore = numTries-gameHistory[nameResponse[j]];    

function playerName(){
    let name = prompt("What is your name?") 
    nameResponse.push(name);
}
function play(){
    let secretNumber = Math.floor(Math.random() * 20)+1;
    while(true){
        let input = prompt("Guess a number");
        let number = Number(input);
        previousAnswers.push(" "+number)
        if(input===null){
            alert("Goodbye, quitter!");
            break
        }else if(!Number.isInteger(number)||number===""){
            alert("Enter a integer");
        }else if(number===secretNumber){               
            for(var i = 0; i<gameHistory.length; i++){
                if(gameHistory[i]===nameResponse){
                    for (var j=0;j<=gameHistory[i].length;j++){
                        if(gameHistory[nameResponse[j]]>=numTries){
                            alert ("That\’s Correct "+ nameResponse+ "! And you beat your previous attempt by "+ scoreMore+" fewer guesses!");
                        }else if(gameHistory[nameResponse[j]]<=numTries){
                            alert("That\’s Correct "+ nameResponse+"! You did better in your last game by "+scoreLess+" fewer guesses.");
                        }else{       
                            alert("Correct " + nameResponse + "! Your previous guesses were "+previousAnswers+".");
                        }
                    }
                }else{
                        gameHistory.push(nameResponse[numTries]);
                        alert ("That\'s Correct" + nameResponse + "! Your previous guesses we\'re " + previousAnswers + "!");
                    }
                gameHistory.push(gameHistory[nameResponse[numTries]])   
                } 
        }else if(number<secretNumber){
            alert("Sorry,"+nameResponse+" guess higher!")
            numTries+=
        }else if (number>secretNumber){
            alert("Sorry,"+nameResponse+" lower!");
            numTries+=
        }else{
            alert("Error!")
        }
    }
}

function replayFunction(){
    let replayRequest = prompt("Would you like to play again?")
    if(replayRequest === ("Yes"||"yes"||"y"||"Y")){
        play()    
        }    else{
            alert("Goodbye " + nameResponse + "!")
    }
}
playerName()
while(true){
    play()
    replayFunction()
}
