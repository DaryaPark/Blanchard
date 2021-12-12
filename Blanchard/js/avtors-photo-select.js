document.addEventListener('DOMContentLoaded',function(){
    const tabs = document.querySelectorAll('.surname-list__btn');
    let activeButton= tabs[0];
    tabs.forEach(function(tabsBtn){
      tabsBtn.addEventListener ('click' ,function(event){
        activeButton && activeButton.classList.remove("surname-list__btn-active")
        activeButton = event.currentTarget
        activeButton.classList.add("surname-list__btn-active")
  
        const path = event.currentTarget.dataset.path
  
        document.querySelectorAll('.catalog-picture').forEach(function(tabContent){
          tabContent.classList.toggle('catalog-picture-active');
        })
      document.querySelector(`[data-target="${path}"]`).classList.add("catalog-picture-active");
    })

  })
  })


  
  
  
  
  

