const track = document.querySelector('.card__container');
const prevButton = document.querySelector('.carousel-button--prev');
const nextButton = document.querySelector('.carousel-button--next');

let currentSlide = 0;
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;

// Position slides for overlap
slides.forEach((slide, index) => {
  slide.style.left = `${index * slideWidth}px`;
});

// Move Carousel
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
};

// Previous Button
prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    moveToSlide(track, currentSlide, slides[currentSlide]);
  }
});

// Next Button
nextButton.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    moveToSlide(track, currentSlide, slides[currentSlide]);
  }
});
