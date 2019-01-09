$(document).ready(function() {

var correct = 0;
var wrong = 0;
var noAns = 0;
var intervalId; 

time = 120;

$('.questionCont').hide();
$('#submit').hide();
$('#results').hide();

setTimeout (twoMin, 1000 * 120);

function twoMin(){
  if (time === 0) {
    $('#results').show();
    clearInterval(intervalId);
  }
}

function startGame() {
  $('#begin').click(function(){
    $('.questionCont').show();
    $('#submit').show();
    $('.start').hide();
  
  intervalId = setInterval(count, 1000);
  $('#timer').text("2:00")

  twoMin();

  });
}

function count() {
   var converted = timeConverter(time);
    time--;
    $('#timer').text(converted);
}
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



function submitQuest () {
  $('#done').click(function(){
    $('.questionCont').hide();
    $('#submit').hide();
    showResults();
    clearInterval(intervalId);
  });
}

function showResults() {
  if ($('#questionCont').val() === 'correct') {
    correct++;
  } else  {
    wrong++;
  }
  $('#results').show();
}

startGame();
submitQuest();
});