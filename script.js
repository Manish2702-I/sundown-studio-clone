let elem = document.querySelector(".elem-container")
let fixed = document.querySelector(".fixed-image")
elem.addEventListener("mouseenter",function(){
    fixed.style.display ="block"
})
elem.addEventListener("mouseleave",function(){
    fixed.style.display ="none"
})

let org = document.querySelectorAll(".org")
org.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        let image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})