window.addEventListener("DOMContentLoaded", function() {
    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        }
    }

    function mask(event) {
        let matrix = "+7 (___) ___-__-__";
        let i = 0;
        let def = matrix.replace(/\D/g, "");
        let val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        if (event.type == "blur") {
            if (this.value.length == 2) {
                this.value = ""
            }
        } else {
            setCursorPosition(this.value.length, this)
        }
    };
    let input = document.querySelector("#tel");
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
});
