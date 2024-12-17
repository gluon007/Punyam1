
 
  document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.banner');
    const images = [
       'vaibhav.jpg',
       'shrey.jpg',
       'shashank.jpg',
       'kushal.jpg',
       'w.jpg',
       'x.jpg'
      ];
    let c =0 ;
    let mishra;
    function changeBanner(index) {
      console.log(`Changing to: ${images[index]}`); 
      banner.style.opacity = '0';
      setTimeout(() => {
        banner.style.backgroundImage = `url('${images[index]}')`; 
        banner.style.opacity = '1'; 
      }, 500); 
    }
    function startSlideshow()
    {
      mishra = setInterval(() => {
        c= (c +1 )% images.length;
        changeBanner (c);
      }, 3000);
    }
    function re()
    {
      clearInterval(intervalId);
      startSlideshow();
    }
  
    document.querySelector('.left-arrow').addEventListener('click', () => {
      c = (c === 0) ? images.length - 1 : c - 1;
      changeBanner(c);
    });
  
    document.querySelector('.right-arrow').addEventListener('click', () => {
      c = (c === images.length - 1) ? 0 : c + 1; 
      changeBanner(c);
    });
  
   // document.getElementById('contact-link').addEventListener('click', () => {
      changeBanner(c);
      startSlideshow();

    });
  
   /* document.getElementById('donate-link').addEventListener('click', () => {
      changeBanner(images.donate);
    });
  
    document.getElementById('campaigns-link').addEventListener('click', () => {
      changeBanner(images.campaigns);
    });
  });*/
  