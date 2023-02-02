const result = document.getElementById('generated-password');
const length = document.getElementById('password-length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const submit = document.getElementById('submit');
const clipboard = document.getElementById('copy-text');

const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbersLetters = '0123456789';
const symbolsLetters = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

submit.addEventListener('click', (e) => {
  e.preventDefault();

  let characters = '';

  if (uppercase.checked) {
    characters += upperCaseLetters;
  }
  if (lowercase.checked) {
    characters += lowerCaseLetters;
  }
  if (numbers.checked) {
    characters += numbersLetters;
  }
  if (symbols.checked) {
    characters += symbolsLetters;
  }
  const password = generatePassword(length.value, characters);
  result.value = password;
});

function generatePassword(length, characters) {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

clipboard.addEventListener('click', (e) => {
  e.preventDefault();
  clipboard.innerHTML = 'Copied';
  result.select();
  document.execCommand('copy');
  result.blur();
  setTimeout(() => {
    clipboard.innerHTML = 'Copy';
  }, 2000);
});
