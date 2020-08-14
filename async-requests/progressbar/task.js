'use strict'

const btnSend = document.getElementById('send');
const progress = document.getElementById('progress');
const file = document.getElementsByName('file');
let request = new XMLHttpRequest();

btnSend.addEventListener('click', (e) => {
    e.preventDefault();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    request.onprogress = (event) => {
        let str = event.loaded.toString();
        let val =  + str.substring(0, str.length - 6);
        progress.value = val / 100;
        console.log(progress.value)
    };
    if(file[0].value) {
        request.send();
    };
});