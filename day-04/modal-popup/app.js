const modal = document.querySelector('.modal');
const openModal = document.querySelector('.modal-open-btn');
const closeBtn = document.querySelector('.close');

openModal.addEventListener('click', modalOpen);
closeBtn.addEventListener('click', modalClose);

function modalOpen() {
  modal.style.display = 'block';
}

function modalClose() {
  modal.style.display = 'none';
}
