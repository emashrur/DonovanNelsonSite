let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;
const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls'); 
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

function showNextSlide() {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

function updateCarousel() {
  const newTransformValue = -currentIndex * 100 + "%";
  document.querySelector(".carousel-inner").style.transform =
    "translateX(" + newTransformValue + ")";
}

setInterval(showNextSlide, 3000);



class Carousel {


  constructor(container, items, controls) {
    this.carouselContainer = container; 
    this.carouselControls = controls; 
    this.carouselArray = [...items];
  }

  updateGallery(){
    this.carouselArray.forEach(el => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
    });

    this.carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i+1}`);
    });
  }

}
