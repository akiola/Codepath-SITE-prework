//Global variables 

var pattern = []; //will be filled when the game starts
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var numberOfBtns = 6;
var lives = 3;



//Global Constants 
const clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;


function startGame(){
  
  //populating the pattern array.we need to set the upper bound of the random numbers to 6
  for (let i = 0; i < 8; i++){
    pattern[i] = Math.round(Math.random() * 6);
  }
  
  //initialize game variables 
  progress = 0;
  gamePlaying = true;
  
  //swap start and stop buttons 
  document.getElementById("StartBtn").classList.add("hidden");
  document.getElementById("StopBtn").classList.remove("hidden");
  playClueSequence();
  
}

function stopGame(){
  
  //setting the gameplay to false
  gamePlaying = false;
  
  document.getElementById("StartBtn").classList.remove("hidden");
  document.getElementById("StopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 600,
  6: 400
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if (gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function updateLives(){
  if (loseGame() || stopGame()){
    lives = 3;
  }
}

function loseGame(){
  //if the user exhausts guesses call the stop game function
  stopGame();
  //printing the statement in the dialogue box using the alert function
  alert("Game Over. You lost")
}

function winGame(){
  //if the user wins, we must still end the game
  stopGame();
  alert("Yay. You won");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if (!gamePlaying){
    return;
  }
  
  //write game logic 
  //consider if the guess is the same as the clue
  //indexing the generic pattern array 
  if (pattern[guessCounter] == btn){
    //if the button pressed is the same as the clue, we need to 
    //check if the pattern is still indexable
    if (guessCounter == progress){
      //checking if progress is within the array length
      if (progress == pattern.length - 1){
        //this means the user passed all the test so we call the win game function
        winGame();
        return;
        
      }else{
        //increment progress and call playsequence
        lives--;
        progress++;
        playClueSequence();
        
        
      }
      
    }else{
      
      guessCounter++;
    }
    
  }else{
    //game over
    if (lives <= 0){
    loseGame();
      lives = 3;
    }
  }
}


// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

