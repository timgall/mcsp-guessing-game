
let secretNumber = Math.floor(Math.random() * 20)+1;
//let previousAnswers = []
let numTries = 0
let nameResponse=[]
let previousAnswers=[]
//let pastPlayers={}
function playerName(){
    let name = prompt("What is your name?") 
    nameResponse.push(name);
}
function play(){
    while(true){
        let input = prompt("Guess a number");
    let number = Number(input);
    previousAnswers.push(" "+number)
        if(input===null){
            alert("Goodbye, quitter!");
            break
        }else if(!Number.isInteger(number)|| number===""){
            alert("Enter a integer");
        }else {
            if(number === secretNumber){
                alert("Correct " + nameResponse + "! Your previous guesses were "+previousAnswers+".");
                numTries+=1;
                break
            }else if(number<secretNumber){
                alert("Sorry,"+nameResponse+" guess higher!") 
            }else{
                alert("Sorry,"+nameResponse+"  lower!")
            } 
        }

    }
}
playerName()

play()

function replayFunction(){
    let replayRequest = prompt("Would you like to play again?")
    if(replayRequest !== "Yes"){
        alert("Goodbye " + nameResponse + "!")
    }    else{
        play()
    }
}
replayFunction()