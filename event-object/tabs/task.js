'use strict'

const tabHeader = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

function tabRemove() {
    for( let i = 0; i < tabHeader.length; i++) {
        tabHeader[i].classList.remove('tab_active');
        tabContent[i].classList.remove('tab__content_active');
    }
};
for( let i = 0; i < tabHeader.length; i++) {
    tabHeader[i].addEventListener('click', () => {
        tabRemove();
        tabHeader[i].classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active');
    });
};