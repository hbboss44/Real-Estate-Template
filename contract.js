
let usdDrop=document.querySelector(".mobileDropdown")
let usdSubMenu=document.querySelector(".mobileDropMenu")

let language=document.querySelector(".mobileDropdown2")
let languageSubMenu=document.querySelector(".mobileDropMenu2")
console.log(usdDrop);

usdDrop.addEventListener("click",(e)=>{
    e.preventDefault()
    usdSubMenu.classList.toggle("display")
    if (usdSubMenu.className.includes("display")==true) {
    languageSubMenu.classList.remove("display")
}   
    
})

language.addEventListener("click",(e)=>{
    e.preventDefault()
    languageSubMenu.classList.toggle("display")
    if (languageSubMenu.className.includes("display")==true) {
    usdSubMenu.classList.remove("display")
}
})

let closemenu=document.querySelector(".bars")
let dropDowns=document.querySelector(".mobileDropDown")
closemenu.addEventListener("click",()=>{
    dropDowns.style.display="block"
    closemenu.classList.toggle('tog')
    closemenu.innerHTML='<i class="fa-solid fa-x"></i>'
    
    console.log();
    if (!closemenu.className.includes("tog")) {
        dropDowns.style.display="none"
        closemenu.innerHTML='<i class="fa-solid fa-bars"></i>'
    }
    
})
