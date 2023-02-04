const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const submitButton = document.querySelector('#submit');
const result = document.querySelector('#result');
const resetButton = document.querySelector('.reset-btn');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const weight = weightInput.value;
  const height = heightInput.value;
  if (!weight || !height) return alert('Please fill in all fields');
  const bmi = (weight / Math.pow(height, 2)) * 10000;
  if (bmi < 18.5) {
    result.className = 'result-container underweight';
    result.innerHTML = `Underweight : ${bmi.toFixed(2)}`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result.className = 'result-container normal';
    result.innerHTML = `Normal : ${bmi.toFixed(2)}`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    result.className = 'result-container overweight';
    result.innerHTML = `Overweight : ${bmi.toFixed(2)}`;
  } else {
    result.className = 'result-container obese';
    result.innerHTML = `Obese : ${bmi.toFixed(2)}`;
  }
});

resetButton.addEventListener('click', () => {
  weightInput.value = '';
  heightInput.value = '';
  result.classList.remove('result-container');
  result.innerHTML = '';
});
