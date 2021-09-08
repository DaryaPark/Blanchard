new Swiper('.gallery-swiper-container', {
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
    clickable: true,
  },

  pagination: {
    el: '.gallery-swiper-pagination',
    type: 'fraction',

  },

grid: {
  rows:2,
},

autoHeight:false,
slidesPerView:3,
slidesPerGroup:3,
spaceBetween:43,

});