// $(document).ready(function() {
//     $('.header__burger').click(function(event){
//         $('.header__burger, .header-navigation-menu').toggleClass('active');
//         $('body').toggleClass('lock'); //нужно для того что во время открытого бургера не скролился экран под ним
//     });


//     $('.navigation-menu-list__link').click(function(event){
//       $('.header__burger.classList').remove('active');
//       $('.header-navigation-menu').remove('active');
//       $('body').remove('lock');
//     });
// });



const isMobile ={
    Android: function(){
        return navigator.userAgent.match(/Android/i);
    },
    Blackberry:function () {
        return navigator.userAgent.match(/Blackberry/i);
    },
    iOS:function(){
        return navigator.userAgent.match(/IPhone|iPad|iPod/i);
    },
    Opera:function(){
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows:function(){
        return navigator.userAgent.match(/IEMobile/i);
    },
    any:function(){
        return(
            isMobile.Android() ||
            isMobile.Blackberry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
 };


//  МЕню Бургер

const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header-navigation-menu');
if (iconMenu){
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}

// /Плавная прокрутка/ 

// искать только класс.menu__link с атрибутом [data-goto] 
const menuLinks = document.querySelectorAll('.navigation-menu-list__link[data-goto]');
if (menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function  onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
        
            if(iconMenu.classList.contains('active')) {
                document.body.classList.remove('lock');
                iconMenu.classList.remove('active');
                menuBody.classList.remove('active');  
            }


            window.scrollTo({
                top: gotoBlockValue,
                // плавная прокрутка "smooth" 
                behavior: "smooth" 
            });    
            e.preventDefault();
        }
    }

}