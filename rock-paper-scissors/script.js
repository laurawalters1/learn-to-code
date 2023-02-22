var playButton = document.getElementById('play-button')

var userScore = 0
var computerScore = 0
var computerChoices = ["rock", "paper", "scissors"]
var userChoice
var computerChoice
var result

// TODO: have a look at the functions declared below, read their descriptions, and then complete the gameplay function by calling those functions, so that the rock paper scissors game runs as stated in the requirements
var gamePlay = ()=>{
    getUserChoice()
    checkUserChoice()
    getComputerChoice()
    showComputerChoice()
    determineWinner()
    showWinner()
}



// FUNCTION
// This function gets the computers choice out of rock, paper and scissors
var getComputerChoice = ()=>{
    var randomNumber =  Math.floor(Math.random() * 3 );
     computerChoice = computerChoices[randomNumber]
}




// FUNCTION
// This function shows the result of the game to the user
var showWinner = () =>{
    alert(result)
}


// FUNCTION
// This function checks that the user has inputted a valid option, if they have not, it asks them to select again
var checkUserChoice = ()=>{
    if(!computerChoices.includes(userChoice)){
        alert('Please choose rock paper or scissors')
        getUserChoice()
        checkUserChoice()
    } else {
        return
    }
}



// FUNCTION
// This function works out whether the user or the computer won, or whether they drew, and informs the user of the result
var determineWinner = () =>{
    if(userChoice === computerChoice){
        result = 'Draw!'
        return
    } else if (userChoice === "rock" && computerChoice === "paper" || userChoice === "scissors" && computerChoice === "rock" || userChoice === "paper" && computerChoice === "scissors"){
        result = 'You lose!'
        return
    } else {
        result = 'You win!'
        return
    }
}



// FUNCTION
// This function shows the user what the computer chose
var showComputerChoice = () =>{
    alert("computer chose " + computerChoice)
}



// FUNCTION
// This function prompts the user the input a choice out of rock, paper or scissors
var getUserChoice = ()=>{
    userChoice = prompt('Please choose rock, paper or scissors and type your answer below') 
}


// ! ignore below this line

playButton.addEventListener("click", ()=>{
    gamePlay()
})