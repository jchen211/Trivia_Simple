$(document).ready(function() {

var correct = 0;
var wrong = 0;
var noAns = 0;
var intervalId; 

time = 120;

$('.questionCont').hide();
$('#submit').hide();
$('#results').hide();

function startGame() {
  $('#begin').click(function(){
    $('.questionCont').show();
    $('#submit').show();
    $('.start').hide();
  });
  decrement();
  $('#timer').text("02:00");
}

intervalId = setInterval(decrement, 1000);
function decrement() {  
  var converted = timeConverter(time);
  time--;
  $('#timer').text(converted);

  if (time === 0) {
    clearInterval(intervalId);
    $('.questionCont').hide();
    $('#submit').hide();
    showResults();
    $('#results').show();
  }
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
  });
}

function showResults() {
  clearInterval(intervalId);
  
  if ($('input:checked').val(correct)) {
    correct++;
  }

  else if ($('input:checked').val(incorrect)) {
    wrong++;
  }
  
  $('#results').show();
  $('#right').text(correct + " correct");
  $('#notRight').text(wrong + " wrong");

}

startGame();
submitQuest();
});