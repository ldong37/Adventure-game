// State Management: Track where the player is right now
let currentState = "start";

// Grab the HTML slots we need to change
const storyText = document.getElementById("question");
const answersList = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

// Helper Function: Generates a button item and injects it into our <ul> list
function addAnswerButton(buttonText, targetState) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    
    button.textContent = buttonText;
    
    // When clicked, move the story to the target path and redraw the UI
    button.addEventListener("click", () => {
        currentState = targetState;
        renderQuestion();
    });
    
    li.appendChild(button);
    answersList.appendChild(li);
}

// Main Function: Reads your current location and updates what you see
function renderQuestion() {
    // 1. Clear out any previous choices inside the <ul> list
    answersList.innerHTML = "";
    
    // 2. Story Branching Logic
    if (currentState === "start") {
        storyText.textContent = "You stand at the entrance of the Lost Temple. Two pathways lie ahead.";
        nextButton.style.display = "none"; // Hide the generic next button during choices
        
        addAnswerButton("Go Left into the dark tunnel", "left_tunnel");
        addAnswerButton("Go Right toward the glittering light", "right_tunnel");
    } 
    
    else if (currentState === "left_tunnel") {
        storyText.textContent = "The tunnel is tiny. Suddenly, a giant ancient spider drops down!";
        
        addAnswerButton("Fight the spider with your torch", "spider_fight");
        addAnswerButton("Run back out to the entrance", "start"); // Diverges and loops back
    } 
    
    else if (currentState === "right_tunnel") {
        storyText.textContent = "You find an ancient wooden bridge over a deep chasm.";
        
        addAnswerButton("Cross the rickety bridge", "bridge_cross");
        addAnswerButton("Search the stone chest nearby", "chest_trap");
    } 
    
    else if (currentState === "spider_fight") {
        storyText.textContent = "You scare the spider away and discover a room full of gold. You Win!";
        nextButton.style.display = "block";
        nextButton.textContent = "Play Again";
    } 
    
    else if (currentState === "bridge_cross") {
        storyText.textContent = "The wooden planks snap and you fall! Game Over.";
        nextButton.style.display = "block";
        nextButton.textContent = "Try Again";
    } 
    
    else if (currentState === "chest_trap") {
        storyText.textContent = "The chest was an ancient trap! Poison spikes shoot out. Game Over.";
        nextButton.style.display = "block";
        nextButton.textContent = "Try Again";
    }
}

// Triggers when clicking the green standalone "Next/Reset" button
function nextQuestion() {
    // If the game is at any final ending, reset back to the beginning
    if (currentState === "spider_fight" || currentState === "bridge_cross" || currentState === "chest_trap") {
        currentState = "start";
        renderQuestion();
    }
}

// Start the game loop automatically when the browser finishes loading
window.onload = renderQuestion;