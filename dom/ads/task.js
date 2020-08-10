'use strict'

const rotatorElement = document.querySelectorAll('.rotator__case');
let i = 0;

function rotateElem() {
    rotatorElement[i].classList.remove('rotator__case_active');
    i++;
    rotatorElement[i].classList.add('rotator__case_active');
    if (i >= rotatorElement.length - 1) {i = 0};
};

setInterval(rotateElem, 1000);