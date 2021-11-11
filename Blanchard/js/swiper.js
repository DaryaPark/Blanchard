
const swiper = new Swiper('.first-slider', {
  slideClass: 'first-slider__item',
  wrapperClass: 'first-slider__list',
  loop: true,
  



  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',

keyboard:{
  enabled:true,
onlyInViewport:true,
pageUpDown:true,}
  },
 
  // автопрокручивание
  autoplay:{
    // Пауза между прокруткой
    delay:9000,
    // закончить на последнем слайде
    stopOnLastSlide:false,
    // Отключить после ручного переключения
    disableOnInteraction:false,
},
// скорость
speed:800,

// Эффект переключения слайдов.
// смена  прозрачности.
effect:'fade',

// дополнение к fade
fadeEffect:{
    // Параллельная смена прозрачности
    crossFade:true
},
});



