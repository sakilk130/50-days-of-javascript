const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  if (button.role === 'number') {
    button.addEventListener('click', (e) => {
      screen.innerHTML += e.target.innerHTML;
    });
  }
  if (button.role === 'clear') {
    button.addEventListener('click', (e) => {
      screen.innerHTML = '';
    });
  }
  if (button.role === 'operator') {
    button.addEventListener('click', (e) => {
      if (screen.innerHTML === '') return;
      if (
        screen.innerHTML[screen.innerHTML.length - 1] === '+' ||
        screen.innerHTML[screen.innerHTML.length - 1] === '-' ||
        screen.innerHTML[screen.innerHTML.length - 1] === '*' ||
        screen.innerHTML[screen.innerHTML.length - 1] === '/' ||
        screen.innerHTML[screen.innerHTML.length - 1] === '.'
      ) {
        return;
      }
      screen.innerHTML += e.target.innerHTML;
    });
  }
  if (button.role === 'equal') {
    button.addEventListener('click', (e) => {
      screen.innerHTML = eval(screen.innerHTML);
    });
  }
});
