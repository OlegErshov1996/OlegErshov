const mobileMenuButton = document.querySelector('.mobile_menu_button');
const mobileMenuItems = document.querySelector('.mobile_menu_items');
const mobileMenuLink = document.querySelectorAll('.mobile_menu_items .mobile_menu_link');

// function toggleMenu() {
//     const menuToggle = document.querySelector('.toggle');
//     const mobile_menu_wrap = document.querySelector('.mobile_menu_wrap');
//     menuToggle.classList.toggle('active');
//     mobile_menu_wrap.classList.toggle('active');
// }

mobileMenuButton.addEventListener('click', () => {
    mobileMenuItems.classList.toggle('open_menu');
    mobileMenuLink.forEach(linkMobile => {
        linkMobile.classList.toggle('fade');
    });
});

/* ========================= Mobile Menu =========================== */


document.addEventListener("DOMContentLoaded", function() {
    let link = document.querySelector('.mobile_menu_button');
    let menu = document.querySelector('.mobile_menu_wrap');

    link.addEventListener('click', function() {
        link.classList.toggle('mobile_menu_button_active');
        menu.classList.toggle('mobile_menu_wrap_active');
    });
});

/* ======================= Remove Mobile Menu ======================= */

const mobileLink = document.querySelectorAll('.mobile_link')

function linkAction(){
    const mobileMenuWrap = document.getElementById('mobile_menu_wrap')
    // When we click on each nav__link, we remove the show-menu class
    mobileMenuWrap.classList.remove('show-menu')
}
mobileLink.forEach(n => n.addEventListener('click', linkAction))

// const mobile_menu_items = document.getElementById('mobile_menu_items')
// const mobile_menu_wrap = document.getElementById('mobile_menu_wrap')
//
// document.onclick = function (e) {
//     if (e.target.id !== 'mobile_menu_items' && e.target.id !== 'mobile_menu_wrap') {
//         mobile_menu_items.classList.remove('mobile_menu_button_active');
//         mobile_menu_wrap.classList.remove('mobile_menu_wrap_active')
//     }
// }
//
// mobile_menu_items.onclick = function () {
//     mobile_menu_items.classList.toggle('mobile_menu_button_active');
//     mobile_menu_wrap.classList.toggle('mobile_menu_wrap_active')
// }