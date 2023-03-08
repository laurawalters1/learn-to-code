var playButton = document.getElementById("play-button")
var predictionMessages = ["Unlikely", "Definitely", "Ask again later"]
var chosenPredictionMessage


// ! --------------------------- ignore above this line ----------------------------------

var gamePlay = () =>{
    // YOUR CODE GOES HERE
    getUserQuestionByPopUp()
    generatePredictionMessage()
    showPredictionMessageByPopUp()
}

// FUNCTION
// This function randomly generates a prediction message to give back to the user
var generatePredictionMessage = () =>{
    var randomNumber =  Math.floor(Math.random() * 3 );
    chosenPredictionMessage = predictionMessages[randomNumber]
}

// FUNCTION
// This function shows the chosen prediction message to the user
var showPredictionMessageByPopUp = ()=>{
    alert(chosenPredictionMessage)
}

// FUNCTION
// This function prompts the user to input a question
var getUserQuestionByPopUp = () =>{
    prompt('Ask a question')
}


// ! --------------------- ignore below this line ----------------------------

playButton.addEventListener("click", ()=>{
 gamePlay()
})