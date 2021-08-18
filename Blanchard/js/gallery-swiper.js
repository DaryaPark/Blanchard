new Swiper('.gallery-swiper-container',{
    navigation: {
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
        clickable: true,
      },

      pagination:{
        el:'.editions-swiper-pagination',
        type:'fraction',
        
    },

    autoHeight:false,
    slidesPerView:3,

    slidesPerGroup:3,

    slidesPerColumn:2,

});