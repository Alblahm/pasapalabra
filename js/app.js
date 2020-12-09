
// Functions
// -----------------------------------------------------------------------------

function showDefinition(pos) {
	$("#js--hint").html(words[pos].hint);
	$("#js--definition").html(words[pos].definition);
	$(".circle .item").eq(words[pos].idNumber).addClass("item--active");
}

var remainingWords = 25;
var timerActive = 1;

function checkAnswer(pos) {
	timerActive = 1;
	var userAnswer = $("#js--user-answer").val().toLowerCase();
	if (userAnswer == ""){
		pasapalabra(count);
		return count;
	} else {
		if (userAnswer == words[pos].word.toLowerCase()) {
			words[pos].correct = true;
			$(".circle .item").eq(words[pos].idNumber).removeClass("item--active");
			$(".circle .item").eq(words[pos].idNumber).removeClass("item--pass");
			$(".circle .item").eq(words[pos].idNumber).removeClass("item--failure");
			$(".circle .item").eq(words[pos].idNumber).addClass("item--success");

		} else {
			words[pos].correct = false;
			$(".circle .item").eq(words[pos].idNumber).removeClass("item--active");
			$(".circle .item").eq(words[pos].idNumber).removeClass("item--pass");
			$(".circle .item").eq(words[pos].idNumber).removeClass("item--success");
			$(".circle .item").eq(words[pos].idNumber).addClass("item--failure");
		}
		remainingWords--;
		$("#js--score").html(remainingWords);
		return count++;
	}

}

function pasapalabra(pos) {
	$(".circle .item").eq(words[pos].idNumber).removeClass("item--active");
	$(".circle .item").eq(words[pos].idNumber).removeClass("item--success");
	$(".circle .item").eq(words[pos].idNumber).removeClass("item--failure");
	$(".circle .item").eq(words[pos].idNumber).addClass("item--pass");
	var w = words.splice(pos, 1)[0];
	words.push(w);
	timerActive = 1;

}

// Para comprobar sin pasar a la siguiente y parando el contador
function testAnswer(pos) {
	var userAnswer = $("#js--user-answer").val().toLowerCase();
	if (userAnswer != ""){
		if (userAnswer == words[pos].word.toLowerCase()) {
			words[pos].correct = true;
			$(".circle .item").eq(words[pos].idNumber).removeClass("item--pass");
			$(".circle .item").eq(words[pos].idNumber).removeClass("item--failure");
			$(".circle .item").eq(words[pos].idNumber).addClass("item--success");
		} else {
			words[pos].correct = false;
			var solCorr = userAnswer + " (" + words[pos].word.toLowerCase() +")";
			$("#js--user-answer").val(solCorr);
			$(".circle .item").eq(words[pos].idNumber).removeClass("item--pass");
			$(".circle .item").eq(words[pos].idNumber).removeClass("item--success");
			$(".circle .item").eq(words[pos].idNumber).addClass("item--failure");
		}
		$("#js--score").html(remainingWords);
		$("#js--definition").html(words[pos].definition);		
	} else {
		$(".circle .item").eq(words[pos].idNumber).removeClass("item--success");
		$(".circle .item").eq(words[pos].idNumber).removeClass("item--failure");
		$(".circle .item").eq(words[pos].idNumber).addClass("item--pass");
		$("#js--definition").html("");
	}
	timerActive = 0;

}


function continuePlaying() {
	if (count != 25) {
		$("#js--user-answer").val("");
		showDefinition(count);
	} else {
		endGame();
	}
}

var seconds;
var temp;

function countdown() {
	seconds = $("#js--timer").html();
	seconds = parseInt(seconds, 10);
	if (seconds == 1) {
		temp = $("#js--timer");
		temp.innerHTML = 0;
		endGame();
		return;
	}
	// Si el contador está activo
	if(timerActive == 1){
		seconds--;
	}
	temp = $("#js--timer");
	temp.html(seconds);
	timeoutMyOswego = setTimeout(countdown, 1000);
}

function endGame() {
	$("#js--question-controls").addClass("hidden");
	$("#js--pa-controls").removeClass("hidden");
	$("#js--end-title").html("Fin de partida!");
	$("#js--end-subtitle").html(showUserScore());
	$("#js--close").addClass("hidden")
}

function showUserScore() {
	var counter = 0;
	for (i = 0; i < words.length; i++) {
		if (words[i].correct == true) {
			counter++;
		}
	}
	return "Has conseguido un total de " + counter + " aciertos.";
}


// Main Program
// ----------------------------------------------------------------------------- */

$("#js--player").html(PlayerNames);

// New game
var count = 0; // Counter for answered words
$("#js--new-game").click(function() {
	$("#js--ng-controls").addClass("hidden");
	$("#js--question-controls").removeClass("hidden");
	$("#js--close").removeClass("hidden");
	showDefinition(count);
	countdown();
});

// Check the answer but do not continue
$("#js--check").click(function() {
	testAnswer(count);
});

// Send the answer
$("#js--send").click(function() {
	checkAnswer(count);
	continuePlaying();
});

// Key bindings for send the answer
$("#js--question-controls").keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == "13") {
		testAnswer(count);
		//continuePlaying();
	}
});

// Skip the word
$("#js--pasapalabra").click(function() {
	pasapalabra(count);
	continuePlaying();
});

// Key bindings for skip the word
$("#js--question-controls").keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == "32") {
		pasapalabra(count);
		continuePlaying();
	}
});

// Play again
$("#js--pa").click(function() {
	location.reload()
});

// End the game
$("#js--close").click(function() {
	endGame();
});
