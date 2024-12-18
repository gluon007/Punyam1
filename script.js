
 
  // document.addEventListener('DOMContentLoaded', () => {
  //   const banner = document.querySelector('.banner');
  //   const images = [
  //      'boy.jpg',
  //      'education.jpg',
  //      'health.jpg',
  //      'children1.jpg',
  //      'women.jpg',
  //     ];
  //   let c =0 ;
  //   let mishra;
  //   function changeBanner(index) {
  //     console.log(`Changing to: ${images[index]}`); 
  //     banner.style.opacity = '0';
  //     setTimeout(() => {
  //       banner.style.backgroundImage = `url('${images[index]}')`; 
  //       banner.style.opacity = '1'; 
  //     }, 500); 
  //   }
  //   function startSlideshow()
  //   {
  //     mishra = setInterval(() => {
  //       c= (c +1 )% images.length;
  //       changeBanner (c);
  //     }, 3000);
  //   }
  //   function re()
  //   {
  //     clearInterval(intervalId);
  //     startSlideshow();
  //   }
  
  //   document.querySelector('.left-arrow').addEventListener('click', () => {
  //     c = (c === 0) ? images.length - 1 : c - 1;
  //     changeBanner(c);
  //   });
  
  //   document.querySelector('.right-arrow').addEventListener('click', () => {
  //     c = (c === images.length - 1) ? 0 : c + 1; 
  //     changeBanner(c);
  //   });
  
  //  // document.getElementById('contact-link').addEventListener('click', () => {
  //     changeBanner(c);
  //     startSlideshow();

  //   });
  
  //  /* document.getElementById('donate-link').addEventListener('click', () => {
  //     changeBanner(images.donate);
  //   });
  
  //   document.getElementById('campaigns-link').addEventListener('click', () => {
  //     changeBanner(images.campaigns);
  //   });
  // });*/

  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
  
    let currentIndex = 0;
    let slideWidth = slides.offsetWidth / slideCount; // Width of one slide
    let interval;
  
    // Function to update slide position
    function updateSlidePosition(direction) {
      if (direction === 'next') {
        currentIndex = (currentIndex + 1) % slideCount;
      } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      }
  
      const offset = -currentIndex * slideWidth;
      slides.style.transform = `translateX(${offset}px)`;
    }
  
    // Automatic slide (right to left)
    function startAutoSlide() {
      interval = setInterval(() => updateSlidePosition('next'), 3000);
    }
  
    // Stop automatic slide
    function stopAutoSlide() {
      clearInterval(interval);
    }
  
    // Event listeners for buttons
    prevButton.addEventListener('click', () => {
      stopAutoSlide();
      updateSlidePosition('prev');
      startAutoSlide(); // Restart after manual control
    });
  
    nextButton.addEventListener('click', () => {
      stopAutoSlide();
      updateSlidePosition('next');
      startAutoSlide(); // Restart after manual control
    });
  
    // Initialize slideshow
    startAutoSlide();
  });
  
  