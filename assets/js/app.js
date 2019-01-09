$(document).ready(function() {

var correct = 0;
var wrong = 0;
var noAns = 0;
var intervalId; 

time = 120;

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

$('.row').hide();

function startGame() {
  $('#begin').click(function(){
    $('.row').show();
  });
}

setTimeout (twoMin, 1000 * 120);

function twoMin() {
    timeConverter();
    time--;
    $('#timer').text("02:00");
}

twoMin();
startGame();
});