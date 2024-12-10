
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
    const images = {
      home: 'g.jpg',
      about: 'f.jpg',
      contact: 'b.jpg',
      donate: 'I.jpg',
      campaigns: 'p.jpg',
    };
  
    function changeBanner(imageUrl) {
      console.log(`Changing to: ${imageUrl}`); 
      banner.style.opacity = '0';
      setTimeout(() => {
        banner.style.backgroundImage = `url('${imageUrl}')`; 
        banner.style.opacity = '1'; 
      }, 500); 
    }
  
    document.getElementById('home-link').addEventListener('click', () => {
      changeBanner(images.home);
    });
  
    document.getElementById('about-link').addEventListener('click', () => {
      changeBanner(images.about);
    });
  
    document.getElementById('contact-link').addEventListener('click', () => {
      changeBanner(images.contact);
    });
  
    document.getElementById('donate-link').addEventListener('click', () => {
      changeBanner(images.donate);
    });
  
    document.getElementById('campaigns-link').addEventListener('click', () => {
      changeBanner(images.campaigns);
    });
  });
  