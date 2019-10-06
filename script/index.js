$(document).ready(() => {
    $('.switch').on('click', () => {
        $(event.currentTarget).parent().siblings('.flavour').toggle();
        $(event.currentTarget).toggleClass('up');
    })
})

const easter_egg = new Konami(function () {
    alert('Konami Code!')
});