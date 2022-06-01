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

  mousewheel: {
    invert: false,
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
    initialSlide:1,
    },
  
}

});

const btns = document.querySelectorAll('.gallery-swiper-slide ');
const modalOverlay = document.querySelector('.modal-list');
const modalBtn = document.querySelector('.modal-icon');
const modals = document.querySelectorAll('.modal-item');


btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');
    // вкл скролл document.body.classList.toggle('lock');
    document.body.classList.add('lock');
		modals.forEach((el) => {
			el.classList.remove('modal-item--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal-item--visible');
		modalOverlay.classList.add('modal-list--visible');
	});
});


modalOverlay.addEventListener('click', (e) => {
	// console.log(e.target);
  // по клику modalBtn закрывается окно, если нужно что бы оно закрывалось при нажатии по пустому месту то тогда modalOverlay
	if (e.target == modalBtn) {
		modalOverlay.classList.remove('modal-list--visible');
		modals.forEach((el) => {
      // выкл скролл    document.body.classList.remove('lock');
      document.body.classList.remove('lock');
			el.classList.remove('modal-item--visible');
		});
	}
  else if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-list--visible');
    modals.forEach((el) => {
      // выкл скролл    document.body.classList.remove('lock');
      document.body.classList.remove('lock');
      el.classList.remove('modal-item--visible');
    });
  }
});




// // Отключение скрола

// const btnOff = document.querySelector('.scroll-off'),
// 	btnOn = document.querySelector('.scroll-on'),
// 	body = document.body;

// let disableScroll = function () {
// 	let pagePosition = window.scrollY;
// 	document.body.classList.add('disable-scroll');
// 	document.body.dataset.position = pagePosition;
// 	document.body.style.top = -pagePosition + 'px';
// }

// let enableScroll = function () {
// 	let pagePosition = parseInt(document.body.dataset.position, 10);
// 	document.body.style.top = 'auto';
// 	document.body.classList.remove('disable-scroll');
// 	window.scroll({ top: pagePosition, left: 0 });
// 	document.body.removeAttribute('data-position');
// }

// btnOff.addEventListener('click', (e) => {
// 	disableScroll();
// 	e.currentTarget.style.pointerEvents = 'none';
// 	btnOn.style.pointerEvents = 'auto';
// });

// btnOn.addEventListener('click', (e) => {
// 	enableScroll();
// 	e.currentTarget.style.pointerEvents = 'none';
// 	btnOff.style.pointerEvents = 'auto';
// });
