const hero = document.querySelector('#hero');
const wolf = document.querySelector('#wolf');
const count = document.querySelector('#score');

let counter = 0;
let start = false;

const jump = () => {
  hero.classList.add('animate');
  wolf.style.animation = 'move 1s infinite linear';

  setTimeout(() => {
    hero.classList.remove('animate');
  }, 300);
};

document.addEventListener('keydown', function (event) {
  if (event.code === 'Space') {
    jump();
    if (!start) {
      start = true;
      setInterval(() => {
        counter++;
        count.innerHTML = counter;
      }, 300);
    }
  }
});

let isAlive = setInterval(() => {
  let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue('top'));
  let wolfLeft = parseInt(
    window.getComputedStyle(wolf).getPropertyValue('left')
  );

  if (wolfLeft < 40 && wolfLeft > 20 && heroTop >= 130) {
    wolf.style.animation = 'none';
    const confirm = window.confirm('Game Over! Your score is ' + counter);
    count.innerHTML = 0;
    if (confirm) {
      window.location.reload();
    }
  }
}, 10);
