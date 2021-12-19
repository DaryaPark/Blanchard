new Swiper('.events-swiper-container',{
    navigation: {
        nextEl: '.events-button-next',
        prevEl: '.events-button-prev',
        clickable: true,
      },

      pagination:{
        el:'.editions-swiper-pagination',
        type:'fraction',
        
    },
    slidesPerView:3,
    slidesPerGroup:3,
    spaceBetween:50,
});