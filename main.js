const menuBtn = document.querySelector('.menu__btn i');
const menuBtnDiv = document.querySelector('.menu__btn');
console.log(menuBtnDiv);
const navbar = document.querySelector('.navbar');
const carouselContainer = document.querySelector('.carousel__container');
const leftArrow = document.querySelector('.slider__button .fa-chevron-left');
const rightArrow = document.querySelector('.slider__button .fa-chevron-right');
const heading = document.querySelector('.heading');
const description = document.querySelector('.description');

const carouselImage = [
    "images/mobile-image-hero-1.jpg",
    "images/mobile-image-hero-2.jpg",
    "images/mobile-image-hero-3.jpg",
]
let idx = 1;


// console.log(carouselImage[0]);

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('active');
    menuBtnDiv.classList.toggle('active');
});

leftArrow.addEventListener('click', () => {
    idx--
    console.log(idx);
    
    if(idx === 1){
        if(window.innerWidth >= 1000) {
            carouselContainer.style.background  = "url('images/desktop-image-hero-1.jpg') no-repeat";
        carouselContainer.style.backgroundSize = "cover";
        } else {

            carouselContainer.style.background  = "url('images/mobile-image-hero-1.jpg') no-repeat";
            carouselContainer.style.backgroundSize = "cover";
        }
        heading.innerText = "Discover innovative ways to decorate";
        description.innerText = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your  own style with our collection and make your property a reflection of you and what you love."
       


    } else if(idx === 2){
        if(window.innerWidth >= 1000) {
            carouselContainer.style.background  = "url('images/desktop-image-hero-2.jpg') no-repeat";
        carouselContainer.style.backgroundSize = "cover";
        } else {

            carouselContainer.style.background  = "url('images/mobile-image-hero-2.jpg') no-repeat";
            carouselContainer.style.backgroundSize = "cover";
        }
        // carouselContainer.style.backgroundSize = "cover";
        heading.innerText = "We are available all across the globe";
        description.innerText = "With stores all over the world, it's easy for you to find furniture for your home or place of business.  Locally, we're in most major cities throughout the country. Find the branch nearest you using our  store locator. Any questions? Don't hesitate to contact us today."
       

    } else if(idx === 3) {
        if(window.innerWidth >= 1000) {
            carouselContainer.style.background  = "url('images/desktop-image-hero-3.jpg') no-repeat";
            carouselContainer.style.backgroundSize = "cover";
        } else {

            carouselContainer.style.background  = "url('images/mobile-image-hero-3.jpg') no-repeat";
            carouselContainer.style.backgroundSize = "cover";
        }
        heading.innerText = "Manufactured with the best materials";
        description.innerText = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    } else if(idx >= 3) {
        if(window.innerWidth >= 1000) {
            carouselContainer.style.background  = "url('images/desktop-image-hero-1.jpg') no-repeat";
        carouselContainer.style.backgroundSize = "cover";
        } else {

            carouselContainer.style.background  = "url('images/mobile-image-hero-1.jpg') no-repeat";
            carouselContainer.style.backgroundSize = "cover";
        }
        heading.innerText = "Discover innovative ways to decorate";
        description.innerText = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your  own style with our collection and make your property a reflection of you and what you love."
        idx = 1;
    } else if(idx <= 0){
        if(window.innerWidth >= 1000) {
            carouselContainer.style.background  = "url('images/desktop-image-hero-3.jpg') no-repeat";
        carouselContainer.style.backgroundSize = "cover";
        } else {

            carouselContainer.style.background  = "url('images/mobile-image-hero-3.jpg') no-repeat";
            carouselContainer.style.backgroundSize = "cover";
        }
        heading.innerText = "Manufactured with the best materials";
        description.innerText = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        idx = 3;
    } else {
        return;
    }
//    console.log("it is working")
});



rightArrow.addEventListener('click', () => {
    idx++
    console.log(idx);
    if(idx === 1){
        if(window.innerWidth >= 1000) {
            carouselContainer.style.background  = "url('images/desktop-image-hero-1.jpg') no-repeat";
        carouselContainer.style.backgroundSize = "cover";
        } else {

            carouselContainer.style.background  = "url('images/mobile-image-hero-1.jpg') no-repeat";
            carouselContainer.style.backgroundSize = "cover";
        }
        heading.innerText = "Discover innovative ways to decorate";
        description.innerText = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your  own style with our collection and make your property a reflection of you and what you love."
    } else if(idx === 2){
        if(window.innerWidth >= 1000) {
            carouselContainer.style.background  = "url('images/desktop-image-hero-2.jpg') no-repeat";
        carouselContainer.style.backgroundSize = "cover";
        } else {

            carouselContainer.style.background  = "url('images/mobile-image-hero-2.jpg') no-repeat";
            carouselContainer.style.backgroundSize = "cover";
        }
        heading.innerText = "We are available all across the globe";
        description.innerText = "With stores all over the world, it's easy for you to find furniture for your home or place of business.  Locally, we're in most major cities throughout the country. Find the branch nearest you using our  store locator. Any questions? Don't hesitate to contact us today."
    } else if(idx === 3) {
        if(window.innerWidth >= 1000) {
            carouselContainer.style.background  = "url('images/desktop-image-hero-3.jpg') no-repeat";
        carouselContainer.style.backgroundSize = "cover";
        } else {

            carouselContainer.style.background  = "url('images/mobile-image-hero-3.jpg') no-repeat";
            carouselContainer.style.backgroundSize = "cover";
        }
        heading.innerText = "Manufactured with the best materials";
        description.innerText = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    } else if(idx >= 3) {
        if(window.innerWidth >= 1000) {
            carouselContainer.style.background  = "url('images/desktop-image-hero-1.jpg') no-repeat";
        carouselContainer.style.backgroundSize = "cover";
        } else {

            carouselContainer.style.background  = "url('images/mobile-image-hero-1.jpg') no-repeat";
            carouselContainer.style.backgroundSize = "cover";
        }
        heading.innerText = "Discover innovative ways to decorate";
        description.innerText = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your  own style with our collection and make your property a reflection of you and what you love."
        idx = 1;
    } else {
        return;
    }
    // console.log("Right Arrow clicked");
});