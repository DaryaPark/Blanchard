

const avtorSrc = document.querySelectorAll('.navigation-scroll-link[data-goto]');
if (avtorSrc.length > 0){
    avtorSrc.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function  onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                // плавная прокрутка "smooth" 
                behavior: "smooth" 
            });    
            e.preventDefault();
        }
    }

}