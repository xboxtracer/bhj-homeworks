'use strict'

const chatWidgetOpen = document.querySelector('.chat-widget__side');
const inputArea = document.querySelector('#chat-widget__input');
const chatArea = document.querySelector('#chat-widget__messages');
const robotMessage = [
    'Добрый день! До свидания!',
    'Почему вы ничего не купили?',
    'Вы что не видите? У нас обед!',
    'Вам не повезло, у нас сегодня выходной.',
    'К сожалению мы уже имеем достаточно заказов и вы нам не интересны!'
]

// chatWidgetOpen.parentElement.classList.add('chat-widget_active');
chatWidgetOpen.addEventListener('click', () => {
    chatWidgetOpen.parentElement.classList.add('chat-widget_active');
});
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

inputArea.addEventListener('keyup', (event) => {
    if(event.key === 'Enter' && inputArea.value !== "") {
        chatArea.innerHTML += `
                        <div class="message message_client">
                            <div class="message__time">${new Date().toLocaleTimeString().slice(0,-3)}</div>
                            <div class="message__text">${inputArea.value}</div>
                        </div>`;
        inputArea.value = "";
        chatArea.innerHTML += `
                        <div class="message">
                            <div class="message__time">${new Date().toLocaleTimeString().slice(0,-3)}</div>
                            <div class="message__text">${robotMessage[getRandomInt(0, 5)]}</div>
                        </div>`;
        // console.log(chatArea.getBoundingClientRect().bottom);
        // chatArea.scrollTo(0, chatArea.getBoundingClientRect().bottom);
        // chatArea.scrollTop = chatArea.scrollHeight;
    }
});