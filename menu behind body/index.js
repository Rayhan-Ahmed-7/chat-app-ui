let body = document.querySelector("body")
let btn = document.querySelector(".btn")
let nav = document.querySelector(".nav")

btn.addEventListener("click",()=>{
    body.classList.toggle("dark");
    nav.classList.toggle("open");
})