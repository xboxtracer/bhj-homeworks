'use strict'

function countdown() {
    const countdowner = document.getElementById('timer');

    function finalCountdown() {
        countdowner.textContent--;
        if (countdowner.textContent == 0) {
            alert('Вы победили в конкурсе!');
            clearInterval(timerId);
        };
    };
    let timerId = setInterval(finalCountdown, 1000);
};

countdown();