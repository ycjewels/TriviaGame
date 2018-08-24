$(document).ready(function () {


    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Trivia</a></p>";
        $(".mainArea").html(startScreen);
    }

    initialScreen();


    $("body").on("click", ".start-button", function (event) {
        generateHTML();
        timerWrapper();

    });

    $("body").on("click", ".answer", function (event) {
        //answeredQuestion = true;
        selectedAnswer = $(this).text();
        if (selectedAnswer === correctAnswers[questionCounter]) {
            //alert("correct");

            clearInterval(theClock);
            generateWin();
        } else {
            //alert("wrong answer!");
            clearInterval(theClock);
            generateLoss();
        }
    }); 

    $("body").on("click", ".reset-button", function (event) {
        resetGame();
    }); 

}); 



function generateWin() {
    correctTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" +counter +
        "</span></p>" + "<p class='text-center'>Correct! The answer is: " +
        correctAnswers[questionCounter] +
        "</p>" + imageArray[questionCounter];
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 3000);
}

function generateLoss() {
    incorrectTally++;
    gameHTML =
        "<p class='text-center timer-p'> Time Remaining: <span class='timer'>" + counter +
        "</span> </p>" + "<p class='text-center'> Wrong! The correct answer is: " 
        + correctAnswers[questionCounter] + "</p>";
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 3000);
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
    $(".mainArea").html(gameHTML);
}

function wait() {
    if (questionCounter < 7) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timerWrapper();
    } else {
        finalScreen();
    }
}

function timerWrapper() {
    theClock = setInterval(thirtySeconds, 1000);

    function thirtySeconds() {
        if (counter === 0) {
            clearInterval(theClock);
            generateLossDueToTimeOut();
        }
        if (counter > 0) {
            counter--;
        }
        $(".timer").html(counter);
    }
}

function finalScreen() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        counter +
        "</span> </p>" + "<p class='text-center'> All done, here's how you did!" + "</p>" +
        "<p class='summary-correct'> Correct Answers: " +
        correctTally + "</p>" + "<p> Wrong Answers: " +
        incorrectTally +
        "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" +
        "<p class='text-center reset-button-container'> <a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset Trivia!</a></p>";
    $(".mainArea").html(gameHTML);
}

function resetGame() {
    questionCounter = 0;
    correctTally = 0;
    incorrectTally = 0;
    unansweredTally = 0;
    counter = 30;
    generateHTML();
    timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["What is the first song you hear in the movie?",
    "What is Timon and Pumbaa's very famous phrase?",
    "'It means no ____ for the rest of your days.'",
    "Which character tries to kill young Simba?",
    "Simba said 'I ___ the face of danger.'",
    "Who is Scar?",
    "'No, fool we're gonna kill him and ___ too.'?",
    "How many Golden Globe awards did 'The Lion King' win?"
];
var answerArray = [
    ["The circle of life", "Be prepared", "Hakuna Mata", "Jungle King"],
    ["Remember who you are", "There's one in every family,sire.", "Hakuna Matata", "You got to put your behind in your past."],
    ["Troubles", "Problems", "Hakuna", "Worries"],
    ["Scar", "Rafiki", "Zalu", "Nala"],
    ["run away from", "stare at", "hate", "laugh in"],
    ["Simba's brother", "Simba's dad", "Simba's uncle", "Simba's cousin"],
    ["Nala", "You", "Mufasa", "Simba"],
    ["5", "2", "3", "7"]
];
var imageArray = ["<img class='center-block img-right' url='../images/circleoflife.png'>",
    "<img class='center-block img-right' url='../images/Hakuna.jpg'>",
    "<img url='center-block img-right' url='../images/noworries.jpg'>",
    "<img class='center-block img-right' src='../images/scar.jpg'>",
    "<img class='center-block img-right' src='../images/laugh.jpg'>",
    "<img class='center-block img-right' src='../images/uncle.jpg'>",
    "<img class='center-block img-right' src='../images/simba.jpg'>",
    "<img class='center-block img-right' src='../images/globe.jpg'>"
];
var correctAnswers = ["A. The circle of life", "C. Hakuna Matata",
    "D. Worries", "A. Scar", "D. laugh in", "C. Simba's uncle", "D. Simba", "C.3"
];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;