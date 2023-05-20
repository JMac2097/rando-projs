const submitButton = document.querySelector('.todo-submit');
const todoInput = document.querySelector('.todo-input');
const alertBanner = document.querySelector('.alert-banner');

submitButton.addEventListener('click', function (event) {
	event.preventDefault();
	const todo = todoInput.value;
	if (todo === '') {
		setTimeout(() => alertBanner.classList.remove('alerted'), 3000);
		alertBanner.classList.add('alerted');
		return;
	}
});
