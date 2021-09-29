let select= function (){
  let selectHeader = document.querySelectorAll
   ('.menu-2__nav');

   selectHeader.forEach (item => {
     item.addEventListener('click', function() {
       this.parentElement.classList.toggle('is-active');
     })
   })
};

select();