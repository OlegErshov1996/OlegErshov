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
