const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
    const totalSlides = slide.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prev.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});