const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');
const indicatorsContainer = document.querySelector('.indicators');

let slideIndex = 0;

// Додавання індикаторів
slides.forEach((_, index) => {
    const indicator = document.createElement('span');
    indicator.classList.add('indicator');
    indicator.addEventListener('click', () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.indicator');

function goToSlide(index) {
    slideIndex = index;
    updateCarousel();
}

function updateCarousel() {
    carousel.style.transform = `translateX(${-slideIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
        if (index === slideIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.length;
    updateCarousel();
});

// Автоматичне перемикання слайдів
setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    updateCarousel();
}, 5000);