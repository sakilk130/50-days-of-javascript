const links = document.querySelectorAll('a');

const clickHandler = (e) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  document.querySelector('.active').classList.remove('active');
  e.currentTarget.classList.add('active');
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: 'smooth',
  });
};

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY < 614) {
    nav.classList.remove('scroll-up');
  } else {
    nav.classList.add('scroll-up');
  }
});
