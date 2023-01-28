const links = document.querySelectorAll('a');

const clickHandler = (e) => {
  e.preventDefault();

  const href = e.currentTarget.getAttribute('href');
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
  if (window.scrollY > 0) {
    nav.classList.add('scroll-up');
  } else {
    nav.classList.remove('scroll-up');
  }
});
