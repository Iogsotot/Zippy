let slides = document.querySelector('.video__slider__items').children;
let prevSlide = document.querySelector('.slider__control--left');
let nextSlide = document.querySelector('.slider__control--right');
let totalSlides = slides.length;

// реализация самого слайдера
function setStartOrder() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.order = i+1;
    }
}

setStartOrder ();

nextSlide.onclick = function () {
    sliding('next');
}
prevSlide.onclick = function () {
    sliding('prev');
}

function sliding(direction) {
    for (let j = 0; j < totalSlides; j++) {
        if (direction == 'prev') {
            slides[j].style.order++ ;
            if (slides[j].style.order > totalSlides) {
                slides[j].style.order = 1;
            }
        }
        else if (direction == 'next') {
            slides[j].style.order-- ;
            if (slides[j].style.order < 1) {
                slides[j].style.order = totalSlides;
            }
        }
    }    
}

// воспроизведение видео по клику
const videos = document.querySelectorAll('video');  
let playBtnAreas = document.querySelectorAll('.video .slider__item');
let showcases = document.querySelectorAll('.video .showcase');

for (let i = 0; i < playBtnAreas.length; i++) {
    playBtnAreas[i].onclick = function () {
        showcases[i].classList.add('none'); 
        videos[i].setAttribute('controls', true);
        if (videos[i].paused) {
            videos[i].play();
        } else if (videos[i].play) {
            videos[i].pause();
        }
    }
}





