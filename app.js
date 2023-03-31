
let messageInput = prompt("Please enter a number to play!")
let userInput = Number(messageInput);
let answer = 7;
//let testCase = "";
let tries =0;
let previousInputs=[]


while(userInput !==answer||!Number.isInteger(userInput)){
    if(userInput<answer){
        userInput = Number(prompt('Guess higher'))
        tries +=1
        previousInputs.push(" " +userInput)
    }
    else if(userInput>answer){
        userInput = Number(prompt('Guess lower'))
        tries +=1
        previousInputs.push(" " +userInput)
    }
    else if(!Number.isInteger(userInput)){
        userInput = Number(prompt("Please use a whole number and try again."))
        tries +=1
        previousInputs.push(" " +userInput)
    }
}
if(userInput === answer){
    alert('Correct! Your previous guesses were' + previousInputs+"!")
}

