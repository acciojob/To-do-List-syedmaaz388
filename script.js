//your code here
const newTodoInput = document.getElementById('newTodoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addTodoBtn.addEventListener('click', () => {
  const newTodoText = newTodoInput.value.trim();
  if (newTodoText) {
    const newTodoItem = document.createElement('li');
    newTodoItem.innerText = newTodoText;
    todoList.appendChild(newTodoItem);
    newTodoInput.value = '';
  }
});


