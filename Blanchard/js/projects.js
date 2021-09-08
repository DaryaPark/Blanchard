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
    slidesPerView:3,
    slidesPerGroup:3,
    spaceBetween:49,
});