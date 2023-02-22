var playButton = document.getElementById("play-button")
var predictionMessages = ["Unlikely", "Definitely", "Ask again later"]
var chosenPredictionMessage

// ! ---------------------------------------------ignore above this line ---------------------------------------------------------------

// TODO: using the below functions, complete the gamePlay function so that the game runs as specified in the requirements document
var gamePlay = () =>{
    // YOUR CODE GOES HERE
    getUserQuestion()
    getPredictionMessage()
    showPredictionMessage()
}

// FUNCTION
// This function randomly selects one of the pre-set prediction messages to give back to the user
var getPredictionMessage = () =>{
    var randomNumber =  Math.floor(Math.random() * 3 );
    chosenPredictionMessage = predictionMessages[randomNumber]
}

// FUNCTION
// This function shows the chosen prediction message to the user
var showPredictionMessage = ()=>{
    alert(chosenPredictionMessage)
}

// FUNCTION
// This function prompts the user to input a question
var getUserQuestion = () =>{
    prompt('Ask a question')
}


// ! ---------------------------------------------ignore below this line ---------------------------------------------------------------

playButton.addEventListener("click", ()=>{
 gamePlay()
})