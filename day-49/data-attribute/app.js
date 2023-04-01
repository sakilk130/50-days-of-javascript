const btns = document.querySelectorAll('.btn');
const message = document.querySelector('.message');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const filter = e.currentTarget.dataset.action;
    message.textContent = `You clicked ${filter} button`;
  });
});
