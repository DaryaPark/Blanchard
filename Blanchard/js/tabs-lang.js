document.addEventListener('DOMContentLoaded',function(){
    const tabs = document.querySelectorAll('.lang-list__item__btn');
    let activeButton= tabs[0];
    tabs.forEach(function(tabsBtn){
      tabsBtn.addEventListener('click' ,function(event){
        activeButton && activeButton.classList.remove("lang-list__item__btn-active")
        activeButton = event.currentTarget
        activeButton.classList.add("lang-list__item__btn-active")
  
        const path = event.currentTarget.dataset.path
  
        document.querySelectorAll('.select-list__item').forEach(function(tabContent){
          tabContent.classList.remove('tab-content-active-lang')
        })
      document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-active-lang")
      })
  
  })
  
  })
  
  