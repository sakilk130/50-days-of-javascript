const input = document.querySelector('.input');
const button = document.querySelector('button');
const result = document.querySelector('.result-text');

button.addEventListener('click', () => {
  const inputValue = input.value;
  if (inputValue === '') {
    alert('Please enter a value');
    return;
  }
  const reversedValue = inputValue.split('').reverse().join('');
  if (inputValue.toLowerCase() === reversedValue.toLowerCase()) {
    result.innerHTML = `<strong>${inputValue}</strong> is a palindrome`;
  } else {
    result.innerHTML = `<strong>${inputValue}</strong> is not a palindrome`;
  }
});
