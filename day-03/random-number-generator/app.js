const number = document.querySelector('.number');
const generateBtn = document.querySelector('.generate');

const generateNumber = () => {
  // Generate a random number between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  number.textContent = randomNumber;
};

generateBtn.addEventListener('click', generateNumber);
