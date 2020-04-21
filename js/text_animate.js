/* =========================================== Header Text Animate =========================================== */
const text = document.querySelector(".banner__title");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = " ";
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<h6>" + splitText[i] + "</h6>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const h6 = text.querySelectorAll('h6')[char];
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
