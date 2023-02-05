const poundsInput = document.getElementById('pounds');
const kilogramsInput = document.getElementById('kilograms');
const gramsInput = document.getElementById('grams');
const ouncesInput = document.getElementById('ounces');
const form = document.querySelector('form');

form.addEventListener('input', (e) => {
  if (e.target.id === 'pounds') {
    let x = e.target.value;
    kilogramsInput.value = (x / 2.2046).toFixed(2);
    gramsInput.value = (x / 0.0022046).toFixed(2);
    ouncesInput.value = (x * 16).toFixed(2);
  } else if (e.target.id === 'kilograms') {
    let x = e.target.value;
    poundsInput.value = x * 2.2046;
    gramsInput.value = x * 1000;
    ouncesInput.value = x * 35.274;
  } else if (e.target.id === 'grams') {
    let x = e.target.value;
    kilogramsInput.value = x / 1000;
    poundsInput.value = x * 0.0022046;
    ouncesInput.value = x * 0.035274;
  } else {
    let x = e.target.value;
    kilogramsInput.value = x / 35.274;
    gramsInput.value = x / 0.035274;
    poundsInput.value = x * 0.0625;
  }
});
