const slides = document.querySelectorAll('.slide');
const endScreen = document.querySelector('.end-message');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  if (index < slides.length) {
    slides[index].classList.add('active');
  } else {
    endScreen.style.opacity = "1";
    endScreen.style.visibility = "visible";
  }
}

document.body.addEventListener('click', () => {
  currentSlide++;
  showSlide(currentSlide);
});

function replaySlides() {
  currentSlide = 0;
  endScreen.style.opacity = "0";
  endScreen.style.visibility = "hidden";
  showSlide(currentSlide);
}

window.addEventListener('click', () => {
  document.getElementById('bg-music').play();
}, { once: true });

showSlide(currentSlide);
