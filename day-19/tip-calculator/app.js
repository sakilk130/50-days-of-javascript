const calculateButton = document.querySelector('button');
const error = document.querySelector('#error');

calculateButton.addEventListener('click', function () {
  const billInput = document.getElementById('bill');
  const rateInput = document.getElementById('rate');
  const tipOutput = document.getElementById('result-tip');
  const totalOutput = document.getElementById('result-total');

  if (billInput.value === '') {
    error.textContent = 'Please enter a bill amount';
    error.style = 'display: block';
    setTimeout(() => {
      error.style = 'display: none';
    }, 2000);
    return;
  }

  const bill = Number(billInput.value);
  const rate = Number(rateInput.value);
  const tip = bill * rate;
  const total = bill + tip;

  tipOutput.textContent = `Tip: $${tip.toFixed(2)}`;
  totalOutput.textContent = `Total :$${total.toFixed(2)}`;
});
