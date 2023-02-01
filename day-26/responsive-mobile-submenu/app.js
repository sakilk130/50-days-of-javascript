const links = document.querySelectorAll('a');
const mobileMenu = document.querySelector('.fa-bars');
const subMenu = document.querySelector('.three-sub');
const back = document.querySelector('.back');

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
  document.querySelector('.nav-wrapper').classList.toggle('show');
  document.querySelector('.nav-links').classList.toggle('show');
  mobileMenu.classList.toggle('fa-times');
  const subMenuThree = Array.from(
    document.querySelector('.submenu-three').classList
  ).find((item) => item === 'show');
  if (subMenuThree) {
    console.log(subMenuThree);
    document.querySelector('.submenu-three').classList.remove('show');
  }
});

subMenu.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.remove('show');
  document.querySelector('.submenu-three').classList.toggle('show');
});

back.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
  document.querySelector('.submenu-three').classList.remove('show');
});
