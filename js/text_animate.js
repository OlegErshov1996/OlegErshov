// const text = document.querySelector(".banner__title");
// const strText = text.textContent;
// const splitText = strText.split("");
// text.textContent = " ";
// for (let i = 0; i < splitText.length; i++) {
//     text.innerHTML += "<h6>" + splitText[i] + "</h6>";
// }
//
// let char = 0;
// let timer = setInterval(onTick, 50);
//
// function onTick() {
//     const h6 = text.querySelectorAll('h6')[char];
//     h6.classList.add('fade');
//     char++;
//     if (char === splitText.length) {
//         complete();
//         return;
//     }
// }
//
// function complete() {
//     clearInterval(timer);
//     timer = null;
// }

"use strict";

var text = document.querySelector(".banner__title");
var strText = text.textContent;
var splitText = strText.split("");
text.textContent = " ";

for (var i = 0; i < splitText.length; i++) {
    text.innerHTML += "<h6>" + splitText[i] + "</h6>";
}

var char = 0;
var timer = setInterval(onTick, 50);

function onTick() {
    var h6 = text.querySelectorAll('h6')[char];
    h6.classList.add('fade');
    char++;

    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}