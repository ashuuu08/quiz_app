const questions = [
    {
        question:"what is java?",
        answer:[
            {text:"framwork", correct:"false"},
            {text:"Library", correct:"false"},
            {text:"Programing language", correct:"true"},
            {text:"None of these", correct:"false"},
        ]
    },
    {
        question:"what is java?",
        answer:[
            {text:"Fram work", correct:"false"},
            {text:"Library", correct:"false"},
            {text:"Programing language", correct:"true"},
            {text:"None of these", correct:"false"},
        ]
    },
    {
        question:"what is java?",
        answer:[
            {text:"framwork", correct:"false"},
            {text:"Library", correct:"false"},
            {text:"Programing language", correct:"true"},
            {text:"None of these", correct:"false"},
        ]
    },
    {
        question:"what is java?",
        answer:[
            {text:"framwork", correct:"false"},
            {text:"Library", correct:"false"},
            {text:"Programing language", correct:"true"},
            {text:"None of these", correct:"false"},
        ]
    },
    {
        question:"what is java?",
        answer:[
            {text:"framwork", correct:"false"},
            {text:"Library", correct:"false"},
            {text:"Programing language", correct:"true"},
            {text:"None of these", correct:"false"},
        ]
    },
    {
        question:"what is java?",
        answer:[
            {text:"framwork", correct:"false"},
            {text:"Library", correct:"false"},
            {text:"Programing language", correct:"true"},
            {text:"None of these", correct:"false"},
        ]
    },
    {
        question:"what is java?",
        answer:[
            {text:"framwork", correct:"false"},
            {text:"Library", correct:"false"},
            {text:"Programing language", correct:"true"},
            {text:"None of these", correct:"false"},
        ]
    },
];

const QuestionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let Score=0;

function startQuiz(){
    currentQuestionIndex=0;
    Score=0;
    nextButton.innerHTML=("Next");
    showQuestion();
}
function showQuestion(){
    reSetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    QuestionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answer.forEach(answerr => {
     
     const button = document.createElement("button")
     button.innerHTML=answerr.text
     button.classList.add("btn")
     answerButton.appendChild(button)
     if (answerr.correct) {
        button.dataset.correct=answerr.correct
     }
     button.addEventListener("click",selectAnswer)
    })

}
 function reSetState() {
    nextButton.style.display="none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
 }
  function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        Score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if (button.dataset.correct==="true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    })
  nextButton.style.display = "block";
  }

  function showScore(){
  reSetState();
  QuestionElement.classList.add("score");
  QuestionElement.innerHTML = `You scored ${Score} out of ${questions.length}`
  nextButton.innerHTML = "Play again";
  nextButton.style.display ="block";
  }

  function handleNextbutton(){
    currentQuestionIndex++;
     if (currentQuestionIndex<questions.length) {
        showQuestion();
     } else {
        showScore();
     }
  }

  nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex<questions.length) {
        handleNextbutton();
    }else{
        startQuiz()
    }
  })

  startQuiz()

