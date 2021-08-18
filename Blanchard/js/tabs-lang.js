document.addEventListener('DOMContentLoaded',function(){
    const tabs = document.querySelectorAll('.tabs__btn-lang');
    let activeButton= tabs[0];
    tabs.forEach(function(tabsBtn){
      tabsBtn.addEventListener('click' ,function(event){
        activeButton && activeButton.classList.remove("tabs__btn-active-lang")
        activeButton = event.currentTarget
        activeButton.classList.add("tabs__btn-active-lang")
  
        const path = event.currentTarget.dataset.path
  
        document.querySelectorAll('.tab-content-lang').forEach(function(tabContent){
          tabContent.classList.remove('tab-content-active-lang')
        })
      document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-active-lang")
      })
  
  })
  
  })
  
  