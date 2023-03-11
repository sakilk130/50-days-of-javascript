const accordions = document.querySelectorAll('.accordion');

const toggleAddMinusIcon = (element) => {
  if (element.classList.contains('fa-plus')) {
    element.classList.remove('fa-plus');
    element.classList.add('fa-minus');
  } else {
    element.classList.remove('fa-minus');
    element.classList.add('fa-plus');
  }
};

accordions.forEach((accordion) => {
  accordion.addEventListener('click', function () {
    const child1 = this.children[0].children[0];
    const child2 = this.children[1];
    if (child2.classList.contains('active')) {
      toggleAddMinusIcon(child1);
      child2.classList.remove('active');
      return;
    } else {
      accordions.forEach((accordion) => {
        accordion.children[0].children[0].classList.remove('fa-minus');
        accordion.children[0].children[0].classList.add('fa-plus');
        accordion.children[1].classList.remove('active');
      });
      toggleAddMinusIcon(child1);
      child2.classList.add('active');
    }
  });
});
