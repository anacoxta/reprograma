// "SWIPER IS A FREE MOBILE TOUCH SLIDER WITH HARDWARE ACCELERATED TRANSITIONS"
// ••• http://idangero.us/swiper/ ••• https://github.com/nolimits4web/swiper •••

var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    keyboard: {
        enabled: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletElement: 'span',
        clickable: true
    },
    history: {
        key: 'monstra',
      },
    mousewheel: true,
})


//------------------------------------
//SCRIPT DO MENU
$(document).ready(function(){
    $(".icon").click(function(){
      $(this).toggleClass("is-x");
      $(".icon-container").toggleClass("fullscreen");
      $(".nav-container").toggleClass("aberto");
    });
  });


//------------------------------------
//SCRIPT PARA RODAR A ANIMAÇÃO DA HOME

var animation = lottie.loadAnimation({
    container: document.getElementById('animacaoMonstra'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../LogoMonstra.json'
})


//------------------------------------
// SCRIPT PARA A REPETIÇÃO DOS H1, NECESSÁRIO PARA SOBREPÔR AS FONTES
// 'OZZOMBIE FILLED' (COR DE FUNDO) E 'OZZOMBIE RELOADED' (CONTORNOS)

$('h1').each(function() {
    $(this).attr('content', $(this).html())
})
