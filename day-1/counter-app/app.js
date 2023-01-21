const buttons = document.querySelector('.buttons');
const count = document.querySelector('.count');

let counter = 0;

buttons.addEventListener('click', function (e) {
  if (e.target.classList.contains('add')) {
    counter++;
  } else if (e.target.classList.contains('subtract')) {
    counter--;
  } else {
    counter = 0;
  }
  setColor();
  count.textContent = counter;
});

function setColor() {
  if (counter > 0) {
    count.style.color = 'yellow';
  } else if (counter < 0) {
    count.style.color = 'orangered';
  } else {
    count.style.color = 'white';
  }
}
