
    
  document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.banner');
    const images = ['g.jpg', 'I.jpg', 'p.jpg'];
    let index = 0;
  
    setInterval(() => {
      index = (index + 1) % images.length;
      console.log(`Changing to: ${images[index]}`); // Debug log
      banner.style.backgroundImage = `url('${images[index]}')`;
    }, 4000);
  });
  