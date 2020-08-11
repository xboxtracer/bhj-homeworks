'use strict'

const pollTitle = document.getElementById('poll__title')
const pollAnswers = document.getElementById('poll__answers')
let request = new XMLHttpRequest();

function addElements(variable) {
    console.log(variable)
    let divAnswerButton = document.createElement('button');
    divAnswerButton.classList.add('poll__answer');
    divAnswerButton.innerHTML = variable;
    divAnswerButton.addEventListener('click', ()=>{
        alert('Спасибо, ваш голос засчитан!')
    })
    pollAnswers.append(divAnswerButton);
};


request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
request.send();
request.onreadystatechange = function () {
    if(request.readyState === 4 && request.status === 200) {
        let resp = JSON.parse(request.responseText);
        pollTitle.innerHTML = resp.data.title;
        for (let key in resp.data.answers) {
            addElements(resp.data.answers[key]);
        }
    };
};