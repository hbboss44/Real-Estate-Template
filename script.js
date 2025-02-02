let popUp=document.querySelector(".popup-container")
let none=()=>{
    popUp.style.display="none"
    document.body.style.overflow='auto'

}
let contains=document.querySelector(".jsCont")
    let requestSponsors=new XMLHttpRequest
    let url3='location.json'
    requestSponsors.open("GET",url3,true)
    requestSponsors.send()
    requestSponsors.onload=()=>{
        let parsedSponsors=JSON.parse(requestSponsors.response)
        let arrSponsors=[]
        arrSponsors.push(parsedSponsors.sponsors)
        console.log(arrSponsors[0]);
        for (let i = 0; i < 5; i++) {
            let createSpan=document.createElement("span")
            createSpan.style.transitionDuration="3000ms"
            // createSpan.style.transform="translate3d(-525.2px, 0px, 0px)"
            let createImage=document.createElement("img")
            createImage.style.width="182px"
            createImage.style.height="44px"
            createImage.src=arrSponsors[0][i].image
            createSpan.append(createImage)
            contains.append(createSpan) 
            setInterval(() => {
                let removed= arrSponsors[0].shift()
                createImage.src=arrSponsors[0][i].image

                // createSpan.style.transform="translate3d(-525.2px, 0px, 0px)"
                arrSponsors[0].push(removed)

            }, 5000);           
        }
        
        
    }

let x=window.matchMedia("(max-width:700px)")
console.log(x);
if (!x.matches) {
    let arr=["Explore Our Exciting New Property Listings Now Available in Prime Locations!","Join Us for Exclusive Open House Events This Weekend and Find Your Perfect Home!",'Discover Your Dream Home with Our Latest Listings and Personalized Services!',"Take Advantage of Limited-Time Offers on Luxury Homes with Stunning Features!"]
let pTags=document.querySelectorAll("p")
let display0=pTags[1].textContent=arr.shift()
arr.push(display0)

let allSpan=document.querySelectorAll("span")

setInterval(() => {
    let display=pTags[1].textContent=arr.shift()
    arr.push(display)
}, 5000);



setTimeout(() => {
    popUp.style.display="block"
    document.body.style.overflow='hidden'

}, 4000);







allSpan[3].addEventListener("click",()=>{
let display1=pTags[1].textContent=arr.shift()
arr.push(display1)
})

allSpan[2].addEventListener("click",()=>{
let display2=pTags[1].textContent=arr.pop()
arr.unshift(display2)
})

let usdDrop=document.querySelector(".dropdown")
let usdSubMenu=document.querySelector(".dropdown-menu")

let language=document.querySelector(".dropdown2")
let languageSubMenu=document.querySelector(".dropdown-menu2")
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


let requesting=new XMLHttpRequest
let url='file.json'
requesting.open("GET",url,true)
requesting.send()

let profie=document.querySelectorAll(".profi")
let navigationProfile=document.querySelectorAll(".navigation")

requesting.onload=()=>{
    let receivedFile=JSON.parse(requesting.response)
    let ArrayFile=[]
    ArrayFile.push(...receivedFile)

    profie[0].children[0].children[0].children[0].innerHTML=ArrayFile[0].star1
    profie[0].children[0].children[0].children[1].innerHTML=ArrayFile[0].star2
    profie[0].children[0].children[0].children[2].innerHTML=ArrayFile[0].star3
    profie[0].children[0].children[0].children[3].innerHTML=ArrayFile[0].star4
    profie[0].children[0].children[0].children[4].innerHTML=ArrayFile[0].star5  
    profie[0].children[1].textContent=ArrayFile[0].p
    profie[0].children[2].children[0].src=ArrayFile[0].profileImage  
    profie[0].children[2].children[1].children[0].textContent=ArrayFile[0].profileName
    profie[0].children[2].children[1].children[1].textContent=ArrayFile[0].profileBio


    profie[1].children[0].children[0].children[0].innerHTML=ArrayFile[1].star1
    profie[1].children[0].children[0].children[1].innerHTML=ArrayFile[1].star2
    profie[1].children[0].children[0].children[2].innerHTML=ArrayFile[1].star3
    profie[1].children[0].children[0].children[3].innerHTML=ArrayFile[1].star4
    profie[1].children[0].children[0].children[4].innerHTML=ArrayFile[1].star5  
    profie[1].children[1].textContent=ArrayFile[1].p
    profie[1].children[2].children[0].src=ArrayFile[1].profileImage  
    profie[1].children[2].children[1].children[0].textContent=ArrayFile[1].profileName
    profie[1].children[2].children[1].children[1].textContent=ArrayFile[1].profileBio

    setInterval(() => {
        profie[0].children[0].children[0].children[0].innerHTML=ArrayFile[0].star1
        profie[0].children[0].children[0].children[1].innerHTML=ArrayFile[0].star2
        profie[0].children[0].children[0].children[2].innerHTML=ArrayFile[0].star3
        profie[0].children[0].children[0].children[3].innerHTML=ArrayFile[0].star4
        profie[0].children[0].children[0].children[4].innerHTML=ArrayFile[0].star5  
        profie[0].children[1].textContent=ArrayFile[0].p
        profie[0].children[2].children[0].src=ArrayFile[0].profileImage  
        profie[0].children[2].children[1].children[0].textContent=ArrayFile[0].profileName
        profie[0].children[2].children[1].children[1].textContent=ArrayFile[0].profileBio

        let clearInitial=ArrayFile.shift()
        profie[1].children[0].children[0].children[0].innerHTML=ArrayFile[0].star1
        profie[1].children[0].children[0].children[1].innerHTML=ArrayFile[0].star2
        profie[1].children[0].children[0].children[2].innerHTML=ArrayFile[0].star3
        profie[1].children[0].children[0].children[3].innerHTML=ArrayFile[0].star4
        profie[1].children[0].children[0].children[4].innerHTML=ArrayFile[0].star5  
        profie[1].children[1].textContent=ArrayFile[0].p
        profie[1].children[2].children[0].src=ArrayFile[0].profileImage  
        profie[1].children[2].children[1].children[0].textContent=ArrayFile[0].profileName
        profie[1].children[2].children[1].children[1].textContent=ArrayFile[0].profileBio
        ArrayFile.push(clearInitial)
        
    }, 4000);
    navigationProfile[0].children[1].addEventListener("click",()=>{
        profie[0].children[0].children[0].children[0].innerHTML=ArrayFile[0].star1
        profie[0].children[0].children[0].children[1].innerHTML=ArrayFile[0].star2
        profie[0].children[0].children[0].children[2].innerHTML=ArrayFile[0].star3
        profie[0].children[0].children[0].children[3].innerHTML=ArrayFile[0].star4
        profie[0].children[0].children[0].children[4].innerHTML=ArrayFile[0].star5  
        profie[0].children[1].textContent=ArrayFile[0].p
        profie[0].children[2].children[0].src=ArrayFile[0].profileImage  
        profie[0].children[2].children[1].children[0].textContent=ArrayFile[0].profileName
        profie[0].children[2].children[1].children[1].textContent=ArrayFile[0].profileBio

        let clearInitial=ArrayFile.shift()
        profie[1].children[0].children[0].children[0].innerHTML=ArrayFile[0].star1
        profie[1].children[0].children[0].children[1].innerHTML=ArrayFile[0].star2
        profie[1].children[0].children[0].children[2].innerHTML=ArrayFile[0].star3
        profie[1].children[0].children[0].children[3].innerHTML=ArrayFile[0].star4
        profie[1].children[0].children[0].children[4].innerHTML=ArrayFile[0].star5  
        profie[1].children[1].textContent=ArrayFile[0].p
        profie[1].children[2].children[0].src=ArrayFile[0].profileImage  
        profie[1].children[2].children[1].children[0].textContent=ArrayFile[0].profileName
        profie[1].children[2].children[1].children[1].textContent=ArrayFile[0].profileBio
        ArrayFile.push(clearInitial)
        
    })
    navigationProfile[0].children[0].addEventListener("click",()=>{
       let clrr=ArrayFile.pop()
       ArrayFile.unshift(clrr)

        profie[0].children[0].children[0].children[0].innerHTML=ArrayFile[0].star1
        profie[0].children[0].children[0].children[1].innerHTML=ArrayFile[0].star2
        profie[0].children[0].children[0].children[2].innerHTML=ArrayFile[0].star3
        profie[0].children[0].children[0].children[3].innerHTML=ArrayFile[0].star4
        profie[0].children[0].children[0].children[4].innerHTML=ArrayFile[0].star5  
        profie[0].children[1].textContent=ArrayFile[0].p
        profie[0].children[2].children[0].src=ArrayFile[0].profileImage  
        profie[0].children[2].children[1].children[0].textContent=ArrayFile[0].profileName
        profie[0].children[2].children[1].children[1].textContent=ArrayFile[0].profileBio


        profie[1].children[0].children[0].children[0].innerHTML=ArrayFile[1].star1
        profie[1].children[0].children[0].children[1].innerHTML=ArrayFile[1].star2
        profie[1].children[0].children[0].children[2].innerHTML=ArrayFile[1].star3
        profie[1].children[0].children[0].children[3].innerHTML=ArrayFile[1].star4
        profie[1].children[0].children[0].children[4].innerHTML=ArrayFile[1].star5  
        profie[1].children[1].textContent=ArrayFile[1].p
        profie[1].children[2].children[0].src=ArrayFile[1].profileImage  
        profie[1].children[2].children[1].children[0].textContent=ArrayFile[1].profileName
        profie[1].children[2].children[1].children[1].textContent=ArrayFile[1].profileBio
    })
}

let view=document.querySelector(".view")
view.addEventListener("click",()=>{
    location.assign("https://homzen.botble.com/properties")
})


let locationFile=new XMLHttpRequest
let url2='location.json'
locationFile.open("GET",url2,true)
locationFile.send()

let locationNavigation=document.querySelector(".navigations")
let locationCountry=document.querySelector(".country")
console.log(locationNavigation.children);

locationFile.onload=()=>{
    let file1=JSON.parse(locationFile.response)
    
    locationCountry.children[0].style.backgroundImage="url"+"("+file1.location[0].backgroundImage+")"
    locationCountry.children[0].children[0].children[0].textContent=file1.location[0].text

    locationCountry.children[1].style.backgroundImage="url"+"("+file1.location[1].backgroundImage+")"
    locationCountry.children[1].children[0].children[0].textContent=file1.location[1].text


    locationCountry.children[2].style.backgroundImage="url"+"("+file1.location[2].backgroundImage+")"
    locationCountry.children[2].children[0].children[0].textContent=file1.location[2].text

    setInterval(() => {
        locationCountry.children[0].style.backgroundImage="url"+"("+file1.location[0].backgroundImage+")"
        locationCountry.children[0].children[0].children[0].textContent=file1.location[0].text

        let shiftedFile=file1.location.shift()
        locationCountry.children[1].style.backgroundImage="url"+"("+file1.location[0].backgroundImage+")"
        locationCountry.children[1].children[0].children[0].textContent=file1.location[0].text

        locationCountry.children[2].style.backgroundImage="url"+"("+file1.location[1].backgroundImage+")"
        locationCountry.children[2].children[0].children[0].textContent=file1.location[1].text

        file1.location.push(shiftedFile)
    }, 5000);
    locationNavigation.children[1].addEventListener("click",()=>{
        locationCountry.children[0].style.backgroundImage="url"+"("+file1.location[0].backgroundImage+")"
        locationCountry.children[0].children[0].children[0].textContent=file1.location[0].text

        let shiftedFile=file1.location.shift()
        locationCountry.children[1].style.backgroundImage="url"+"("+file1.location[0].backgroundImage+")"
        locationCountry.children[1].children[0].children[0].textContent=file1.location[0].text

        locationCountry.children[2].style.backgroundImage="url"+"("+file1.location[1].backgroundImage+")"
        locationCountry.children[2].children[0].children[0].textContent=file1.location[1].text

        file1.location.push(shiftedFile)
    })

    locationNavigation.children[0].addEventListener("click",()=>{
        let shiftedFile1=file1.location.pop()
        file1.location.unshift(shiftedFile1)
        locationCountry.children[0].style.backgroundImage="url"+"("+file1.location[0].backgroundImage+")"
        locationCountry.children[0].children[0].children[0].textContent=file1.location[0].text

        locationCountry.children[1].style.backgroundImage="url"+"("+file1.location[1].backgroundImage+")"
        locationCountry.children[1].children[0].children[0].textContent=file1.location[1].text


        locationCountry.children[2].style.backgroundImage="url"+"("+file1.location[2].backgroundImage+")"
        locationCountry.children[2].children[0].children[0].textContent=file1.location[2].text
    })
}

let heartButton=document.querySelectorAll(".heartButton")
let whishlist=document.querySelector(".drops a")
let whishlistCount=0
console.log(whishlist);
allSpan[4].innerHTML=whishlistCount
console.log(allSpan[4]);



let buttonPopUp=document.querySelector(".bottomPop-up")
let home=document.querySelector(".allBuilding")




for (let i = 0; i < heartButton.length; i++) {
    heartButton[i].addEventListener("click",()=>{
        heartButton[i].children[0].classList.toggle("none1")
        heartButton[i].children[1].classList.toggle("none1")
        if (!heartButton[i].children[1].className.includes("none1")) {
            whishlistCount++
            allSpan[4].innerHTML=whishlistCount
            
           let divWrap=document.createElement("div")
           let firstDiv=document.createElement("div")

           let inSpan=document.createElement("span")
           inSpan.innerHTML='<i class="fa-solid fa-check"></i>'

           let inSpan2=document.createElement("span")
           inSpan2.innerHTML='<i class="fa-solid fa-x"></i>'

           firstDiv.append(inSpan,inSpan2)
           let secondDiv=document.createElement("div")
           divWrap.append(firstDiv,secondDiv)
            let inP=document.createElement("p")
            secondDiv.append(inP)
            buttonPopUp.append(divWrap)

    for (let i = 0; i < home.children.length; i++) {
        home.children[i].addEventListener("click",()=>{
            inP.innerHTML="Added "+'"'+home.children[i].children[1].children[0].children[0].innerHTML+'"'+" to wishlist successfully!"          
        })
        
    }
    setTimeout(() => {
        divWrap.style.display="flex"
    }, 0);


    setTimeout(() => {
        divWrap.style.display="none"

    }, 3000);
}
else{
    console.log("we");
    whishlistCount--
            allSpan[4].innerHTML=whishlistCount
            
           let divWrap=document.createElement("div")
           let firstDiv=document.createElement("div")

           let inSpan=document.createElement("span")
           inSpan.innerHTML='<i class="fa-solid fa-check"></i>'

           let inSpan2=document.createElement("span")
           inSpan2.innerHTML='<i class="fa-solid fa-x"></i>'

           firstDiv.append(inSpan,inSpan2)
           let secondDiv=document.createElement("div")
           divWrap.append(firstDiv,secondDiv)
            let inP=document.createElement("p")
            secondDiv.append(inP)
            buttonPopUp.append(divWrap)

    for (let i = 0; i < home.children.length; i++) {
        home.children[i].addEventListener("click",()=>{
            inP.innerHTML="Removed "+'"'+home.children[i].children[1].children[0].children[0].innerHTML+'"'+" from wishlist successfully!"          
        })
        
    }
    setTimeout(() => {
        divWrap.style.display="flex"
    }, 0);


    setTimeout(() => {
        divWrap.style.display="none"

    }, 3000);
    
}
            })
} 
    // inside the if statement
    // 

}


// the main else condition for media query
else{
    
    let requesting=new XMLHttpRequest
    let url='file.json'
    requesting.open("GET",url,true)
    requesting.send()
    
    let profie=document.querySelectorAll(".profi")
    let navigationProfile=document.querySelectorAll(".navigation")
    
    requesting.onload=()=>{
        let receivedFile=JSON.parse(requesting.response)
        let ArrayFile=[]
        ArrayFile.push(...receivedFile)
    
        profie[0].children[0].children[0].children[0].innerHTML=ArrayFile[0].star1
        profie[0].children[0].children[0].children[1].innerHTML=ArrayFile[0].star2
        profie[0].children[0].children[0].children[2].innerHTML=ArrayFile[0].star3
        profie[0].children[0].children[0].children[3].innerHTML=ArrayFile[0].star4
        profie[0].children[0].children[0].children[4].innerHTML=ArrayFile[0].star5  
        profie[0].children[1].textContent=ArrayFile[0].p
        profie[0].children[2].children[0].src=ArrayFile[0].profileImage  
        profie[0].children[2].children[1].children[0].textContent=ArrayFile[0].profileName
        profie[0].children[2].children[1].children[1].textContent=ArrayFile[0].profileBio
    
    
        profie[1].children[0].children[0].children[0].innerHTML=ArrayFile[1].star1
        profie[1].children[0].children[0].children[1].innerHTML=ArrayFile[1].star2
        profie[1].children[0].children[0].children[2].innerHTML=ArrayFile[1].star3
        profie[1].children[0].children[0].children[3].innerHTML=ArrayFile[1].star4
        profie[1].children[0].children[0].children[4].innerHTML=ArrayFile[1].star5  
        profie[1].children[1].textContent=ArrayFile[1].p
        profie[1].children[2].children[0].src=ArrayFile[1].profileImage  
        profie[1].children[2].children[1].children[0].textContent=ArrayFile[1].profileName
        profie[1].children[2].children[1].children[1].textContent=ArrayFile[1].profileBio
    
        setInterval(() => {
            profie[0].children[0].children[0].children[0].innerHTML=ArrayFile[0].star1
            profie[0].children[0].children[0].children[1].innerHTML=ArrayFile[0].star2
            profie[0].children[0].children[0].children[2].innerHTML=ArrayFile[0].star3
            profie[0].children[0].children[0].children[3].innerHTML=ArrayFile[0].star4
            profie[0].children[0].children[0].children[4].innerHTML=ArrayFile[0].star5  
            profie[0].children[1].textContent=ArrayFile[0].p
            profie[0].children[2].children[0].src=ArrayFile[0].profileImage  
            profie[0].children[2].children[1].children[0].textContent=ArrayFile[0].profileName
            profie[0].children[2].children[1].children[1].textContent=ArrayFile[0].profileBio
    
            let clearInitial=ArrayFile.shift()
            profie[1].children[0].children[0].children[0].innerHTML=ArrayFile[0].star1
            profie[1].children[0].children[0].children[1].innerHTML=ArrayFile[0].star2
            profie[1].children[0].children[0].children[2].innerHTML=ArrayFile[0].star3
            profie[1].children[0].children[0].children[3].innerHTML=ArrayFile[0].star4
            profie[1].children[0].children[0].children[4].innerHTML=ArrayFile[0].star5  
            profie[1].children[1].textContent=ArrayFile[0].p
            profie[1].children[2].children[0].src=ArrayFile[0].profileImage  
            profie[1].children[2].children[1].children[0].textContent=ArrayFile[0].profileName
            profie[1].children[2].children[1].children[1].textContent=ArrayFile[0].profileBio
            ArrayFile.push(clearInitial)
            
        }, 4000);
        navigationProfile[0].children[1].addEventListener("click",()=>{
            profie[0].children[0].children[0].children[0].innerHTML=ArrayFile[0].star1
            profie[0].children[0].children[0].children[1].innerHTML=ArrayFile[0].star2
            profie[0].children[0].children[0].children[2].innerHTML=ArrayFile[0].star3
            profie[0].children[0].children[0].children[3].innerHTML=ArrayFile[0].star4
            profie[0].children[0].children[0].children[4].innerHTML=ArrayFile[0].star5  
            profie[0].children[1].textContent=ArrayFile[0].p
            profie[0].children[2].children[0].src=ArrayFile[0].profileImage  
            profie[0].children[2].children[1].children[0].textContent=ArrayFile[0].profileName
            profie[0].children[2].children[1].children[1].textContent=ArrayFile[0].profileBio
    
            let clearInitial=ArrayFile.shift()
            profie[1].children[0].children[0].children[0].innerHTML=ArrayFile[0].star1
            profie[1].children[0].children[0].children[1].innerHTML=ArrayFile[0].star2
            profie[1].children[0].children[0].children[2].innerHTML=ArrayFile[0].star3
            profie[1].children[0].children[0].children[3].innerHTML=ArrayFile[0].star4
            profie[1].children[0].children[0].children[4].innerHTML=ArrayFile[0].star5  
            profie[1].children[1].textContent=ArrayFile[0].p
            profie[1].children[2].children[0].src=ArrayFile[0].profileImage  
            profie[1].children[2].children[1].children[0].textContent=ArrayFile[0].profileName
            profie[1].children[2].children[1].children[1].textContent=ArrayFile[0].profileBio
            ArrayFile.push(clearInitial)
            
        })
        navigationProfile[0].children[0].addEventListener("click",()=>{
           let clrr=ArrayFile.pop()
           ArrayFile.unshift(clrr)
    
            profie[0].children[0].children[0].children[0].innerHTML=ArrayFile[0].star1
            profie[0].children[0].children[0].children[1].innerHTML=ArrayFile[0].star2
            profie[0].children[0].children[0].children[2].innerHTML=ArrayFile[0].star3
            profie[0].children[0].children[0].children[3].innerHTML=ArrayFile[0].star4
            profie[0].children[0].children[0].children[4].innerHTML=ArrayFile[0].star5  
            profie[0].children[1].textContent=ArrayFile[0].p
            profie[0].children[2].children[0].src=ArrayFile[0].profileImage  
            profie[0].children[2].children[1].children[0].textContent=ArrayFile[0].profileName
            profie[0].children[2].children[1].children[1].textContent=ArrayFile[0].profileBio
    
    
            profie[1].children[0].children[0].children[0].innerHTML=ArrayFile[1].star1
            profie[1].children[0].children[0].children[1].innerHTML=ArrayFile[1].star2
            profie[1].children[0].children[0].children[2].innerHTML=ArrayFile[1].star3
            profie[1].children[0].children[0].children[3].innerHTML=ArrayFile[1].star4
            profie[1].children[0].children[0].children[4].innerHTML=ArrayFile[1].star5  
            profie[1].children[1].textContent=ArrayFile[1].p
            profie[1].children[2].children[0].src=ArrayFile[1].profileImage  
            profie[1].children[2].children[1].children[0].textContent=ArrayFile[1].profileName
            profie[1].children[2].children[1].children[1].textContent=ArrayFile[1].profileBio
        })
    }


    let locationFile=new XMLHttpRequest
    let url2='location.json'
    locationFile.open("GET",url2,true)
    locationFile.send()
    
    let locationNavigation=document.querySelector(".navigations")
    let locationCountry=document.querySelector(".country")
    console.log(locationNavigation.children);
    
    locationFile.onload=()=>{
        let file1=JSON.parse(locationFile.response)
        console.log(file1);
        locationCountry.children[0].style.backgroundImage="url"+"("+file1.location[0].backgroundImage+")"
        locationCountry.children[0].children[0].children[0].textContent=file1.location[0].text
    
        locationCountry.children[1].style.backgroundImage="url"+"("+file1.location[1].backgroundImage+")"
        locationCountry.children[1].children[0].children[0].textContent=file1.location[1].text
    
    
        locationCountry.children[2].style.backgroundImage="url"+"("+file1.location[2].backgroundImage+")"
        locationCountry.children[2].children[0].children[0].textContent=file1.location[2].text
    
        setInterval(() => {
            locationCountry.children[0].style.backgroundImage="url"+"("+file1.location[0].backgroundImage+")"
            locationCountry.children[0].children[0].children[0].textContent=file1.location[0].text
    
            let shiftedFile=file1.location.shift()
            locationCountry.children[1].style.backgroundImage="url"+"("+file1.location[0].backgroundImage+")"
            locationCountry.children[1].children[0].children[0].textContent=file1.location[0].text
    
            locationCountry.children[2].style.backgroundImage="url"+"("+file1.location[1].backgroundImage+")"
            locationCountry.children[2].children[0].children[0].textContent=file1.location[1].text
    
            file1.location.push(shiftedFile)
        }, 5000);
        locationNavigation.children[1].addEventListener("click",()=>{
            locationCountry.children[0].style.backgroundImage="url"+"("+file1.location[0].backgroundImage+")"
            locationCountry.children[0].children[0].children[0].textContent=file1.location[0].text
    
            let shiftedFile=file1.location.shift()
            locationCountry.children[1].style.backgroundImage="url"+"("+file1.location[0].backgroundImage+")"
            locationCountry.children[1].children[0].children[0].textContent=file1.location[0].text
    
            locationCountry.children[2].style.backgroundImage="url"+"("+file1.location[1].backgroundImage+")"
            locationCountry.children[2].children[0].children[0].textContent=file1.location[1].text
    
            file1.location.push(shiftedFile)
        })
    
        locationNavigation.children[0].addEventListener("click",()=>{
            let shiftedFile1=file1.location.pop()
            file1.location.unshift(shiftedFile1)
            locationCountry.children[0].style.backgroundImage="url"+"("+file1.location[0].backgroundImage+")"
            locationCountry.children[0].children[0].children[0].textContent=file1.location[0].text
    
            locationCountry.children[1].style.backgroundImage="url"+"("+file1.location[1].backgroundImage+")"
            locationCountry.children[1].children[0].children[0].textContent=file1.location[1].text
    
    
            locationCountry.children[2].style.backgroundImage="url"+"("+file1.location[2].backgroundImage+")"
            locationCountry.children[2].children[0].children[0].textContent=file1.location[2].text
        })
    }








// after    
let allSpan=document.querySelectorAll("span")

    let heartButton=document.querySelectorAll(".heartButton")
let whishlist=document.querySelector(".drops a")
let whishlistCount=0
console.log(whishlist);
allSpan[4].innerHTML=whishlistCount
console.log(allSpan[4]);



let buttonPopUp=document.querySelector(".bottomPop-up")
let home=document.querySelector(".allBuilding")




for (let i = 0; i < heartButton.length; i++) {
    heartButton[i].addEventListener("click",()=>{
        heartButton[i].children[0].classList.toggle("none1")
        heartButton[i].children[1].classList.toggle("none1")
        if (!heartButton[i].children[1].className.includes("none1")) {
            whishlistCount++
            allSpan[4].innerHTML=whishlistCount
            
           let divWrap=document.createElement("div")
           let firstDiv=document.createElement("div")

           let inSpan=document.createElement("span")
           inSpan.innerHTML='<i class="fa-solid fa-check"></i>'

           let inSpan2=document.createElement("span")
           inSpan2.innerHTML='<i class="fa-solid fa-x"></i>'

           firstDiv.append(inSpan,inSpan2)
           let secondDiv=document.createElement("div")
           divWrap.append(firstDiv,secondDiv)
            let inP=document.createElement("p")
            secondDiv.append(inP)
            buttonPopUp.append(divWrap)

    for (let i = 0; i < home.children.length; i++) {
        home.children[i].addEventListener("click",()=>{
            inP.innerHTML="Added "+'"'+home.children[i].children[1].children[0].children[0].innerHTML+'"'+" to wishlist successfully!"          
        })
        
    }
    setTimeout(() => {
        divWrap.style.display="flex"
    }, 0);


    setTimeout(() => {
        divWrap.style.display="none"

    }, 3000);
}
else{
    whishlistCount--
            allSpan[4].innerHTML=whishlistCount
            
           let divWrap=document.createElement("div")
           let firstDiv=document.createElement("div")

           let inSpan=document.createElement("span")
           inSpan.innerHTML='<i class="fa-solid fa-check"></i>'

           let inSpan2=document.createElement("span")
           inSpan2.innerHTML='<i class="fa-solid fa-x"></i>'

           firstDiv.append(inSpan,inSpan2)
           let secondDiv=document.createElement("div")
           divWrap.append(firstDiv,secondDiv)
            let inP=document.createElement("p")
            secondDiv.append(inP)
            buttonPopUp.append(divWrap)

    for (let i = 0; i < home.children.length; i++) {
        home.children[i].addEventListener("click",()=>{
            inP.innerHTML="Removed "+'"'+home.children[i].children[1].children[0].children[0].innerHTML+'"'+" from wishlist successfully!"          
        })
        
    }
    setTimeout(() => {
        divWrap.style.display="flex"
    }, 0);


    setTimeout(() => {
        divWrap.style.display="none"

    }, 3000);
    
}


            })
} 
// inside of the else statement


}




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

let findings=document.querySelector(".findings")
let findings2=document.querySelector(".finding")
let findingsArray=['Real Estate','Dream Home','Perfect Home']
setInterval(() => {
    findings.textContent=findingsArray[0]
    findings2.textContent=findingsArray[0]
    let shiftedArray= findingsArray.shift()
    findingsArray.push(shiftedArray)
}, 3000);
