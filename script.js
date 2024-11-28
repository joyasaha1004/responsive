const menu = document.querySelector(".menu")
const cross = document.querySelector(".cross")
const nav = document.querySelector(".nav")

menu.addEventListener("click",()=>{

    nav.classList.toggle("active")
})
cross.addEventListener("click",()=>{

    nav.classList.remove("active")
})