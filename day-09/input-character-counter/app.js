const input = document.getElementsByTagName('input')[0];
const count = document.querySelector('.count');

input.onkeyup = function () {
  count.textContent = input.value.length;
};
