'use strict'

const expandedMenu = document.querySelectorAll('.menu_main>.menu__item');

for(let i=0; i<expandedMenu.length; i++) {
    if(expandedMenu[i].querySelector('.menu_sub')) {
        expandedMenu[i].querySelector('.menu__link').addEventListener('click', prevent)

        expandedMenu[i].addEventListener('click', () => {
            removeExpand(expandedMenu);
            expanded(expandedMenu[i].querySelector('.menu_sub'))
        });
    };
};

function prevent(evt) {
    evt.preventDefault();
};

function expanded(menuTag) {
    menuTag.classList.toggle('menu_active')
};

function removeExpand(menuTagRemove) {
    for(let i=0; i<menuTagRemove.length; i++) {
        if (menuTagRemove[i].querySelector('.menu_sub')) {
            menuTagRemove[i].querySelector('.menu_sub').classList.remove('menu_active')
        }
    }
}