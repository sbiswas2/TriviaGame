// Hide everything to begin
$("#question1").hide();
$("#question2").hide();
$("#question3").hide();
$("#question4").hide();
$("#question5").hide();
$("#answer1").hide();
$("#answer2").hide();
$("#answer3").hide();
$("#answer4").hide();
$("#answer5").hide();
$("#finish").hide();
$("#reset").hide();

var number = 30;
var interValid;
var correctGuess = 0;
var incorrectGuess = 0;

// Start button
$("#start").click(function() {
	run()
	$("#question1").show();
	$("#question2").show();
	$("#question3").show();
	$("#question4").show();
	$("#question5").show();
	$("#answer1").show();
	$("#answer2").show();
	$("#answer3").show();
	$("#answer4").show();
	$("#answer5").show();
	$("#finish").show();
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
    $("#question1").hide();
	$("#question2").hide();
	$("#question3").hide();
	$("#question4").hide();
	$("#question5").hide();
	$("#answer1").hide();
	$("#answer2").hide();
	$("#answer3").hide();
	$("#answer4").hide();
	$("#answer5").hide();
	$("#finish").hide();
	$("#result").html("<h2> Correct Guesses: " + correctGuess + " Incorrect Guesses: " + incorrectGuess + " </h2>");
	$("#reset").show();
  }
}
//  Stop function
function stop() {
  clearInterval(intervalId);
}

// Answer buttons
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

$("#option5").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

$("#option6").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

$("#option7").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

$("#option8").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

$("#option9").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

$("#option10").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

$("#option11").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

$("#option12").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

$("#option13").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

$("#option14").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

$("#option15").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

$("#option16").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

$("#option17").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

$("#option18").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

$("#option19").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

$("#option20").click(function() {
	var answer = ($(this).attr("value"));
	if(answer === "correct"){
		correctGuess++;
		console.log(correctGuess);
	} else {
		incorrectGuess--;
		console.log(incorrectGuess);
	}
});

// Submit button
$("#submit").click(function() {
	stop();
	$("#question1").hide();
	$("#question2").hide();
	$("#question3").hide();
	$("#question4").hide();
	$("#question5").hide();
	$("#answer1").hide();
	$("#answer2").hide();
	$("#answer3").hide();
	$("#answer4").hide();
	$("#answer5").hide();
	$("#finish").hide();
	$("#result").html("<h2> Correct Guesses: " + correctGuess + " Incorrect Guesses: " + incorrectGuess + " </h2>");
	$("#reset").show();
});

// Reset function
$("#restart").click(function() {
	number = 30;
	interValid;
	correctGuess = 0;
	incorrectGuess = 0;
	run()
	$("#question1").show();
	$("#question2").show();
	$("#question3").show();
	$("#question4").show();
	$("#question5").show();
	$("#answer1").show();
	$("#answer2").show();
	$("#answer3").show();
	$("#answer4").show();
	$("#answer5").show();
	$("#result").empty();
	$("#finish").show();
	$("#reset").hide();
});
