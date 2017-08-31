// Window onload function?  see stopwatch.js file
$("#question").hide();
$("#answer").hide();

var number = 30;
var interValid;
var correctGuess = 0;
var incorrectGuess = 0;

// Start button
$("#start").click(function() {
	run()
	$("#question").show();
	$("#answer").show();
});

// Run function
function run() {
  intervalId = setInterval(decrement, 1000);
}
//  Decrement function
function decrement() {
  number--;
  $("#time").html("<h2> Time Remaining: " + number + " Seconds</h2>");
  if (number === 0) {
    stop();
  }
}
//  Stop function
function stop() {
  clearInterval(intervalId);
}


$("#option1").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

$("#option2").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

$("#option3").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

$("#option4").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

//  Execute the run function.
//	run();

// Done button

// Reset function