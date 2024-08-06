const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Trainer Marking Language", correct: false },
            { text: "Hyper Text Marketing Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyper Text Markup Leveler", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Computing Style Sheet", correct: false },
            { text: "Creative Style System", correct: false },
            { text: "Cascading Style Sheet", correct: true },
            { text: "Creative Styling Sheet", correct: false }
        ]
    },
    {
        question: "What is JavaScript primarily used for?",
        answers: [
            { text: "Styling web pages", correct: false },
            { text: "Structuring web pages", correct: false },
            { text: "Creating interactive elements", correct: true },
            { text: "Database management", correct: false }
        ]
    },
    {
        question: "Which tag is used to include JavaScript in an HTML file?",
        answers: [
            { text: "<javascript>", correct: false },
            { text: "<js>", correct: false },
            { text: "<script>", correct: true },
            { text: "<code>", correct: false }
        ]
    },
    {
        question: "What does DOM stand for?",
        answers: [
            { text: "Document Object Model", correct: true },
            { text: "Display Object Management", correct: false },
            { text: "Digital Ordinance Model", correct: false },
            { text: "Desktop Oriented Mode", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(button, answer.correct));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(button, correct) {
    const buttons = answerButtonsElement.children;
    Array.from(buttons).forEach(btn => {
        btn.classList.add(correct ? 'correct' : 'incorrect');
    });
    if (correct) {
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
    }
    Array.from(buttons).forEach(btn => {
        btn.disabled = true;
    });
    nextButton.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hide');
    } else {
        showResults();
    }
});

function showResults() {
    questionElement.innerText = 'Quiz Completed!';
    answerButtonsElement.innerHTML = '';
    nextButton.classList.add('hide');
}

startQuiz();
