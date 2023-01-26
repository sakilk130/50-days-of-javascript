const input = document.querySelector('.input');
const button = document.querySelector('button');

input.addEventListener('input', () => {
  input.value = input.value.toUpperCase();
});

const copyToClipboard = () => {
  if (!input.value) return;
  input.select();
  document.execCommand('copy');
  button.innerHTML = 'Copied!';
  setTimeout(() => {
    button.innerHTML = 'Copy';
  }, 2000);
};

button.addEventListener('click', copyToClipboard);
