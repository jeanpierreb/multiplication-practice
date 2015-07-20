function multiply(a, b) {
  return a * b;
}

function random(base) {
  return Math.floor(Math.random() * (base || 10));
}

var qa = [],
  start = true,
  counter = 0;

function askQuestion() {

  var a   = this.random();
  var b   = this.random();

  return [a, b, a * b];
}

$(function () {
  var box = $('#box');
  var start = $('#start-button');
  var stop = $('#stop-button');
  var answer = $('#answer');
  var correct;

  function display(arg) {
    box.html(arg);
  }

  start.on('click', function (e) {
    e.preventDefault();
    var problem = askQuestion();
    correct = problem[2];
    display(problem[0] + 'x' + problem[1]);
  });

  stop.on('click', function () {
    display('Stop Button Clicked');
  });

  answer.on('keypress', function () {

    var res = parseInt(answer.val(), 10);

    if (res === correct) { console.log('you got it right!'); }

  });

});