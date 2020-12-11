import './text_animate'
import './mobile_menu'
import './scroll'
import './slider'
import './validation_phone'
import '../img/svg/Oleg_Ershov_logo_orange_1.svg'
// import '../css/normalize.css'
import '../css/style.css'
import '../sass/style.sass'
// import '../index.html'
// import html from '../index.html';

/* ========================= Mobile Menu =========================== */

document.addEventListener("DOMContentLoaded", function() {
    let link = document.querySelector('.mobile_menu_button');
    let menu = document.querySelector('.mobile_menu_wrap');

    link.addEventListener('click', function() {
        link.classList.toggle('mobile_menu_button_active');
        menu.classList.toggle('mobile_menu_wrap_active');
    });
});

/* ========================= Progress Page Bar ======================== */

window.onscroll = function () {
    pageScroll ();
}

function pageScroll () {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (windowScroll / documentHeight) * 100;

    document.getElementById('pageBar').style.width = scrolled + '%';
}

/* ========================= Navigation transparent ======================== */

let header = document.querySelector('.header')
window.addEventListener('scroll', function () {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('active-header', windowPosition)
})
