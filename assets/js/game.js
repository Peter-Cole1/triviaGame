

var questionnaire = document.getElementById("questionnaire");






function timeOut(){
    alert("Out of time!");
  
}



var timeLeft = 31;
var elem = document.getElementById('timer');
var example = null;

var timerId;

function startTimer(){
  timerId = setInterval(countdown, 1000);
}

function countdown(){
  if (timeLeft == 0) {
    clearTimeout(timerId);
    //true or false
    // 1 or 0

    var count = 0;
    count += getRadioGroupValue("question1Options");
    count += getRadioGroupValue("question2Options");
    count += getRadioGroupValue("question3Options");
    count += getRadioGroupValue("question4Options");
    console.log(count);
    timeOut();
    alert("You got "+count+" questions correct!");
  } else {
    timeLeft--;
    elem.innerHTML = timeLeft + ' seconds remaining';
  }
}

function getRadioGroupValue(nameAtt){
  var value = $("input[name='" + nameAtt + "']:checked").val();
  if(value == "true"){
    return 1;
  } else {
    return 0;
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