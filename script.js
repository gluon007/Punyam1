
 /* document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.banner');
    const images = ['g.jpg', 'I.jpg', 'p.jpg'];
    let index = 0;
  
    setInterval(() => {
      banner.style.opacity = '0';
  
      setTimeout(() => {
        index = (index + 1) % images.length;
        console.log(`Changing to: ${images[index]}`);
        banner.style.backgroundImage = `url('${images[index]}')`;
  
        banner.style.opacity = '1';
      }, 500); 
    }, 4000);
  });*/
 
  document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.banner');
    const images = [
       'g.jpg',
       'f.jpg',
       'b.jpg',
       'I.jpg',
       'p.jpg',
      ];
    let currentIndex =0 
    function changeBanner(index) {
      console.log(`Changing to: ${images[index]}`); 
      banner.style.opacity = '0';
      setTimeout(() => {
        banner.style.backgroundImage = `url('${images[index]}')`; 
        banner.style.opacity = '1'; 
      }, 500); 
    }
  
    document.querySelector('.left-arrow').addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      changeBanner(currentIndex);
    });
  
    document.querySelector('.right-arrow').addEventListener('click', () => {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1; 
      changeBanner(currentIndex);
    });
  
   // document.getElementById('contact-link').addEventListener('click', () => {
      changeBanner(currentIndex);
    });
  
   /* document.getElementById('donate-link').addEventListener('click', () => {
      changeBanner(images.donate);
    });
  
    document.getElementById('campaigns-link').addEventListener('click', () => {
      changeBanner(images.campaigns);
    });
  });*/
  