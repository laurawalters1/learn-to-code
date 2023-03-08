var playButton = document.getElementById('play-button')
var buttonsDiv = document.getElementById('buttons-div')
var options = document.querySelectorAll('.option')
var computerChoiceP = document.getElementById('computerChoice')
var resultP = document.getElementById('result')
var userScore = 0
var computerScore = 0
var computerChoices = ["rock", "paper", "scissors"]
var userChoice
var computerChoice
var result
var div = document.getElementById("buttons")

// ! --------------------------------------------- ignore above this line ---------------------------------------------------------------

// TODO: have a look at the functions declared below, read their descriptions, and then complete the gameplay function by calling those functions, so that the rock paper scissors game runs as stated in the requirements
var gamePlay = ()=>{
    // YOUR CODE GOES HERE
    getUserChoiceByPrompt()
    checkUserChoice()
    getComputerChoice()
    showComputerChoiceByAlert()
    determineWinnerFromPrompt()
    showWinnerByAlert()
}


// FUNCTION
// This function gets the computers choice out of rock, paper and scissors
var getComputerChoice = ()=>{
    var randomNumber =  Math.floor(Math.random() * 3 );
     computerChoice = computerChoices[randomNumber]
     console.log("The computer selected: " + computerChoice)
}

// FUNCTION
// This function shows the result of the game to the user via an alert
var showWinnerByAlert = () =>{
    alert(result)
}

// FUNCTION
// This function shows the result of the game on the screen for the user
var showWinnerOnScreen = () =>{
    options.forEach((option)=>{
        option.addEventListener('click', ()=>{
            // alert(result)
            setTimeout(()=>{
                resultP.textContent = result
            }, 1000)
            
        })
    })
}

// FUNCTION
// This function checks that the user has inputted a valid option, if they have not, it asks them to select again
var checkUserChoice = ()=>{
    if(!computerChoices.includes(userChoice)){
        alert('Please choose rock paper or scissors')
        getUserChoiceByPrompt()
        checkUserChoice()
    } else {
        return
    }
}

// FUNCTION
// This function works out whether the user or the computer won, or whether they drew, and informs the user of the result
var determineWinnerFromPrompt = () =>{
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
// This function determines whether the user won or lost based on which button they clicked
var determineWinnerFromButtons = ()=>{
    options.forEach((option)=>{
        option.addEventListener('click', ()=>{
            if(userChoice === computerChoice){
                result = 'Draw!'
            } else if (userChoice === "rock" && computerChoice === "paper" || userChoice === "scissors" && computerChoice === "rock" || userChoice === "paper" && computerChoice === "scissors"){
                result = 'You lose!'
            } else {
                result = 'You win!'
            }
            console.log("The result of this game is: " + result)
        })
    })
}
// FUNCTION
// This function shows the user what the computer chose in an alert
var showComputerChoiceByAlert = () =>{
            alert("computer chose " + computerChoice)
}

// FUNCTION
// This function shows the user what the computer chose in an alert
var showComputerChoiceOnScreen = () =>{
    options.forEach((option)=>{
        option.addEventListener("click", ()=>{
            // alert("computer chose " + computerChoice)
            computerChoiceP.textContent = "The computer chose " + computerChoice
        })
    })
    
}

// FUNCTION
// This function asks the user the input a choice out of rock, paper or scissors by prompt
var getUserChoiceByPrompt = ()=>{
    userChoice = prompt('Please choose rock, paper or scissors and type your answer below') 
}


// FUNCTION
// This function starts the game off by showing the user the button options they have to choose from
var showButtons = ()=>{
    buttonsDiv.classList.remove('d-none')
}

// FUNCTION
// This function gets the users choice based on which button they click
var getUserChoiceByButtons = () =>{
    options.forEach((option)=>{
        option.addEventListener('click', (e)=>{
            userChoice = e.target.getAttribute('data-value')
            console.log("The user selected: " + userChoice)
        })
    })
}

// FUNCTION
// This function hides the play game button when the game begins
var hidePlayGameButton = () => {
    playButton.classList.add('d-none')
}



// ! --------------------------------------------- ignore below this line ---------------------------------------------------------------

playButton.addEventListener("click", ()=>{
    gamePlay()
})