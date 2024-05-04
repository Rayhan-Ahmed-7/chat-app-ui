let navList = document.querySelectorAll("li")

navList.forEach((el)=>{
    el.addEventListener("click",()=>{
        navList.forEach((e)=>e.classList.remove("active"))
        el.classList.add("active")
    })
})