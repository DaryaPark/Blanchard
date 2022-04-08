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

autoHeight:false,

lockClass:false,

breakpoints:{
  1700:{
    slidesPerView:3,
    slidesPerGroup:3,
    spaceBetween:50,
    },

  1540:{
    slidesPerView:3,
    slidesPerGroup:3,
    spaceBetween:34,
    },

  769:{
    slidesPerView:2,
    slidesPerGroup:2,
    spaceBetween:35,
    },

  613:{
    slidesPerView:2,
    slidesPerGroup:2,
    spaceBetween:38,
    },

  200:{
    slidesPerView:1,
    slidesPerGroup:1,
    },
  
}

});

