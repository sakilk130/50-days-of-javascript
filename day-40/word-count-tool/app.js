const words = document.getElementById('words');
const characters = document.querySelector('.character-count');
const wordCount = document.querySelector('.word-count');
const wordsLeft = document.querySelector('.words-left');

const WORD_LIMIT = 10;
let charactersCount = 0;
let wordsCount = 0;
let timer = null;

const readingTime = (e) => {
  const wordsPerMinute = 200;
  const wordsPerSecond = wordsPerMinute / 60;
  const seconds = wordsCount / wordsPerSecond;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const time = `${minutes > 0 ? minutes + 'm' : ''} ${remainingSeconds}s`;
  document.querySelector('.reading-time').innerHTML = `Reading Time: ${time}`;
};

const charactersCountFn = (e) => {
  charactersCount = words.value.length;
  characters.innerHTML = `Characters: ${charactersCount}`;
};
const wordCountFn = (e) => {
  wordsCount = words.value.trim().split(/\s+/).length;
  if (wordsCount > WORD_LIMIT) {
    alert('You have exceeded the word limit');
    return;
  }
  wordCount.innerHTML = `Words: ${wordsCount}`;
  wordsLeft.innerHTML = `Words Left: ${WORD_LIMIT - wordsCount}`;
  readingTime();
};

words.addEventListener('input', wordCountFn);
words.addEventListener('input', charactersCountFn);
