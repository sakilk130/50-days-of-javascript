const hex = document.querySelector('.hex');
const generateBtn = document.querySelector('.generate');

const generateHex = () => {
  const randomHex = Math.random().toString(16).slice(2, 8);
  hex.textContent = `#${randomHex}`;
  document.body.style.backgroundColor = `#${randomHex}`;
};
generateBtn.addEventListener('click', generateHex);
