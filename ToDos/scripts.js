const submitButton = document.querySelector(".todo-submit");
const todoInput = document.querySelector(".todo-input");
const alertBanner = document.querySelector(".alert-banner");
const todosContainer = document.querySelector(".todos-container");

const setDeleteHandlers = () => {
  document.querySelectorAll(".todo-item-delete").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopImmediatePropagation();
      event.target.closest(".todo-item").remove();
      // remove and then save the new list
      saveTodos();
    });
  });
};
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const todo = todoInput.value;
  if (todo === "") {
    setTimeout(() => alertBanner.classList.remove("alerted"), 1300);
    alertBanner.classList.add("alerted");
    return;
  }
  const todoItem = `
		<div class="todo-item">
			<div class="todo-item-text">${todo}</div>
			<div class="todo-item-actions">
				<button class="todo-item-delete"><i class="fa-sharp fa-solid fa-delete-left"></i></button>
			</div>
		</div>
	`;
  todosContainer.insertAdjacentHTML("beforeend", todoItem);
  todoInput.value = "";
  // set the event handlers for if someone wants to delete a todo
  setDeleteHandlers();
  // save the todos to local storage
  saveTodos();
});

// builds a todo array and gets the stuff from the page and stores in the array
const getTodosFromPage = () => {
  const todos = [];
  document.querySelectorAll(".todo-item-text").forEach((todo) => {
    todos.push(todo.innerText);
  });
  return todos;
};

// save the todos to local storage
const saveTodos = () => {
  const todos = getTodosFromPage();
  localStorage.setItem("todos", JSON.stringify(todos));
};

// load the todos from local storage
const loadTodos = () => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  if (todos) {
    todos.forEach((todo) => {
      const todoItem = `
			<div class="todo-item">
				<div class="todo-item-text">${todo}</div>
				<div class="todo-item-actions">
					<button class="todo-item-delete"><i class="fa-sharp fa-solid fa-delete-left"></i></button>
				</div>
			</div>
		`;
      todosContainer.insertAdjacentHTML("beforeend", todoItem);
    });
    // set the event handlers for if someone wants to delete a todo
    setDeleteHandlers();
  }
};

loadTodos();
