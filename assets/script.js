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
var secondsLeft = 15;
var numberOfCorrect = 0;
var correct = localStorage.getItem("correct");
var timeleft = localStorage.getItem("time-leftover");
var score = (correct * timeleft);


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
})

 
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
    answerChoiceA.textContent = displayedQ.answerA;
    answerChoiceB.textContent = displayedQ.answerB;
    answerChoiceC.textContent = displayedQ.answerC;
    answerChoiceD.textContent = displayedQ.answerD;
};


function verifyAnswer(answer) {
    if (answer == questionArray[currentQuestion].correct){
        console.log("correct");
        // document.getElementById().style.backgroundColor = "green";
        numberOfCorrect++;
        localStorage.setItem("correct", numberOfCorrect);
        console.log(numberOfCorrect);
    } else {
        console.log("incorrect");
        // document.getElementById().style.backgroundColor = "red";
    };
    if (currentQuestion < questionArray.length - 1){
        currentQuestion++;
        displayQuestion();
    } else {
        totalScore();
    }
  
    // need to go to a score screen with a way to register score and initials
};

function totalScore() {
    quizBody.style.display = "none";
    timer.style.display = "none";
    endTime.style.display = "block";
    endTime.textContent = timer.textContent;
    localStorage.setItem("time-leftover", endTime.textContent);
    scoreText.style.display = "block";
    retakeButton.style.display = "block";
    userScore.textContent = localStorage.getItem("correct");
    console.log(secondsLeft);
    console.log(score);
};

function submitScore() {
    highscore.style.display = "block";
}

function retakeQuiz() {
    window.location.reload(false);
};


