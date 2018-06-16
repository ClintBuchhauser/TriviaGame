// define clock and score variables
var intervalID;
var clockRunning = false;
var time = 60;
var correctScore = 0;
var incorrectScore = 0;

// start and submit buttons armed, questions hidden
window.onload = function () {
    $("#start").on("click", countdown);
    $("#submit").on("click", submitScore);
    $("#questionBox").hide();
    $("#results").hide();
};

// start the clock, reveal questions
function countdown() {
    if (!clockRunning) {
        $("#questionBox").show();
        $("#start").hide();
        clockRunning = true;
        intervalId = setInterval(counter, 1000);
    }
}

// tick down the seconds, end game at 0 seconds
function counter() {
    time--;
    $("#clock").html(time);
    if (time == 0) {
        submitScore();
    }
}

// stop timer, hide questions, hide clock, calculate score, display score
function submitScore() {
    clearInterval(intervalId);
    clockRunning = false;
    $("#questionBox").hide();
    $("#results").show();
    $("#clock").hide();
    $("#timeRemain").hide();

    let answer1 = $('#a1 :checked').val();
    if (answer1 == "c") {
        correctScore++
    } else if (answer1 !== "c") {
        incorrectScore++
    }

    let answer2 = $('#a2 :checked').val();
    if (answer2 == "a") {
        correctScore++
    } else if (answer2 !== "a") {
        incorrectScore++
    }

    let answer3 = $('#a3 :checked').val();
    if (answer3 == "d") {
        correctScore++
    } else if (answer3 !== "d") {
        incorrectScore++
    }

    let answer4 = $('#a4 :checked').val();
    if (answer4 == "b") {
        correctScore++
    } else if (answer4 !== "b") {
        incorrectScore++
    }

    let answer5 = $('#a5 :checked').val();
    if (answer5 == "d") {
        correctScore++
    } else if (answer5 !== "d") {
        incorrectScore++
    }

    let answer6 = $('#a6 :checked').val();
    if (answer6 == "c") {
        correctScore++
    } else if (answer6 !== "c") {
        incorrectScore++
    }

    $("#correctScore").html("Correct Answers: " + correctScore);
    $("#incorrectScore").html("Missed Answers: " + incorrectScore);

    // show quote based on score
    if (correctScore === 6) {
        $("#quote").html("You're a Pokémon Master!");
    } else if (correctScore === 5) {
        $("#quote").html("Keep training!");
    } else if (correctScore === 4) {
        $("#quote").html("Keep training!");
    } else {
        $("#quote").html("You blacked out!");
    }

}