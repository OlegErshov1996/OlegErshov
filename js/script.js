import './text_animate'
import './mobile_menu'
import './scroll'
import './slider'
import './validation_phone'
import '../css/style.css'
import '../sass/style.sass'

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
