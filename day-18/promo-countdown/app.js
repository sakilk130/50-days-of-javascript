const countdownDiv = document.querySelector('.countdown');

const time = 10; //time in minutes
let timeInSeconds = time * 60;

setInterval(() => {
  if (timeInSeconds <= 0) {
    countdownDiv.innerHTML = 'Time is up!';
    return;
  } else {
    let hours = Math.floor(timeInSeconds / 3600);
    hours = hours < 10 ? '0' + hours : hours;
    let minutes = Math.floor(timeInSeconds / 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds = timeInSeconds % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownDiv.innerHTML = `${hours}h : ${minutes}m : ${seconds}s`;
    timeInSeconds--;
  }
}, 1000);
