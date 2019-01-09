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
  $('#done').click(function() {
    $('.questionCont').hide();
    $('#submit').hide();
    showResults();
  });
}

function showResults() {
  clearInterval(intervalId);
  
  if ($('input[name=choice1]:checked').val() === 'correct') {  
    correct++;
  } else if ($('input[name=choice1]:checked').val() === 'incorrect') {
    wrong++;
  } else {
    noAns++;
  }

  if ($('input[name=choice2]:checked').val() === 'correct') {  
    correct++;
  } else if ($('input[name=choice2]:checked').val() === 'incorrect') {
    wrong++;
  } else {
    noAns++;
  }

  if ($('input[name=choice3]:checked').val() === 'correct') {  
    correct++;
  } else if ($('input[name=choice3]:checked').val() === 'incorrect') {
    wrong++;
  } else {
    noAns++;
  }

  if ($('input[name=choice4]:checked').val() === 'correct') {  
    correct++;
  } else if ($('input[name=choice4]:checked').val() === 'incorrect') {
    wrong++;
  } else {
    noAns++;
  }

  if ($('input[name=choice5]:checked').val() === 'correct') {  
    correct++;
  } else if ($('input[name=choice5]:checked').val() === 'incorrect') {
    wrong++;
  } else {
    noAns++;
  }

  if ($('input[name=choice6]:checked').val() === 'correct') {  
    correct++;
  } else if ($('input[name=choice6]:checked').val() === 'incorrect') {
    wrong++;
  } else {
    noAns++;
  }

  if ($('input[name=choice7]:checked').val() === 'correct') {  
    correct++;
  } else if ($('input[name=choice7]:checked').val() === 'incorrect') {
    wrong++;
  } else {
    noAns++;
  }

  if ($('input[name=choice8]:checked').val() === 'correct') {  
    correct++;
  } else if ($('input[name=choice8]:checked').val() === 'incorrect') {
    wrong++;
  } else {
    noAns++;
  }

  if ($('input[name=choice9]:checked').val() === 'correct') {  
    correct++;
  } else if ($('input[name=choice9]:checked').val() === 'incorrect') {
    wrong++;
  } else {
    noAns++;
  }

  if ($('input[name=choice0]:checked').val() === 'correct') {  
    correct++;
  } else if ($('input[name=choice0]:checked').val() === 'incorrect') {
    wrong++;
  } else {
    noAns++;
  }

  $('#results').show();
  $('#right').text(correct + " correct");
  $('#notRight').text(wrong + " wrong");
  $('#blankAns').text(noAns + " no answer");

}

function reset() {
$('#resetQuiz').click(function() {
  $('.questionCont').show();
  $('#submit').show();

  decrement();
  $('#timer').text("02:00");
  $('#results').hide();
  wrong = 0;
  correct = 0;
  noAns = 0;

});
}

startGame();
submitQuest();
reset();
});