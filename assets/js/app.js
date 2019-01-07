$(document).ready(function() {

var triviaQuest = [

    {
        questions: "how many muscles do you have in total in all your fingers combined?",
        answers: ["none", "ten", "twenty", "twenty-two"],
        values: [true, false, false, false],
    },

    {
        questions: "how many toes does a two toed sloth have?",
        answers: ["none", "two or four", "six or eight", "ten"],
        values: [false, false, true, false],
    },

    {
        questions: "how many spaces are on a standard monopoly board?",
        answers: ["twenty", "forty", "sixty", "eighty"],
        values: [false, true, false, false],
    },

    {
        questions: "Which of these species are the most murderous mammals?",
        answers: ["elk", "meerkats", "dogs", "chimpanzees"],
        values: [false, true, false, false],
    },

    {
        questions: "how many dimples are there on a regular golf ball?",
        answers: ["337", "418", "336", "294"],
        values: [false, false, true, false],
    },
]

var correct = 0;
var wrong = 0;
var noAns = 0;

var time = 120; 
var timeCounter;
function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
}

function twoMin(){
    timeCounter = setInterval (count, 1000);
    timeConverter();
    time--;
    $('#timer').text("02:00");
}

function quizQuestions() {
    var quiz = [];
    var answers;

    for (var i=0; i < questions.length; i++) {
        answer = [];

    }
}

});