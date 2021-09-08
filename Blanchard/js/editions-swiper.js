new Swiper('.editions-swiper-container',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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