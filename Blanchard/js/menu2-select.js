document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".dropdown-menu__item__btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".dropdown-menu-container");
    
    document.querySelectorAll(".dropdown-menu__item__btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("active--btn");
      }
    });
    
    document.querySelectorAll(".dropdown-menu-container").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-dropdown-menu__item");
      }
    })
    dropdown.classList.toggle("active-dropdown-menu__item");
    btn.classList.toggle("active--btn")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".dropdown-menu__list")) {
    document.querySelectorAll(".dropdown-menu-container").forEach(el => {
        el.classList.remove("active-dropdown-menu__item");
    })
     document.querySelectorAll(".dropdown-menu__item__btn").forEach(el => {
        el.classList.remove("active--btn");
    });
  }
})
})