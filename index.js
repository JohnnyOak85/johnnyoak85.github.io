$(document).ready(() => {
    $('.arrow').on('click', () => {
        $('.hideable').toggle();
        $('.arrow').toggleClass('flipped');
    })
})

var slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}