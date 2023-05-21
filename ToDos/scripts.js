const submitButton = document.querySelector('.todo-submit');
const todoInput = document.querySelector('.todo-input');
const alertBanner = document.querySelector('.alert-banner');
const todosContainer = document.querySelector('.todos-container');

const handleDeleteEvents = () => {
	document.querySelectorAll('.todo-item-delete').forEach((button) => {
		button.addEventListener('click', function (event) {
			event.stopImmediatePropagation();
			event.target.closest('.todo-item').remove();
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
				<button class="todo-item-delete"><i class="fa-sharp fa-solid fa-delete-left" style="color: #c24b2e;"></i></button>
			</div>
		</div>
	`;
	todosContainer.insertAdjacentHTML('beforeend', todoItem);
	todoInput.value = '';
	handleDeleteEvents();
});



