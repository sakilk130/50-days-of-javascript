const btns = document.querySelectorAll('.flter-btn');
const products = document.querySelectorAll('.product');
const card = document.querySelectorAll('.card');
const cardBody = document.querySelectorAll('.card-body');
const search = document.getElementById('search');
const noProduct = document.querySelector('.no-product');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function (e) {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';

    const filter = e.target.dataset.filter;
    products.forEach((product) => {
      if (filter === 'all') {
        product.style.display = 'block';
      } else if (product.classList.contains(filter)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
}

search.addEventListener('keyup', function (e) {
  const searchValue = e.target.value.toLowerCase().trim();
  let count = 0;
  products.forEach((product) => {
    const title = product.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(searchValue) !== -1) {
      product.style.display = 'block';
      count++;
    } else {
      product.style.display = 'none';
    }
  });
  if (count === 0) {
    noProduct.style.display = 'block';
  }
});
