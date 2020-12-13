/* ================================ Preloader =============================== */

let preloader = document.getElementById("preloader");

function fadeOut(el) {
    el.style.opacity = 1;
    let interpreloader = setInterval(function() {
        el.style.opacity = el.style.opacity - 0.05;

        if (el.style.opacity <=0.05) {
            clearInterval(interpreloader);
            preloader.style.display = "none";
        }
    },16);
}

window.onload = function() {
    setTimeout(function() {
        fadeOut(preloader);
    },400);
}
