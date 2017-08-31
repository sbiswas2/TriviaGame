// Window onload function?  see stopwatch.js file
$("#question").hide();
$("#answer").hide();

var number = 30;
var interValid;

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

//  Execute the run function.
//	run();


// Reset function