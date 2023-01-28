const countdownDiv = document.querySelector('.countdown');
const futureYear = new Date().getFullYear() + 1;

const newYear = new Date(`Jan 1, ${futureYear} 00:00:00`).getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = newYear - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownDiv.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
