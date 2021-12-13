new Swiper('.editions-swiper-container',{
    navigation: {
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
        clickable: true,
      },

      pagination:{
        el:'.gallery-swiper-pagination',
        type:'fraction',
        
    },
    slidesPerView:3,
    slidesPerGroup:3,
    spaceBetween:50,
});