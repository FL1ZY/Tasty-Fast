const docTitle = document.title;

window.addEventListener('blur',() => {  
    document.title = 'Повернись 😔'
});
window.addEventListener('focus', ()=> {  
    document.title =  docTitle
});

$(document).ready(function() {
    $('.header__burger').click(function(event) {
            $('.header__burger,.header__menu').toggleClass('active');
            $('body').toggleClass('lock');
    });
});

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

new swiper('.swiper-container',{
    navigation: {
        nextEl: '.swiper_button_next',
        prevEl: '.swiper_button_prev'
    },
});