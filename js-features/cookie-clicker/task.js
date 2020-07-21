'use strict'

let clickerCounter = document.getElementById('clicker__counter')
const cookie = document.getElementById('cookie');

function clicker() {
    clickerCounter.textContent++
    console.log(clickerCounter.textContent)
    cookie.width = 220;
    function cookieSize() {
        cookie.width = 200;
    }
    setTimeout(cookieSize, 100)
}

cookie.onclick = clicker;