!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=10)}([function(t,e){var n=document.getElementById("preloader");window.onload=function(){setTimeout(function(){!function(t){t.style.opacity=1;var e=setInterval(function(){t.style.opacity=t.style.opacity-.05,t.style.opacity<=.05&&(clearInterval(e),n.style.display="none")},16)}(n)},400)}},function(t,e){var n=document.querySelector(".header");window.addEventListener("scroll",function(){var t=0<window.scrollY;n.classList.toggle("active-header",t)})},function(t,e){window.onscroll=function(){var t,e,n;t=document.body.scrollTop||document.documentElement.scrollTop,e=document.documentElement.scrollHeight-document.documentElement.clientHeight,n=t/e*100,document.getElementById("pageBar").style.width=n+"%"}},function(t,e){var n=document.querySelector(".banner__title"),o=n.textContent.split("");n.textContent=" ";for(var r=0;r<o.length;r++)n.innerHTML+="<h6>"+o[r]+"</h6>";var l=0,i=setInterval(function(){if(n.querySelectorAll("h6")[l].classList.add("fade"),++l===o.length)return clearInterval(i),void(i=null)},50)},function(t,e){var n=document.querySelector(".mobile_menu_button"),o=document.querySelector(".mobile_menu_items"),r=document.querySelectorAll(".mobile_menu_items .mobile_menu_link");n.addEventListener("click",function(){o.classList.toggle("open_menu"),r.forEach(function(t){t.classList.toggle("fade")})}),document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".mobile_menu_button"),e=document.querySelector(".mobile_menu_wrap");t.addEventListener("click",function(){t.classList.toggle("mobile_menu_button_active"),e.classList.toggle("mobile_menu_wrap_active")})})},function(t,e){window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-0");t.getBoundingClientRect().top<window.innerHeight/1.5&&t.classList.add("scroll-start")}),window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-1");t.getBoundingClientRect().top<window.innerHeight/1.6&&t.classList.add("scroll-start")}),window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-2");t.getBoundingClientRect().top<window.innerHeight/1.3&&t.classList.add("scroll-start")}),window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-3");t.getBoundingClientRect().top<window.innerHeight/1.8&&t.classList.add("scroll-start")}),window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-01");t.getBoundingClientRect().top<window.innerHeight/1.3&&t.classList.add("scroll-start-1")}),window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-02");t.getBoundingClientRect().top<window.innerHeight/1.5&&t.classList.add("scroll-start-1")}),window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-03");t.getBoundingClientRect().top<window.innerHeight/1.7&&t.classList.add("scroll-start-1")}),window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-04");t.getBoundingClientRect().top<window.innerHeight/1.7&&t.classList.add("scroll-start-1")}),window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-05");t.getBoundingClientRect().top<window.innerHeight/1.5&&t.classList.add("scroll-start-1")}),window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-06");t.getBoundingClientRect().top<window.innerHeight/1.3&&t.classList.add("scroll-start-1")}),window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-07");t.getBoundingClientRect().top<window.innerHeight/1.3&&t.classList.add("scroll-start-1")}),window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-08");t.getBoundingClientRect().top<window.innerHeight/1.5&&t.classList.add("scroll-start-1")}),window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-09");t.getBoundingClientRect().top<window.innerHeight/1.7&&t.classList.add("scroll-start-1")}),window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-10");t.getBoundingClientRect().top<window.innerHeight/1.7&&t.classList.add("scroll-start-1")}),window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-11");t.getBoundingClientRect().top<window.innerHeight/1.5&&t.classList.add("scroll-start-1")}),window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-12");t.getBoundingClientRect().top<window.innerHeight/1.3&&t.classList.add("scroll-start-1")}),window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-13");t.getBoundingClientRect().top<window.innerHeight/1.3&&t.classList.add("scroll-start-1")}),window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-14");t.getBoundingClientRect().top<window.innerHeight/1.5&&t.classList.add("scroll-start-1")}),window.addEventListener("scroll",function(){var t=document.querySelector(".scroll-stop-15");t.getBoundingClientRect().top<window.innerHeight/1.7&&t.classList.add("scroll-start-1")})},function(t,e){var n=document.querySelector(".slider-container_desktop"),o=document.querySelector(".right-slide"),r=document.querySelector(".left-slide"),l=document.querySelector(".up-button"),i=document.querySelector(".down-button"),c=o.querySelectorAll(".slider-image").length,s=0;r.style.top="-".concat(80*(c-1),"vh"),l.addEventListener("click",function(){return d("up")}),i.addEventListener("click",function(){return d("down")});var d=function(t){var e=n.clientHeight;"up"===t?c-1<++s&&(s=0):"down"===t&&--s<0&&(s=c-1),o.style.transform="translateY(-".concat(s*e,"px)"),r.style.transform="translateY(".concat(s*e,"px)")}},function(t,e){window.addEventListener("DOMContentLoaded",function(){function t(t){var e,n,o="+7 (___) ___-__-__",r=0,l=o.replace(/\D/g,""),i=this.value.replace(/\D/g,"");l.length>=i.length&&(i=l),this.value=o.replace(/./g,function(t){return/[_\d]/.test(t)&&r<i.length?i.charAt(r++):r>=i.length?"":t}),"blur"==t.type?2==this.value.length&&(this.value=""):(e=this.value.length,(n=this).focus(),n.setSelectionRange&&n.setSelectionRange(e,e))}var e=document.querySelector("#tel");e.addEventListener("input",t,!1),e.addEventListener("focus",t,!1),e.addEventListener("blur",t,!1)})},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0),n(1),n(2),n(3),n(4),n(5),n(6),n(7),n.p,n(8),n(9)}]);