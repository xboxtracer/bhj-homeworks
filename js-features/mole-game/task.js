'use strict'

const deadMole = document.querySelector('#dead');
const lostMole = document.querySelector('#lost');

function again() {
    lostMole.textContent = 0;
    deadMole.textContent = 0;
}

function checkWinner() {
    if (deadMole.textContent == 10) {
        alert('Поздравляем, Вы выиграли!');
        again();
    }
    if (lostMole.textContent == 5) {
        alert('Вы 5 раз промахнулись, попытки закончились, вы проиграли!');
        again();
    }
}

const indexCollection = document.querySelectorAll('.hole');

function getHole() {
    for (let i = 0; i < indexCollection.length; i++) {
        indexCollection[i].onclick = function() {
                if (indexCollection[i].className.includes('hole_has-mole')) {
                    deadMole.textContent++
                } else {
                    lostMole.textContent++
                }
                checkWinner();
        };
    };
};
getHole()