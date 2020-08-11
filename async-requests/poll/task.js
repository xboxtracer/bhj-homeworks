'use strict'

let request = new XMLHttpRequest();

request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
request.send();
request.onreadystatechange = function () {
    if(request.readyState === 4 && request.status === 200) {
        let resp = JSON.parse(request.responseText);
        console.log(resp)
        for( let key in resp) {
            console.log(key)
        };
    };
};