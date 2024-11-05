const questions = [
    {
        question: "In web design, what does CSS stand for?",
        options: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet", "Cascading Style Sheet"],
        answer: 3
    },
    {
        question: "Which CSS property controls text size?",
        options: ["text-style", "text-size", "font-size", "font-style"],
        answer: 2
    },
    {
        question: "Which CSS property is used to change the background color?",
        options: ["color", "background-color", "bgcolor", "bg-color"],
        answer: 1
    },
    {
        question: "How do you make text bold in CSS?",
        options: ["font-weight: bold;", "font-bold: yes;", "text-style: bold;", "font: bold;"],
        answer: 0
    },
    {
        question: "How do you select an element with the class name 'example'?",
        options: ["#example", ".example", "example", "*example"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionEl = document.getElementById("question");
    const options = document.querySelectorAll(".option");
    const questionNumber = document.getElementById("question-number");
    const progress = document.getElementById("progress");

    questionEl.innerText = questions[currentQuestion].question;
    options.forEach((option, index) => {
        option.innerText = questions[currentQuestion].options[index];
        option.classList.remove("correct", "wrong");
    });
    questionNumber.innerText = currentQuestion + 1;
    progress.style.width = ((currentQuestion + 1) / questions.length) * 100 + '%';
    document.getElementById("next-btn").style.display = "none";
}

function selectAnswer(selectedIndex) {
    const options = document.querySelectorAll(".option");
    const correctAnswer = questions[currentQuestion].answer;

    if (selectedIndex === correctAnswer) {
        options[selectedIndex].classList.add("correct");
        score++;
        document.getElementById("score").innerText = score;
    } else {
        options[selectedIndex].classList.add("wrong");
        options[correctAnswer].classList.add("correct");
    }
    document.getElementById("next-btn").style.display = "inline";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz finished! Your score: " + score);
       
        currentQuestion = 0;
        score = 0;
        document.getElementById("score").innerText = score;
        loadQuestion();
    }
}


loadQuestion();
