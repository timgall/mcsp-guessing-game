let gameHistory={};
console.log(gameHistory)

function play(){
    let name = prompt("What is your name?");
    let input = prompt("Guess a number");
    let secretNumber = Math.floor(Math.random() * 11);
    console.log(secretNumber);
    let numTries = 0;
    let previousAnswers=[];
    // let number = Number(input);
    while(input!=secretNumber){
        if(input<secretNumber){
            console.log(`input: ${input}, secretNumber: ${secretNumber}`)
            previousAnswers.push(input)
            console.log(`previousAnswers: ${previousAnswers}`)
            alert("Sorry,"+name+" guess higher!")
            numTries+=1
            console.log(`numTries: ${numTries}`)
            input=prompt("Guess Again")
        }else if(input>secretNumber){
            console.log(`input: ${input}, secretNumber: ${secretNumber}`)
            previousAnswers.push(input)
            console.log(`previousAnswers: ${previousAnswers}`)
            alert("Sorry,"+name+" lower!");
            numTries+=1
            console.log(`numTries: ${numTries}`)
            input=prompt("Guess Again")
        } 
    }
numTries+=1;
var finalCount = numTries;
console.log(`name; ${name}, finalcount: ${finalCount}`)
updateGameHistory(name,finalCount)
replayFunction()
    // if(number===secretNumber){               
    //         for(var i = 0; i<=gameHistory.length; i++){
    //             if(gameHistory[i]===nameResponse){
    //                 for (var j=0;j<=gameHistory[i].length;j++){
    //                     if(gameHistory[nameResponse[j]]>=numTries){
    //                         var scoreMore = numTries-gameHistory[nameResponse[j]]; 
    //                         alert ("That\’s Correct "+ nameResponse+ "! And you beat your previous attempt by "+ scoreMore+" fewer guesses!");
    //                         break
    //                     }
    //                     else if(gameHistory[nameResponse[j]]<=numTries){
    //                         var scoreLess=gameHistory[nameResponse[j]]-numTries;    
    //                         alert("That\’s Correct "+ nameResponse+"! You did better in your last game by "+scoreLess+" fewer guesses.");
    //                     break
    //                     }
    //                     else{       
    //                         alert("Correct " + nameResponse + "! Your previous guesses were "+previousAnswers+".");
    //                     break
    //                     }
    //                 }
    //             }else{
    //                     gameHistory.push(nameResponse[numTries]);
    //                     alert ("That\'s Correct" + nameResponse + "! Your previous guesses we\'re " + previousAnswers + "!");
    //                 }
    //             gameHistory.push(gameHistory[nameResponse[numTries]])   
    //             } 
    //     replayFunction()
    //     }
    // }
}
function replayFunction(){
    let replayRequest = prompt("Would you like to play again?")
    if(replayRequest.toLowerCase()==="yes"||replayRequest.toLowerCase()==="y"){
        play()    
        }
    else{
            alert("Goodbye " + nameResponse + "!")
    }
}
function updateGameHistory(name, finalCount){
    //if there is no data for game player then this creates a key by their name and a value that is their finalCount.
    if(!gameHistory[name]){
    gameHistory[name]=finalCount;
    console.log(`Game History: ${JSON.stringify(gameHistory)}`)//JSON.stringify converts it from the type to the literal string
    }
    else if(gameHistory[name]<=finalCount){
        let scoreDiff = finalCount - gameHistory[name]
        if(scoreDiff>0){
            alert(`Sorry, you didn't beat your high score by ${scoreDiff}`);
        }else{
            alert(`You tied your high score!`);
    }
    console.log(`Game History: ${JSON.stringify(gameHistory)}`)}
    else if (gameHistory[name]>finalCount){
        let scoreDifference = gameHistory[name]-finalCount;
        alert (`You beat your high score by ${scoreDifference}!`);
        gameHistory[name]=finalCount;
        console.log(`Game History: ${JSON.stringify(gameHistory)}`)
        console.log(gameHistory)
    }
}
// playerName()
play()