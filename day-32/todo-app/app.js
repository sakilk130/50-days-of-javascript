const todoInput = document.querySelector('#todo');
const todoAddBtn = document.querySelector('#todo-add');
const todoList = document.querySelector('ol');
const clearAllBtn = document.querySelector('.clear-btn');

todoAddBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});

function addTodo() {
  const todo = todoInput.value;
  if (!todo) {
    alert('Please enter a todo');
    return;
  }
  const newLi = document.createElement('li');
  const newBtn = document.createElement('button');
  newBtn.innerHTML = `<i class="fas fa-trash delete"></i>`;
  newLi.innerText = todo;
  newLi.appendChild(newBtn);
  todoList.appendChild(newLi);
  todoInput.value = '';

  newBtn.addEventListener('click', function (e) {
    const confirmDelete = confirm('Are you sure you want to delete this todo?');
    if (confirmDelete) {
      e.target.parentElement.parentElement.remove();
    } else {
      return;
    }
  });
}

clearAllBtn.addEventListener('click', function () {
  todoList.innerHTML = '';
});
