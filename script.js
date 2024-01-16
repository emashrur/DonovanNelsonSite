let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

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
