// Selected Elements
const timer = document.getElementById("timer-count");
const quizContainer = document.getElementById("container");
const start = document.getElementById("start-button");
const quizBody = document.getElementById("quiz");
const questions = document.getElementById("question");
const answers = document.getElementById("answers");
const answerChoiceA = document.getElementById("A");
const answerChoiceB = document.getElementById("B");
const answerChoiceC = document.getElementById("C");
const answerChoiceD = document.getElementById("D");

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
        question: "Question 4",
        answerA: "A",            
        answerB: "B",
        answerC: "C",
        answerD: "D",
        correct: "A"
    },
    {
        question: "Question 5",
        answerA: "A",            
        answerB: "B",
        answerC: "C",
        answerD: "D",
        correct: "C"
    },
];

// Other Variables
var lastQuestion = questionArray.length - 1;
var currentQuestion = 0;
var timeCounter = document.getElementById("timer-count");
var secondsLeft = 45;

start.addEventListener("click", startQuiz());
 
function startQuiz(){

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeCounter.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
        //   need to move to quiz over screen
          return;
          }
    
      }, 1000);
    start.style.display = "none";
    displayQuestion();
    quizBody.style.display = "block";
};

function displayQuestion() {
    var displayedQ = questionArray[currentQuestion];
    questions.innerHTML = "<p>" + displayedQ.question + "</p>";
    answerChoiceA.innerHTML = displayedQ.answerA;
    answerChoiceB.innerHTML = displayedQ.answerB;
    answerChoiceC.innerHTML = displayedQ.answerC;
    answerChoiceD.innerHTML = displayedQ.answerD;
};

function verifyAnswer(answer) {
    if (answer == questionArray[currentQuestion].correct){
        console.log("correct");
        // document.getElementById(currentQuestion).style.backgroundColor = "green";
    } else {
        console.log("incorrect");
        // document.getElementById(currentQuestion).style.backgroundColor = "red";
    }
    if (currentQuestion < questionArray.length - 1){
        currentQuestion++;
        displayQuestion();
    }

}

// start.style.display = "none";
// displayQuestion();
// quizBody.style.display = "block";
