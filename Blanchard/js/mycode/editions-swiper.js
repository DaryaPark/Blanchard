new Swiper('.events-swiper-container',{
    navigation: {
        nextEl: '.events-button-next',
        prevEl: '.events-button-prev',
        clickable: true,
      },

     
      pagination:{
        el:'.events-swiper-pagination',
        clickable:true,
        type:'bullets',
        
    },

    breakpoints:{
    1540:{
      slidesPerView:3,
      slidesPerGroup:3,
      spaceBetween:50,
      },
  
      900:{
      slidesPerView:3,
      slidesPerGroup:3,
      spaceBetween:27,
      },
      650:{
      slidesPerView:2,
      slidesPerGroup:2,
      spaceBetween:33,
      }
    }
    });