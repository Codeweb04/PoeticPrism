toggleBtn = document.querySelector("#toggle-btn") 
menuList = document.querySelector("#menu-list")
container = document.getElementsByClassName('container-div')[0]

toggleBtn.addEventListener('click', () => {
    menuList.classList.toggle("hide-menu")
    container.classList.toggle("marginleft")
    console.log(container)
})

