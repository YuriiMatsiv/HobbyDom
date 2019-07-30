const carouselSlide = document.querySelector(".slider_slide");
const carouselImages = document.querySelectorAll(".slider_slide img");



//Button
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextBtn.addEventListener('click', ()=> {
    carouselSlide.style.transition = "transform 0.4s easy-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=> {
    carouselSlide.style.transition = "transform 0.4s easy-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});



// carouselSlide.addEventListener("transitionend", ()=> {
//     console.log("sdsfsdf");
// });
//     if (carouselImages[counter].id === 'lastClone') {
//
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length - 1;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
// });
//     if (carouselImages[counter].id === 'firstClone') {
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length - counter;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
//     ;



