const menu = document.querySelector(".menu")
const link = document.querySelector(".link")
const cross = document.querySelector(".cross")
const list = document.querySelector(".list")

menu.addEventListener("click",()=>{

link.classList.toggle("active")
})
cross.addEventListener("click",()=>{

    link.classList.remove("active")
})