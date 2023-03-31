
let secretNumber = Math.floor(Math.random() * 20)+1;
let numTries = 0;
let previousAnswers = []

while(true){
let input = prompt("Guess a number")
let number = Number(input);    
    if(input===null){
        alert("Goodbye, quitter!");
        break
    }else if(!Number.isInteger(number)|| number===""){
        alert("Enter a integer")
        numTries+=1;
        previousAnswers.push(" "+number)
    }else {
        if(number === secretNumber){
             alert("Correct! It only took you "+numTries+ " guesses!  Your previous guesses were"+ previousAnswers+".")
             numTries+=1;
             break
        }else if(number<secretNumber){
            alert("Guess higher!")
            previousAnswers.push(" "+number)
            numTries+=1;   
        }else{
            alert('Guess lower!')
            previousAnswers.push(" "+number)
            numTries+=1;
        } 
    }
}