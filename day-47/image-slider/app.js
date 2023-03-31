const slides = document.querySelectorAll('.slider');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

let counter = 0;
const auto = true;
const intervalTime = 3000;
let slideInterval;

const carousel = () => {
  if (counter < 0) {
    counter = slides.length - 1;
  }
  if (counter > slides.length - 1) {
    counter = 0;
  }
  slides.forEach(function (slide) {
    slide.classList.remove('active');
    slides[counter].classList.add('active');
  });
};

nextBtn.addEventListener('click', function () {
  counter++;
  if (auto) {
    clearInterval(slideInterval);
    autoScroll();
  }
  carousel();
});

prevBtn.addEventListener('click', function () {
  counter--;
  if (auto) {
    clearInterval(slideInterval);
    autoScroll();
  }
  carousel();
});

function autoScroll() {
  slideInterval = setInterval(function () {
    counter++;
    carousel();
  }, intervalTime);
}

if (auto) {
  autoScroll();
}
