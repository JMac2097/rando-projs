const submitButton = document.querySelector('.todo-submit');
const todoInput = document.querySelector('.todo-input');
const alertBanner = document.querySelector('.alert-banner');
const todosContainer = document.querySelector('.todos-container');
// function to create a todo item, saves from duplicating code --
// just call and pass in what you want the todo to say
const createToDo = (todoText) => {
	const todoItem = `
    <div class="todo-item">
      <div class="todo-item-text">${todoText}</div>
      <div class="todo-item-actions">
        <button class="todo-item-delete"><i class="fa-sharp fa-solid fa-delete-left"></i></button>
      </div>
    </div>
  `;
	return todoItem;
};

const setDeleteHandlers = () => {
	document.querySelectorAll('.todo-item-delete').forEach((button) => {
		button.addEventListener('click', function (event) {
			event.stopImmediatePropagation();
			event.target.closest('.todo-item').remove();
			// remove and then save the new list
			saveTodos();
		});
	});
};

const setExpandHandlers = () => {
	document.querySelectorAll('.todo-item').forEach((todo) => {
		todo.addEventListener('click', function (event) {
			event.stopImmediatePropagation();
			event.target.closest('.todo-item').classList.toggle('expanded');
			saveTodos();
		});
	});
};

submitButton.addEventListener('click', function (event) {
	event.preventDefault();
	const todo = todoInput.value;
	if (todo === '') {
		setTimeout(() => alertBanner.classList.remove('alerted'), 1300);
		alertBanner.classList.add('alerted');
		return;
	}
	const todoItem = createToDo(todo);
	todosContainer.insertAdjacentHTML('beforeend', todoItem);
	todoInput.value = '';
	// set the expand handler for the new todo
	setExpandHandlers();
	// set the event handlers for if someone wants to delete a todo
	setDeleteHandlers();
	// save the todos to local storage
	saveTodos();
});

// builds a todo array and gets the stuff from the page and stores in the array
const getTodosFromPage = () => {
	const todos = [];
	document.querySelectorAll('.todo-item-text').forEach((todo) => {
		todos.push(todo.innerText);
	});
	return todos;
};

// save the todos to local storage
const saveTodos = () => {
	const todos = getTodosFromPage();
	localStorage.setItem('todos', JSON.stringify(todos));
};

// load the todos from local storage
const loadTodos = () => {
	const todos = JSON.parse(localStorage.getItem('todos'));
	if (todos) {
		todos.forEach((todo) => {
			const todoItem = createToDo(todo);
			todosContainer.insertAdjacentHTML('beforeend', todoItem);
		});
		// set the expand handler for the new todo
		setExpandHandlers();
		// set the event handlers for if someone wants to delete a todo
		setDeleteHandlers();
	}
};

loadTodos();

// close all expanded todos when clicking anywhere on the page
// TODO: not working

document.querySelector(body).addEventListener('click', (event) => {
	todos = document.querySelectorAll('.todo-item');
	todos.forEach((todo) => {
		if (!todo.classList.contains('expanded'))
			todo.classList.remove('expanded');
	});
});
