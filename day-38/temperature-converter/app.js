const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');
const form = document.querySelector('form');

form.addEventListener('input', (e) => {
  if (e.target.id === 'celsius') {
    let x = Number(e.target.value);
    fahrenheitInput.value = x * 1.8 + 32;
    kelvinInput.value = x + 273.15;
  } else if (e.target.id === 'fahrenheit') {
    let x = Number(e.target.value);
    celsiusInput.value = (x - 32) / 1.8;
    kelvinInput.value = (x - 32) / 1.8 + 273.15;
  } else if (e.target.id === 'kelvin') {
    let x = Number(e.target.value);
    fahrenheitInput.value = (x - 273.15) * 1.8 + 32;
    celsiusInput.value = parseFloat(x) - 273.15;
  }
});
