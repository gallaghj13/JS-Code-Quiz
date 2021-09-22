// Selected Elements
var timer = document.getElementById("timer-count");
var quizContainer = document.getElementById("container");
var start = document.getElementById("start-button");
var quizBody = document.getElementById("quiz");
var questions = document.getElementById("question");
var answers = document.querySelector("#answers");
var startText = document.getElementById("start-prompt");
var scoreText = document.getElementById("score");
var retakeButton = document.getElementById("retake-btn");
var submitButton = document.getElementById("submit-btn");
var endTime = document.getElementById("time-left");
var answerChoiceA = document.getElementById("A");
var answerChoiceB = document.getElementById("B");
var answerChoiceC = document.getElementById("C");
var answerChoiceD = document.getElementById("D");
var userScore = document.getElementById("user-score");
var highscore = document.getElementById("highscore-page");
var playerName = document.getElementById("playerName");
var highScoreBtn = document.getElementById("highscore-button");
var returnBtn = document.getElementById("return-button");

// Questions
const questionArray = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        answerA: "script",            
        answerB: "javascript",
        answerC: "js",
        answerD: "scripty",
        correct: "A"
    },
    {
        question: "Where is the right place to link a Javascript file?",
        answerA: "head section",            
        answerB: "any section",
        answerC: "Don't even need to link",
        answerD: "body section",
        correct: "D"
    },
    {
        question: "Who created Javascript?",
        answerA: "Bill Gates",            
        answerB: "Brendan Eich",
        answerC: "Steve Jobs",
        answerD: "James Gosling",
        correct: "B"
    },
    {
        question: "What type of punctuation is used around an object?",
        answerA: "curly brackets",            
        answerB: "square brackets",
        answerC: "semi-colon",
        answerD: "parentheses",
        correct: "A"
    },
    {
        question: "Which dialog box displays a message and a data entry field?",
        answerA: "Msg()",            
        answerB: "Alert()",
        answerC: "Prompt()",
        answerD: "Confirm()",
        correct: "C"
    },
];

// Other Variables
var lastQuestion = questionArray.length - 1;
var currentQuestion = 0;
var timeCounter = document.getElementById("timer-count");
var secondsLeft = 30;
var numberOfCorrect = 0;
var correct = localStorage.getItem("correct");
var timeleft = localStorage.getItem("time-leftover");
var score = correct * timeleft;


start.addEventListener("click", startQuiz);
retakeButton.addEventListener("click", retakeQuiz);

answers.addEventListener("click", function(event){
    var answerPicked = event.target;

    if (answerPicked.matches("button")) {
        var answer = answerPicked.getAttribute("data-name");
    };
    verifyAnswer(answer);
});

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    submitScore();
});


highScoreBtn.addEventListener("click", viewScore);

returnBtn.addEventListener("click", retakeQuiz);

 
function startQuiz(){

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeCounter.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          totalScore(); 
          }
        if(currentQuestion == questionArray.length - 1) {
            clearInterval(timerInterval);
        }
    
      }, 1000);
    
    startText.style.display = "none";
    displayQuestion();
    quizBody.style.display = "block";
};

function displayQuestion() {
   
    var displayedQ = questionArray[currentQuestion];
    questions.textContent = displayedQ.question;
    answerChoiceA.textContent = "A. " + displayedQ.answerA;
    answerChoiceB.textContent = "B. " + displayedQ.answerB;
    answerChoiceC.textContent = "C. " + displayedQ.answerC;
    answerChoiceD.textContent = "D. " + displayedQ.answerD;
};


function verifyAnswer(answer) {
    if (answer == questionArray[currentQuestion].correct){
        numberOfCorrect++;
        var greenCorrect = document.createElement("h2");
        greenCorrect.textContent = "Correct";
        greenCorrect.style.color = "green";
        var answersList = document.getElementById("answers");
        answersList.appendChild(greenCorrect);
        localStorage.setItem("correct", numberOfCorrect);
    } else {
        var redWrong = document.createElement("h2");
        redWrong.textContent = "Incorrect";
        redWrong.style.color = "red";
        var answersList = document.getElementById("answers");
        answersList.appendChild(redWrong);
    };
    if (currentQuestion < questionArray.length - 1){
        currentQuestion++;
        displayQuestion();
    } else {
        totalScore();
    }
  

};

function totalScore() {
    quizBody.style.display = "none";
    timer.style.display = "none";
    endTime.style.display = "block";
    endTime.textContent = timer.textContent;
    localStorage.setItem("time-leftover", endTime.textContent);
    scoreText.style.display = "block";
    retakeButton.style.display = "block";
    submitButton.style.display = "block";
    userScore.textContent = score;
    console.log(secondsLeft);
    console.log(score);
};

function printScore() {
    var highScore = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highScore.sort(function(a, b){
        return b.score - a.score;
    })
    console.log(highScore)
    highScore.forEach(function(score){
        var listItem = document.createElement("li");
        listItem.textContent = "Name: " + score.username + " Score: " + score.score;
        var highscoreList = document.getElementById("highscore-list");
        highscoreList.appendChild(listItem);
    })
};

function submitScore() {
    var newName = playerName.value.trim();
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    var newScore = { score: score, username: newName};

    highscores.push(newScore);

    endTime.style.display = "none";
    scoreText.style.display = "none";
    retakeButton.style.display = "block";
    highscore.style.display = "block";
    localStorage.setItem("highscores", JSON.stringify(highscores));
    localStorage.getItem("player-name");
    printScore();
};

function viewScore () {
    startText.style.display = "none";
    start.style.display = "none";
    quizBody.style.display = "none";
    timer.style.display = "none";
    highscore.style.display = "block";
    returnBtn.style.display = "block";

    printScore();
};

function retakeQuiz() {
    window.location.reload(false);
};


