toggleBtn = document.querySelector("#toggle-btn") 
menuList = document.querySelector("#menu-list")

toggleBtn.addEventListener('click', () => {
    menuList.classList.toggle("hide-menu")
})

