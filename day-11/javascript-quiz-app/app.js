const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

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

const countDown = () => {
  let min = 10;
  let sec = 60;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
  const countDown = setInterval(() => {
    sec--;
    seconds.innerHTML = sec;
    if (sec < 10) {
      seconds.innerHTML = `0${sec}`;
    }
    if (sec == 0) {
      min--;
      minutes.innerHTML = min;
      sec = 60;
    }
    if (min < 10) {
      minutes.innerHTML = `0${min}`;
    }
    if (min == 0 && sec == 0) {
      clearInterval(countDown);
      alert('Time is up');
    }
  }, 1000);
};

const startQuiz = () => {
  countDown();
};

startQuiz();
