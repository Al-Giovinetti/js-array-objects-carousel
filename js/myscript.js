const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let divCarousel = document.querySelector("div.carousel")

// Fai un iterazione per tutta la lunghezza dell' arrey
images.forEach((element,index)=>{
    const divImgCarousel = document.createElement("div")
    divImgCarousel.innerHTML=
    `
    <img src="${element.image}" alt="${element.title}">
    ` 
    divImgCarousel.classList.add("img-space")
    divCarousel.append(divImgCarousel)

    const divInfo = document.createElement("div")
    divInfo.innerHTML =
    `
    <h1>${element.title}</h1>
    <p>${element.text}</p>
    `
    divInfo.classList.add("info-zone","d-none")
    divCarousel.append(divInfo)
})
//Stabilisci l' immagine che sarà la prima ad apparire(active)
let  activeindex=3
document.querySelectorAll("div.img-space")[activeindex].classList.add("active")
document.querySelectorAll("div.info-zone")[activeindex].classList.add("active")

//Bottone di sx
const btnSwipeLeft = document.querySelector("div.swipe-left")
btnSwipeLeft.addEventListener("click",function(){
    if(activeindex == 0){
        activeindex = images.length -1 
    }else{
    activeindex = activeindex - 1
    }

    document.querySelector("div.img-space.active").classList.remove("active")
    document.querySelectorAll("div.img-space")[activeindex].classList.add("active")
    document.querySelector("div.info-zone.active").classList.remove("active")
    document.querySelectorAll("div.info-zone")[activeindex].classList.add("active")
    
})
//Bottone di dx
const btnSwipeRight = document.querySelector("div.swipe-right")
btnSwipeRight.addEventListener("click",function(){
    if(activeindex == images.length-1){
        activeindex = 0
    }else{
    activeindex = activeindex + 1
    }
    document.querySelector("div.img-space.active").classList.remove("active")
    document.querySelectorAll("div.img-space")[activeindex].classList.add("active")
    document.querySelector("div.info-zone.active").classList.remove("active")
    document.querySelectorAll("div.info-zone")[activeindex].classList.add("active")
    
})

 