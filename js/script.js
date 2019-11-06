$(document).ready(function () {
   let link = $('.mobile__menu_button');
   let menu = $('.mobile_menu_wrap');

   link.click(function () {
       link.toggleClass('mobile__menu_button_active');
       menu.toggleClass('mobile_menu_wrap_active');
   });
});


// function random(min, max) {
//     var rand = min + Math.random() * (max + 1 - min);
//     rand = Math.floor(rand);
//     return rand;
// };
//
// setTimeout(function() {
//     document.querySelector('progress').value = random(40, 100);
// }, 0);