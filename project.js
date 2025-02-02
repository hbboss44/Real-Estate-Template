let requestListing=new XMLHttpRequest
let url='location.json'
requestListing.open("GET",url,true)
requestListing.send()

let listings=document.querySelector(".listings")
let selction=document.querySelector(".custom-select")
console.log(selction.value);




requestListing.onload=()=>{
    let newArray=[]
    let parsedRequest=JSON.parse(requestListing.response)
    newArray.push(...parsedRequest.listing)
    console.log(newArray[0]);

    selction.addEventListener("change",()=>{
        let selected=selction.value
        
    })

    for (let i = 0; i < 12; i++) {
        let wrappedDiv=document.createElement("div")
        let divBox=document.createElement("div")
        divBox.classList.add("box")
        divBox.style.backgroundImage="url("+newArray[i].backgroundImage1+")"

        let topBox=document.createElement("div")
        topBox.classList.add("top-box")
        let featuredButton=document.createElement("button")
        featuredButton.textContent=newArray[i].buttonText

        let heartButton=document.createElement("button")
        heartButton.classList.add("heartButton")
        let firstSpan=document.createElement("span")
        firstSpan.innerHTML=newArray[i].displayingHeart

        let secondButton=document.createElement("span")
        secondButton.classList.add("none1")
        secondButton.innerHTML=newArray[i].hiddenHeart

        let seconDiv=document.createElement("div")
        let seconDivButton=document.createElement("button")
        seconDivButton.textContent=newArray[i].buttonPlace


        heartButton.append(firstSpan,secondButton)
        topBox.append(featuredButton,heartButton)
        seconDiv.append(seconDivButton)
        divBox.append(topBox,seconDiv)


        let home=document.createElement("div")
        home.classList.add("home")
        let homeh1=document.createElement("h1")
        let homeh1a=document.createElement("a")
        homeh1a.textContent=newArray[i].locationPlace

        let homeIcon=document.createElement("div")
        homeIcon.classList.add("icon")
        let homeIconP=document.createElement("p")
        homeIconP.textContent=newArray[i].mainLocation
        let iconspan=document.createElement("span")
        iconspan.innerHTML=newArray[i].locationIcon

        homeIcon.append(iconspan,homeIconP)


        homeh1.append(homeh1a)
        home.append(homeh1,homeIcon)


        let profile=document.createElement("div")
        profile.classList.add("profile")
        let profileDiv=document.createElement("div")
        let profileh2=document.createElement("h2")
        profileh2.textContent=newArray[i].amount

        profileDiv.append(profileh2)
        profile.append(profileDiv)



        wrappedDiv.append(divBox,home,profile)
        listings.append(wrappedDiv)
        
    }
    
}

//mobile menu




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
