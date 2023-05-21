const submitButton = document.querySelector('.todo-submit');
const todoInput = document.querySelector('.todo-input');
const alertBanner = document.querySelector('.alert-banner');
const todosContainer = document.querySelector('.todos-container');

const handleDeleteEvents = () => {
	document.querySelectorAll('.todo-item-delete').forEach((button) => {
		button.addEventListener('click', function (event) {
			event.target.parentElement.parentElement.remove();
		});
	});	
}
submitButton.addEventListener('click', function (event) {
	event.preventDefault();
	const todo = todoInput.value;
	if (todo === '') {
		setTimeout(() => alertBanner.classList.remove('alerted'), 1300);
		alertBanner.classList.add('alerted');
		return;
	}
	const todoItem = `
		<div class="todo-item">
			<div class="todo-item-text">${todo}</div>
			<div class="todo-item-actions">
				<button class="todo-item-delete">Delete</button>
			</div>
		</div>
	`;
	todosContainer.insertAdjacentHTML('beforeend', todoItem);
	todoInput.value = '';
	handleDeleteEvents();
});



