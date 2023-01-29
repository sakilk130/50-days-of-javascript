const links = document.querySelectorAll('a');
const mobileMenu = document.querySelector('.fa-bars');

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

mobileMenu.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
  mobileMenu.classList.toggle('fa-times');
});
