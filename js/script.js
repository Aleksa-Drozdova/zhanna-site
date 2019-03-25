// MODAL price CUT
var link = document.querySelector(".price-cut");
var popup = document.querySelector(".cut");
var close = popup.querySelector(".modal-close");

var link2 = document.querySelector(".price-color");
var popup2 = document.querySelector(".color");
var close2 = popup2.querySelector(".modal-close");

var link3 = document.querySelector(".price-treatment");
var popup3 = document.querySelector(".treatment");
var close3 = popup3.querySelector(".modal-close");


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

link2.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup2.classList.add("modal-show");
});
link3.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup3.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});
close2.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup2.classList.remove("modal-show");
});
close3.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup3.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup2.classList.contains("modal-show")) {
            popup2.classList.remove("modal-show");
        }
    }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup3.classList.contains("modal-show")) {
            popup3.classList.remove("modal-show");
        }
    }
});
