document.addEventListener('DOMContentLoaded',function(){
  const tabs = document.querySelectorAll('.tabs__btn');
  let activeButton= tabs[0];
  tabs.forEach(function(tabsBtn){
    tabsBtn.addEventListener('click' ,function(event){
      activeButton && activeButton.classList.remove("tabs__btn-active")
      activeButton = event.currentTarget
      activeButton.classList.add("tabs__btn-active")

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function(tabContent){
        tabContent.classList.remove('tab-content-active')
      })
    document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-active")
    })

})

})


