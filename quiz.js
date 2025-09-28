const quesJSON = [{
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question: 'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];


let score = 0;
let currentQues = 0;

const questionDiv = document.getElementById('question');
const optionsEl = document.getElementById("options");
const scoreEL = document.getElementById("score");
const nextBtn = document.getElementById('next');

nextBtn.addEventListener('click', nextQuestion)

showQuestions();

function showQuestions() {
  const {
    correctAnswer,
    options,
    question
  } = quesJSON[currentQues];
  questionDiv.textContent = question;
  const shuffledOptions = shuffleOptions(options);
  shuffledOptions.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    optionsEl.appendChild(button)

    button.addEventListener('click', function () {
      if (correctAnswer === option) {
        console.log("correct")
        score++;
      } else {
        score = score - 0.25;
      }
      nextQuestion();
    })
  })
}

function nextQuestion() {
  scoreEL.textContent = `Score: ${score} / ${quesJSON.length}`;
  optionsEl.innerHTML = ''
  if (currentQues < quesJSON.length - 1) {
    currentQues++;
    showQuestions();
  } else {
    questionDiv.textContent = 'Quiz Completed';
    nextBtn.remove();
  }
}


function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}