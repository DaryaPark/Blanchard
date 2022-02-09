new Swiper('.projects-swiper-container',{
    navigation: {
        nextEl: '.projects-swiper-button-next',
        prevEl: '.projects-swiper-button-prev',
        clickable: true,
      },

      pagination:{
        el:'.projects-swiper-pagination',
        type:'fraction',
        
    },

    breakpoints:{
    1540:{
    slidesPerView:3,
    slidesPerGroup:3,
    spaceBetween:50,
    },

    769:{
      slidesPerView:2,
      slidesPerGroup:2,
      spaceBetween:50,
      },

    375:{
      slidesPerView:2,
      slidesPerGroup:2,
      spaceBetween: 33,
      },
    }
  


});