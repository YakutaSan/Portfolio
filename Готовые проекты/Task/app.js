

const noMessageEl = document.querySelector('.noMessage');
const messageEl = document.querySelector('.message');
const textareaEl = document.querySelector('textarea');
const nameInputEl = document.querySelector('input');
const errorTextareaEl = document.querySelector('.errorTextarea');
const errorInputEl = document.querySelector('.errorInput');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');

const messageElClassName = 'message1';

sendBtn.addEventListener('click', () => {
    textareaEl.value === '' 
    ? errorTextareaEl.textContent = 'Сообщение не может быть пустым'
    :errorTextareaEl.textContent = '';

    nameInputEl.value === '' 
    ? errorInputEl.textContent = 'Введите имя'
    :errorInputEl.textContent = '';

    hideNoMessageText();

    const messageMarkup = getMessageMarkup(textareaEl.value, nameInputEl.value);
    messageEl.insertAdjacentHTML('beforeend', messageMarkup);
    console.log(messageMarkup);

    
});



function getMessageMarkup(text, author) {
    return`<div class='${messageElClassName}'>
                <div>Сообщение: ${text}</div>
                <div>Автор: ${author}</div>
            </div>`;
};

const hideNoMessageText = () => 
    noMessageEl.style.display = 'none';

clearBtn.addEventListener('click', () => {
    document.querySelectorAll('.message1').forEach((message) => message.remove())
});