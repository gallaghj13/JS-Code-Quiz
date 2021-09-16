var timeCounter = document.querySelector(".timer-count");
var secondsLeft = 45;
var startButton = document.getElementById("start-button");
var answerButton = document.getElementById("button");
startButton.addEventListener("click", startGame);
answerButton.addEventListener("click", nextQuestion);

function startGame() {
    
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeCounter.textContent = secondsLeft;
      
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            return;
            
            
          }
      
        }, 1000);
      
      
      
    

    console.log("started");
}

function nextQuestion() {

}

function selectAnswer() {

}

const questions = [
    {
        question: "Question 1",
        answers: "B",
    },

    {
        question: "Question 2",
        answer: "C",
    },

    {
        question: "Question 3",
        answer: "A",
    },

    {
        question: "Question 4",
        answer: "A",
    },

    {
        question: "Question 5",
        answer: "D"
    }
];


