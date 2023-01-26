const input = document.querySelector('.input');
const button = document.querySelector('button');
const result = document.querySelector('.result-text');

button.addEventListener('click', () => {
  const inputValue = input.value.toLowerCase();
  if (inputValue === '') {
    result.innerHTML = 'Please enter a value';
    return;
  }
  let vowelCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < inputValue.length; i++) {
    if (vowels.includes(inputValue[i])) {
      vowelCount++;
    }
  }
  result.innerHTML = `There are <strong>${vowelCount}</strong> vowels in your input`;
});
