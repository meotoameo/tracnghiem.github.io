const n1 = [
    {
        question: "What is the capital of France?",
        options: [
            { id: "q1_a", label: "Berlin", value: 0 },
            { id: "q1_b", label: "Madrid", value: 0 },
            { id: "q1_c", label: "Paris", value: 1 },
            { id: "q1_d", label: "Rome", value: 0 }
        ],
        correctAnswer: "q1_c"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: [
            { id: "q2_a", label: "Earth", value: 0 },
            { id: "q2_b", label: "Mars", value: 1 },
            { id: "q2_c", label: "Jupiter", value: 0 },
            { id: "q2_d", label: "Venus", value: 0 }
        ],
        correctAnswer: "q2_b"
    },
    {
        question: "What is the largest mammal on Earth?",
        options: [
            { id: "q3_a", label: "Elephant", value: 0 },
            { id: "q3_b", label: "Blue Whale", value: 1 },
            { id: "q3_c", label: "Giraffe", value: 0 },
            { id: "q3_d", label: "Lion", value: 0 }
        ],
        correctAnswer: "q3_b"
    },
    {
        question: "Which programming language is widely used for web development?",
        options: [
            { id: "q4_a", label: "Java", value: 0 },
            { id: "q4_b", label: "Python", value: 0 },
            { id: "q4_c", label: "JavaScript", value: 1 },
            { id: "q4_d", label: "C++", value: 0 }
        ],
        correctAnswer: "q4_c"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: [
            { id: "q5_a", label: "Nucleus", value: 0 },
            { id: "q5_b", label: "Mitochondria", value: 1 },
            { id: "q5_c", label: "Ribosome", value: 0 },
            { id: "q5_d", label: "Endoplasmic Reticulum", value: 0 }
        ],
        correctAnswer: "q5_b"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: [
            { id: "q6_a", label: "Charles Dickens", value: 0 },
            { id: "q6_b", label: "William Shakespeare", value: 1 },
            { id: "q6_c", label: "Jane Austen", value: 0 },
            { id: "q6_d", label: "Mark Twain", value: 0 }
        ],
        correctAnswer: "q6_b"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: [
            { id: "q7_a", label: "China", value: 0 },
            { id: "q7_b", label: "Japan", value: 1 },
            { id: "q7_c", label: "South Korea", value: 0 },
            { id: "q7_d", label: "India", value: 0 }
        ],
        correctAnswer: "q7_b"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: [
            { id: "q8_a", label: "Au", value: 1 },
            { id: "q8_b", label: "Ag", value: 0 },
            { id: "q8_c", label: "Fe", value: 0 },
            { id: "q8_d", label: "Cu", value: 0 }
        ],
        correctAnswer: "q8_a"
    },
    {
        question: "Which ocean is the largest?",
        options: [
            { id: "q9_a", label: "Atlantic Ocean", value: 0 },
            { id: "q9_b", label: "Indian Ocean", value: 0 },
            { id: "q9_c", label: "Pacific Ocean", value: 1 },
            { id: "q9_d", label: "Arctic Ocean", value: 0 }
        ],
        correctAnswer: "q9_c"
    },
    {
        question: "Who is known as the 'Father of Modern Physics'?",
        options: [
            { id: "q10_a", label: "Isaac Newton", value: 0 },
            { id: "q10_b", label: "Albert Einstein", value: 1 },
            { id: "q10_c", label: "Galileo Galilei", value: 0 },
            { id: "q10_d", label: "Niels Bohr", value: 0 }
        ],
        correctAnswer: "q10_b"
    }
];
const n2 = [
    {
        question: "Is the sky blue?",
        options: [
            { id: "q1_a", label: "Yes", value: 1 },
            { id: "q1_b", label: "No", value: 0 }
        ],
        correctAnswer: "q1_a"
    },
    {
        question: "Is water wet?",
        options: [
            { id: "q2_a", label: "Yes", value: 1 },
            { id: "q2_b", label: "No", value: 0 }
        ],
        correctAnswer: "q2_a"
    },
    {
        question: "Does the sun rise in the east?",
        options: [
            { id: "q3_a", label: "Yes", value: 1 },
            { id: "q3_b", label: "No", value: 0 }
        ],
        correctAnswer: "q3_a"
    },
    {
        question: "Is JavaScript a programming language?",
        options: [
            { id: "q4_a", label: "Yes", value: 1 },
            { id: "q4_b", label: "No", value: 0 }
        ],
        correctAnswer: "q4_a"
    },
    {
        question: "Are elephants carnivores?",
        options: [
            { id: "q5_a", label: "Yes", value: 0 },
            { id: "q5_b", label: "No", value: 1 }
        ],
        correctAnswer: "q5_b"
    },
    {
        question: "Is the Earth flat?",
        options: [
            { id: "q6_a", label: "Yes", value: 0 },
            { id: "q6_b", label: "No", value: 1 }
        ],
        correctAnswer: "q6_b"
    },
    {
        question: "Is the moon made of cheese?",
        options: [
            { id: "q7_a", label: "Yes", value: 0 },
            { id: "q7_b", label: "No", value: 1 }
        ],
        correctAnswer: "q7_b"
    },
    {
        question: "Is 1 + 1 equal to 3?",
        options: [
            { id: "q8_a", label: "Yes", value: 0 },
            { id: "q8_b", label: "No", value: 1 }
        ],
        correctAnswer: "q8_b"
    },
    {
        question: "Can plants grow without sunlight?",
        options: [
            { id: "q9_a", label: "Yes", value: 0 },
            { id: "q9_b", label: "No", value: 1 }
        ],
        correctAnswer: "q9_b"
    },
    {
        question: "Is the Pacific Ocean the largest ocean on Earth?",
        options: [
            { id: "q10_a", label: "Yes", value: 1 },
            { id: "q10_b", label: "No", value: 0 }
        ],
        correctAnswer: "q10_a"
    }
];
const n3 = [
    {
        question: "Which programming languages are used for web development?",
        options: [
            { id: "q1_a", label: "Java", value: 0 },
            { id: "q1_b", label: "JavaScript", value: 1 },
            { id: "q1_c", label: "Python", value: 1 },
            { id: "q1_d", label: "C++", value: 0 }
        ],
        correctAnswers: ["q1_b", "q1_c"]
    },
    {
        question: "Which countries are in Europe?",
        options: [
            { id: "q2_a", label: "France", value: 1 },
            { id: "q2_b", label: "Japan", value: 0 },
            { id: "q2_c", label: "Brazil", value: 0 },
            { id: "q2_d", label: "Germany", value: 1 }
        ],
        correctAnswers: ["q2_a", "q2_d"]
    },
    {
        question: "Select the programming languages that are statically typed.",
        options: [
            { id: "q3_a", label: "JavaScript", value: 0 },
            { id: "q3_b", label: "TypeScript", value: 1 },
            { id: "q3_c", label: "Python", value: 0 },
            { id: "q3_d", label: "Ruby", value: 0 }
        ],
        correctAnswers: ["q3_b"]
    },
    {
        question: "Choose the animals that are mammals.",
        options: [
            { id: "q4_a", label: "Dog", value: 1 },
            { id: "q4_b", label: "Snake", value: 0 },
            { id: "q4_c", label: "Eagle", value: 0 },
            { id: "q4_d", label: "Fish", value: 0 }
        ],
        correctAnswers: ["q4_a"]
    },
    {
        question: "Pick the colors that are in a rainbow.",
        options: [
            { id: "q5_a", label: "Red", value: 1 },
            { id: "q5_b", label: "Black", value: 0 },
            { id: "q5_c", label: "White", value: 0 },
            { id: "q5_d", label: "Brown", value: 0 }
        ],
        correctAnswers: ["q5_a"]
    },
    {
        question: "Select the planets that are part of our solar system.",
        options: [
            { id: "q6_a", label: "Mars", value: 1 },
            { id: "q6_b", label: "Alpha Centauri", value: 0 },
            { id: "q6_c", label: "Jupiter", value: 1 },
            { id: "q6_d", label: "Venus", value: 1 }
        ],
        correctAnswers: ["q6_a", "q6_c", "q6_d"]
    },
    {
        question: "Choose the prime numbers from the following.",
        options: [
            { id: "q7_a", label: "8", value: 0 },
            { id: "q7_b", label: "13", value: 1 },
            { id: "q7_c", label: "6", value: 0 },
            { id: "q7_d", label: "17", value: 1 }
        ],
        correctAnswers: ["q7_b", "q7_d"]
    },
    {
        question: "Select the musical instruments.",
        options: [
            { id: "q8_a", label: "Car", value: 0 },
            { id: "q8_b", label: "Guitar", value: 1 },
            { id: "q8_c", label: "Computer", value: 0 },
            { id: "q8_d", label: "Chair", value: 0 }
        ],
        correctAnswers: ["q8_b"]
    },
    {
        question: "Choose the countries in South America.",
        options: [
            { id: "q9_a", label: "Canada", value: 0 },
            { id: "q9_b", label: "Peru", value: 1 },
            { id: "q9_c", label: "Russia", value: 0 },
            { id: "q9_d", label: "Australia", value: 0 }
        ],
        correctAnswers: ["q9_b"]
    },
    {
        question: "Pick the programming languages.",
        options: [
            { id: "q10_a", label: "English", value: 0 },
            { id: "q10_b", label: "Java", value: 1 },
            { id: "q10_c", label: "Spanish", value: 0 },
            { id: "q10_d", label: "Chinese", value: 0 }
        ],
        correctAnswers: ["q10_b"]
    }
];

const n4 = [
    { id: "q1", question: "What is the capital of France?", answer: "Paris" },
    { id: "q2", question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { id: "q3", question: "What is the largest mammal on Earth?", answer: "Blue Whale" },
    { id: "q4", question: "Which programming language is widely used for web development?", answer: "JavaScript" },
    { id: "q5", question: "What is the powerhouse of the cell?", answer: "Mitochondria" },
    { id: "q6", question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
    { id: "q7", question: "Which country is known as the Land of the Rising Sun?", answer: "Japan" },
    { id: "q8", question: "What is the chemical symbol for gold?", answer: "Au" },
    { id: "q9", question: "Which ocean is the largest?", answer: "Pacific Ocean" },
    { id: "q10", question: "Who is known as the 'Father of Modern Physics'?", answer: "Albert Einstein" },
];
const bangtt = document.querySelector(".wrap")
const tracnghiem = document.querySelector(".wrap2")
const form = document.querySelector(".form-group")

function next()
{
    bangtt.style.display = "none"
    tracnghiem.style.display = "block"
    renderDataN1(n1)
    renderDataN2(n2)
    renderDataN3(n3)
    renderDataN4(n4)
}

function renderDataN1(quiz)
{
    const quizContainer = document.querySelector('.n1');
    quiz.forEach((questionData, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("form-group");
    
        const questionLabel = document.createElement("label");
        questionLabel.textContent = `${index + 1}. ${questionData.question}`;
        questionDiv.appendChild(questionLabel);

        questionData.options.forEach(option => {
            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.id = option.id;
            radioInput.name = `question${index + 1}`;
            radioInput.value = option.value;

            const label = document.createElement("label");
            label.htmlFor = option.id;
            label.textContent = option.label;
            const wraperAnser = document.createElement("div");
            wraperAnser.classList.add("text");
            wraperAnser.appendChild(radioInput);
            wraperAnser.appendChild(label);
            questionDiv.appendChild(wraperAnser);
        });

        quizContainer.appendChild(questionDiv)
    });

}
function renderDataN2(quiz)
{
    const quizContainer = document.querySelector('.n2');
    quiz.forEach((questionData, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("form-group");
    
        const questionLabel = document.createElement("label");
        questionLabel.textContent = `${index + 1}. ${questionData.question}`;
        questionDiv.appendChild(questionLabel);

        questionData.options.forEach(option => {
            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.id = option.id;
            radioInput.name = `question2${index + 1}`;
            radioInput.value = option.value;

            const label = document.createElement("label");
            label.htmlFor = option.id;
            label.textContent = option.label;
            const wraperAnser = document.createElement("div");

            wraperAnser.appendChild(radioInput);
            wraperAnser.appendChild(label);
            questionDiv.appendChild(wraperAnser);
        });

        quizContainer.appendChild(questionDiv)
    });

}
function renderDataN3(quizData) {
    const quizContainer = document.querySelector('.n3');

    quizData.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        // Render the question
        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${question.question}`;
        questionElement.appendChild(questionText);

        // Render options as checkboxes
        question.options.forEach((option) => {
            const optionInput = document.createElement('input');
            optionInput.type = 'checkbox';
            optionInput.id = option.id;
            optionInput.name = `question3${index + 1}`;
            optionInput.value = option.id;

            const optionLabel = document.createElement('label');
            optionLabel.textContent = option.label;
            optionLabel.htmlFor = option.id;

            const optionContainer = document.createElement('div');
            optionContainer.appendChild(optionInput);
            optionContainer.appendChild(optionLabel);

            questionElement.appendChild(optionContainer);
        });

        quizContainer.appendChild(questionElement);
    });

  
}

function renderDataN4(quiz)
{
    const quizContainer = document.querySelector('.n4');
    quiz.forEach((questionData, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("form-group");
    
        const questionLabel = document.createElement("label");
        questionLabel.textContent = `${index + 1}. ${questionData.question}`;
        questionDiv.appendChild(questionLabel);

        const answerInput = document.createElement("input");
        answerInput.type = "text";
        answerInput.id = `answer${index + 1}`;
        answerInput.name = `question${index + 1}`;
         answerInput.classList.add("answer-input");

        questionDiv.appendChild(answerInput);

        quizContainer.appendChild(questionDiv)
    });

}


function checkAnswers(userAnswers,userAnswers2,userAnswers3) {
    let correctCount = 0;

    n1.forEach((question, index) => {
        const correctAnswerId = question.correctAnswer;
        const userAnswerId = userAnswers[`question${index + 1}`];

        if (correctAnswerId === userAnswerId) {
            correctCount++;
        }
    });
    n2.forEach((question, index) => {
        const correctAnswerId = question.correctAnswer;
        const userAnswerId = userAnswers2[`question2${index + 1}`];

        if (correctAnswerId === userAnswerId) {
            correctCount++;
        }
    });
    n3.forEach((question, index) => {
        const correctAnswers = question.correctAnswers;
        const userSelectedOptions = userAnswers3[`question3${index + 1}`] || [];

        // Check if the user's selected options match the correct answers
        if (
            correctAnswers.length === userSelectedOptions.length &&
            correctAnswers.every((correctOption) => userSelectedOptions.includes(correctOption))
        ) {
            correctCount++;
        }
    });

   alert(`Điểm của bạn ${correctCount} / 40`);
}
const quizForm = document.querySelector('.form1');
quizForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    let an1 = document.querySelector('.n1');
    let an2 = document.querySelector('.n2');
    let an3 = document.querySelector('.n3');

    const userAnswers1 = {};
    an1.querySelectorAll('input[type="radio"]:checked').forEach((input) => {
        const questionId = input.name;
        const answerId = input.id;
        userAnswers1[questionId] = answerId;
    });
    const userAnswers2 = {};
    an2.querySelectorAll('input[type="radio"]:checked').forEach((input) => {
        const questionId = input.name;
        const answerId = input.id;
        userAnswers2[questionId] = answerId;
    });
    const userAnswers3 = {};
    an3.querySelectorAll('input[type="checkbox"]:checked').forEach((input) => {
        const questionId = input.name;
        const answerId = input.value;
        userAnswers3[questionId] = userAnswers3[questionId] || [];
        userAnswers3[questionId].push(answerId);
    });
    // Check answers
    checkAnswers(userAnswers1,userAnswers2,userAnswers3);
});
