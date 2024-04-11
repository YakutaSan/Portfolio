//Находим элементы на странице
const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');

let tasks = [];

// Функции
const renderTask = (e) => {
    const cssClass = e.done ? 'task-title task-title--done' : 'task-title';

    // Формируем новую разметку
    const taskHTML = `
                <li id="${e.id}" class="list-group-item d-flex justify-content-between task-item">
					<span class="${cssClass}">${e.text}</span>
					<div class="task-item__buttons">
						<button type="button" data-action="done" class="btn-action">
							<img src="./img/tick.svg" alt="Done" width="18" height="18">
						</button>
						<button type="button" data-action="delete" class="btn-action">
							<img src="./img/cross.svg" alt="Done" width="18" height="18">
						</button>
					</div>
				</li>`
    
    // Добовляем разметку
    taskList.insertAdjacentHTML('beforeend', taskHTML);
};

const saveToLS = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
};

const checkEmptyList = () => {
    if (tasks.length === 0) {
        const emptyListHTML = `
                <li id="emptyList" class="list-group-item empty-list">
					<img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
					<div class="empty-list__title">Список дел пуст</div>
				</li>`
        taskList.insertAdjacentHTML('afterbegin', emptyListHTML);
    } else {
        const emptyListEl = document.querySelector('#emptyList')
        emptyListEl ? emptyListEl.remove() : null;
    }

    // if (tasks.length > 0) {
    //     const emptyListEl = document.querySelector('#emptyList')
    //     emptyListEl ? emptyListEl.remove() : null;
    // }
};

const addTask = (e) => {

    // Отменяем отправку формы
    e.preventDefault();

    // Достаем текст
    const taskText = taskInput.value;

    // Создаём объект задачи
    const newTask = {
        id: Date.now(),
        text: taskText,
        done: false
    };

    // Добовление объекта задачи в массив
    tasks.push(newTask);

    renderTask(newTask);

    // Чистим поле ввода и оставляем на нем фокус
    taskInput.value = "";
    taskInput.focus();

    checkEmptyList();

    saveToLS();
};

const deleteTask = (e) => {

    // Проверяем что клик не по "удалить"
    if(e.target.dataset.action !== 'delete') return

    // Проверяем что клик по "удалить"
    const parentNode = e.target.closest('.list-group-item');
    parentNode.remove();

    // Вывод ид объекта
    const id = Number(parentNode.id);

    // Нахождение ид объекта в массиве
    // const index = tasks.findIndex((task) => task.id === id);

    // Удаление задачи из массива
    // tasks.splice(index, 1);

    // Удаление объекта через фильтр
    tasks = tasks.filter((task) => task.id !== id);

    checkEmptyList();

    saveToLS();
};

const doneTask = (e) => {

    // Проверяем что клик не по "выполнено"
    if(e.target.dataset.action !== 'done') return

    // Проверяем что клик по "выполнено"
    const parentNode = e.target.closest('.list-group-item');
    const title = parentNode.querySelector('span');
    title.classList.toggle('task-title--done');
    
    const id = Number(parentNode.id);

    const task = tasks.find((task) => task.id === id);
    task.done = !task.done;

    saveToLS();
};

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((task) => {renderTask(task)});
}

checkEmptyList();

// Добовление задач
form.addEventListener('submit', addTask);

// Удаление задач
taskList.addEventListener('click', deleteTask);

// Отметка выполнения задания
taskList.addEventListener('click', doneTask);
