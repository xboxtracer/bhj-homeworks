'use strict'

const checkboxCheck = Array.from(document.querySelectorAll('.interest__check'));

for(let key in checkboxCheck) {
    if(!checkboxCheck[key].closest('.interests_active')) {
        checkboxCheck[key].addEventListener('change', () => {
            let innerCheckbox = Array.from(checkboxCheck[key].closest('li').querySelectorAll('ul.interests_active .interest__check'));

            for(let anotherKey in innerCheckbox) {
                innerCheckbox[anotherKey].checked = checkboxCheck[key].checked;
            }
        })
    }
};