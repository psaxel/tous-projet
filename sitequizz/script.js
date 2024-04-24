const questions = [
    {
        question: "1+1",
        answer: [
            { text: "2", correct : true},
            { text: "6", incorrect : false},
            { text: "3", incorrect : false},
            { text: "7", incorrect : false},
        ]
    },
    {
        question: "2+2?",
        answer: [
            { text: "4", incorrect : false},
            { text: "8", incorrect : false},
            { text: "poisson", correct : true},
            { text: "0", incorrect : false},
        ]
    },
    {
        question: "pourquoi continuer a repondre a ses question inutile?",
        answer: [
            {text: "elles sont cool", incorrect : false},
            {text: "elles sont cool", incorrect : false},
            {text: "je sais pas je vais arreter", correct : true},
            {text: "elles sont cool", incorrect : false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
const secretButton = document.getElementById("secret-btn")

let currentQuestionindex = 0
let score = 0

function startQuiz(){
    currentQuestionindex = 0
    score = 0
    nextButton.innerHTML = "next";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion = questions [currentQuestionindex];
    let questionNo = currentQuestionindex + 1;
    questionElement.innerHTML = questionNo + ", " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true"
    if (isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
});
nextButton.style.display = "block";
}

function showScore(){
    resetState()
    questionElement.innerHTML = `Ton score est de ${score} sur ${questions.length}!`;
    nextButton.innerHTML = "Rejouer"
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionindex++;
    if(currentQuestionindex < questions.length){
        showQuestion();
    }else{
        showScore()
    }
};

nextButton.addEventListener("click", ()=>{
    if(currentQuestionindex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
} )



startQuiz();