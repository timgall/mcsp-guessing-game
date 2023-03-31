
let secretNumber = Math.floor(Math.random() * 20)+1;
// let numTries = 0;
let previousAnswers = []
let nameResponse=[]

let name = prompt("What is your name?")
nameResponse.push(name)

while(true){
    let input = prompt("Guess a number")
let number = Number(input);
previousAnswers.push(" "+number)
    if(input===null){
        alert("Goodbye, quitter!");
        break
    }else if(!Number.isInteger(number)|| number===""){
        alert("Enter a integer")
        // numTries+=1;
    }else {
        if(number === secretNumber){
             alert("Correct " + nameResponse + "! Your previous guesses were "+ previousAnswers+".")
             numTries+=1;
             break
        }else if(number<secretNumber){
            alert("Sorry, "+nameResponse+" guess higher!")
            // numTries+=1;   
        }else{
            alert("Sorry, "+nameResponse+"  lower!")
            // numTries+=1;
        } 
    }
}