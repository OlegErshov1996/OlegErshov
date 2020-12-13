const mobileMenuButton = document.querySelector('.mobile_menu_button');
const mobileMenuItems = document.querySelector('.mobile_menu_items');
const mobileMenuLink = document.querySelectorAll('.mobile_menu_items .mobile_menu_link');

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
