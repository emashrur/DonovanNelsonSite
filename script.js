let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;
const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls'); 
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

const images = [
  "images/Portraits/Otto Neals 40x30 Oil.JPG",
  "images/Portraits/Frank Wimerley.JPG",
  "images/Portraits/Bishop Hunter 36 x48 oil 2005.jpg",
  "images/Portraits/Nicole  40x30 Oil 2003.JPG",
  "images/Portraits/Student (6).JPG",
  "images/Portraits/Student (11).JPG",
  "images/Portraits/Student (8).JPG",
  "images/Portraits/Mrs. Grace Ingleton 30x40 oil 2003.JPG",
  "images/Portraits/Michael Valentine 18x24 oil 2005.jpg",
  "images/Portraits/Artist Self-portrait Oil 40x30 2020.JPG",
  "images/Portraits/Mathew 16 x 20 oil 2005.jpg",
  "images/Portraits/Student (1).JPG",
  "images/Portraits/Student (9).JPG",
  "images/Portraits/Valerie 40x30 oil 2003.JPG",
  "images/Portraits/Rev. Floyd Flake 52 x36 oil 2005.jpg",
  "images/Portraits/Audrey Anastasi.JPG",
  "images/Portraits/Student (3).JPG",
  "images/Portraits/Student (10).JPG",
  "images/Portraits/Student (7).JPG",
  "images/Portraits/Student (4).JPG",
  "images/Paintings/Dancer in Green         48x62 Oil        2005.jpg",
  "images/Paintings/Yellow Feathers 20x24in Oil.jpg",
  "images/Paintings/Catching Water 24x30 Oil.jpg",
  "images/Paintings/Graduation 48x30 oil 2005.JPG",
  "images/Paintings/The Scream          48X62 Oil        2005.jpg",
  "images/Paintings/Painting of two dancing.jpg",
  "images/Paintings/washing          24x30 Oil.jpg",
  "images/Paintings/Violin Player 36X48 Oil.jpg",
  "images/Paintings/Dancer in Orange          48x60 Oil     2005.jpg",
  "images/Paintings/Angelle        36x52 Oil - Copy.jpg",
  "images/Paintings/Mother with Child 30x40 Oil (1).jpg",
  "images/IboLanding/Ibo Landing charcoal 54x52 2017.JPG",
  "images/IboLanding/Ibo Landing charcoal 54x52 2020.JPG",
  "images/IboLanding/Ibo Landing 13 charcoal 2020.JPG",
  "images/IboLanding/Ibo Landing 18 54x52 Charcoal 2017.JPG",
  "images/IboLanding/Ibo Landing 2 Charcoal 54x52 2010.jpg",
  "images/IboLanding/Ibo Landing 20 charcoal 2017.JPG",
  "images/IboLanding/Ibo Landing 3 Charcoal 54x52 2010.jpg",
  "images/IboLanding/Ibo landing 6 charcoal 54x52.JPG",
  "images/IboLanding/Ibo landing 7 charcoal on paper  54x52 2010.jpg",
  "images/IboLanding/Ibo landing 8 charcoal 54x52 2010.JPG",
  "images/Abstract/Protester 10 acrylic 13x17 2013.jpg",
  "images/Abstract/Protester 11 13x17 acrylic 2013.jpg",
  "images/Abstract/woman with blue glasses 17x13 acrylic 2013.jpg",
  "images/Abstract/Marcus Garvy Acrylic 13x17 2013.jpg",
  "images/Abstract/Paul Robson 17x13 Acrylic 2013.jpg",
  "images/Abstract/AVASLENOVO-PC - IMAG5345.jpg",
  "images/Abstract/New birth 7 17x13 Acrylic 2013.jpg",
  "images/Abstract/New birth 24 17x13 Acrylic 2013 (1).jpg"
]

// const revolvingItems = document.querySelectorAll('.slider .item img');

// // Helper to get N unique random images
// function getUniqueRandomImages(count) {
//   const shuffled = [...images].sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, count);
// }

// function updateCarouselImages() {
//   const newImages = getUniqueRandomImages(revolvingItems.length);
//   revolvingItems.forEach((img, i) => {
//     img.src = newImages[i];
//   });
// }

// // Update every 10 seconds (or whatever you want)
// setInterval(updateCarouselImages, 5000);

const rotatingItems = document.querySelectorAll(".rotating-img");

const shuffledImages = [...images].sort(() => Math.random() - 0.5);

rotatingItems.forEach((img, index) => {
  img.src = shuffledImages[index % shuffledImages.length];
});



function showNextSlide() {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {``
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

  setCurrentState(direction) {
    if(direction.className == 'gallery-controls-previous') {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  setControls() {
    this.carouselControls.forEach(control => {
      galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
      document.querySelector(`gallery-controls-${control}`).innerText = control;
    });
  }

  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forReach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

const exampleCarousel = new Carousel(galleryCOntainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();
