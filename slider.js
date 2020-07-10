let slides = document.querySelector(".video__slider__items").children;
let prevSlide = document.querySelector(".slider__control--left");
let nextSlide = document.querySelector(".slider__control--right");
let totalSlides = slides.length;
let index = 0; 

function setStartOrder() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.order = i+1;
        console.log("слайд № " + i + " имеет order - " + slides[i].style.order);
    }
}

setStartOrder ();

nextSlide.onclick = function () {
    sliding("next");
}
prevSlide.onclick = function () {
    sliding("prev");
}

function sliding(direction) {
    for (let j = 0; j < totalSlides; j++) {
        if (direction == "prev") {
            slides[j].style.order++ ;
            if (slides[j].style.order > totalSlides) {
                slides[j].style.order = 1;
                console.log("мы дошли до края!")
            }
            console.log("NEW! слайд № " + j + " имеет order - " + slides[j].style.order)
        }
        else if (direction == "next") {
            slides[j].style.order-- ;
            if (slides[j].style.order < 1) {
                slides[j].style.order = totalSlides;
                console.log("мы дошли до края!")
            }
            console.log("NEW! слайд № " + j + " имеет order - " + slides[j].style.order)
        }
    }    
}
