

var questionnaire = document.getElementById("questionnaire");

var questions = ["what is a dog", "what is not a dog", "is a dog?", "can a dog be for what to another as I am for like?"];
var answers = ["yes", "Nic Cage", "yeah", "what?"];
var wrongAnswers = ["wrong11", "wrong12", "wrong13", "wrong21", "wrong22", "wrong23", "wrong31", "wrong32", "wrong33"];


function timeOut(){
    alert("Out of time!")
}



var timeLeft = 2;
var elem = document.getElementById('timer');

var timerId;

function startTimer(){
  timerId = setInterval(countdown, 1000);
}

function countdown(){
  if (timeLeft == 0) {
    clearTimeout(timerId);
    timeOut();
  } else {
    timeLeft--;
    elem.innerHTML = timeLeft + ' seconds remaining';
  }
}

$("#btn").click(startTimer);




//Trivia game with 4 questions about something
//Every question will be on screen at once, but hidden until start button is pressed
//game does not start until the start button is pressed

//when start is pressed
    //start the timer
    //unhide the questions and answers

//game ends when either the timer runs out, or the "finish" button is pressed
//when game ends, show the amount of answers the user got right