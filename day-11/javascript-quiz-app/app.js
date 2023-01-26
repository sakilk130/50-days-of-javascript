const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const question = document.getElementById('question');
const options = document.querySelector('.options');
const questionNumber = document.getElementById('question-number');
const totalQuestions = document.getElementById('total-questions');
const quizHeader = document.getElementById('quiz-header');
const resetQuiz = document.getElementById('reset-quiz');
const questionCountTimmer = document.querySelector('.question-count-timmer');

const questions = [
  {
    question: 'What is the full form of HTML?',
    options: [
      'Hyper Text Markup Language',
      'Hyperlinks and Text Markup Language',
      'Home Tool Markup Language',
      'None of these',
    ],
    answer: 0,
  },
  {
    question: 'What is the full form of CSS?',
    options: [
      'Colorful Style Sheets',
      'Cascading Style Sheets',
      'Computer Style Sheets',
      'Creative Style Sheets',
    ],
    answer: 1,
  },
  {
    question: 'What is the full form of HTTP?',
    options: [
      'Hyper Test Transfer Protocol',
      'Hyper Text Test Protocol',
      'Hyper Text Transfer Protocol',
      'None of these',
    ],
    answer: 2,
  },
  {
    question: 'What is the full form of JS?',
    options: ['Java Source', 'Java Script', 'Java Super', 'None of these'],
    answer: 1,
  },
  {
    question: 'What is the full form of PHP?',
    options: [
      'Hypertext Programming',
      'Hypertext Preprogramming',
      'Hypertext Preprocessor',
      'None of these',
    ],
    answer: 2,
  },
];

let min = 10;
let sec = 00;

const timesUp = () => {
  question.innerHTML = '';
  options.innerHTML = '';
  questionCountTimmer.innerHTML = '';
  quizHeader.textContent = `Time's Up!`;
  resetQuiz.innerHTML = `<button id="reset-quiz-btn">Reset Quiz</button>`;
};

const countDownTimer = () => {
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
  const countDown = setInterval(() => {
    if (sec > 0) {
      --sec;
      seconds.innerHTML = sec;
    }
    if (sec < 10) {
      seconds.innerHTML = `0${sec}`;
    }
    if (sec === 0 && min > 0) {
      --min;
      sec = 59;
      seconds.innerHTML = sec;
      minutes.innerHTML = min;
    }
    if (min < 10) {
      minutes.innerHTML = `0${min}`;
    }
    if (min === 0 && sec < 10) {
      seconds.innerHTML = `<span style="color: red;">0${sec}</span>`;
    }
    if (min === 0 && sec === 0) {
      seconds.innerHTML = `0${sec}`;
      clearInterval(countDown);
      timesUp();
    }
  }, 1000);
};

const startQuiz = () => {
  let score = 0;
  let currentQuestion = 0;
  countDownTimer();
  const loadQuestion = (freshLoad = false) => {
    if (freshLoad) {
      options.innerHTML = '';
    }
    if (currentQuestion === questions.length) {
      question.innerHTML = '';
      options.innerHTML = '';
      questionCountTimmer.innerHTML = '';
      quizHeader.textContent = `You scored ${score} out of ${questions.length}`;
      resetQuiz.innerHTML = `<button id="reset-quiz-btn">Reset Quiz</button>`;
      return;
    }
    questionNumber.innerHTML = currentQuestion + 1;
    totalQuestions.innerHTML = questions.length;
    question.innerHTML = questions[currentQuestion].question;
    questions[currentQuestion].options.forEach((option, j) => {
      options.innerHTML += ` <button id="option-${j}">${option}</button>`;
    });
    const optionButtons = document.querySelectorAll('.options button');
    optionButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const selectedOption = e.target.id.split('-')[1];
        if (Number(selectedOption) === questions[currentQuestion].answer) {
          score++;
          currentQuestion++;
          loadQuestion(true);
        } else {
          currentQuestion++;
          loadQuestion(true);
        }
      });
    });
  };
  loadQuestion();
  resetQuiz.addEventListener('click', () => {
    window.location.reload();
  });
};

startQuiz();
