document.addEventListener('DOMContentLoaded',function(){
    const tabs = document.querySelectorAll('.famous-people-link');
    let activeButton= tabs[0];
    tabs.forEach(function(tabsBtn){
      tabsBtn.addEventListener('click' ,function(event){
        activeButton && activeButton.classList.remove("famous-people-link-active")
        activeButton = event.currentTarget
        activeButton.classList.add("famous-people-link-active")
  
        const path = event.currentTarget.dataset.path
  
        document.querySelectorAll('.catalog-picture').forEach(function(tabContent){
          tabContent.classList.remove('catalog-picture-active')
        })
      document.querySelector(`[data-target="${path}"]`).classList.add("catalog-picture-active")
      })
  
  })
  
  })


  
  
  
  
  

//   tabs__btn = famous-people-link
//   tabs__btn-active = famous-people-link-active
//   btn-reset =famous-people-link-reset
//   tabs__item= famous-people-btn

//   tab-content =  catalog-picture 
//   tab-content-active  = catalog-picture-active
 
