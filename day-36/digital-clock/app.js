const dateElement = document.querySelector('.date');
const timeElement = document.querySelector('.time');

dateElement.innerHTML = new Date().toDateString();

setInterval(() => {
  timeElement.innerHTML = new Date().toLocaleTimeString();
}, 1000);
