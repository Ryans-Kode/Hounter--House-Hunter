document.addEventListener('DOMContentLoaded', () => {
  
    const fHCarouselBtnRight = document.getElementById("fhCarouselBtnRight")
    const fHCarouselBtnLeft = document.getElementById("fhCarouselBtnLeft")
    let count = 0;

 
    document.addEventListener('mouseup', (e) => {
        if(e.target.classList.contains('pagination-dot')) {
            const carousel = document.querySelector(".hero-image-carousel");
            // const index = parseInt(getComputedStyle(carousel).getPropertyValue("--slider-index"));
            const dots = Array.from(document.querySelectorAll(".pagination-dot"));
            dots.forEach( div => {
                div.style.backgroundColor = 'rgba(255, 255, 255, 0.478)';
            })
            carousel.style.setProperty("--slider-index", e.target.id)
            e.target.style.backgroundColor = 'white'
    
        }   
      });
    
    
      fHCarouselBtnRight.addEventListener('click', () => {
        count++
        const sliderIndex = document.querySelector(".feature-house-container")
        sliderIndex.style.setProperty("--feature-house-slider-index",  count)
        console.log(sliderIndex)
      })

      fHCarouselBtnLeft.addEventListener('click', () => {
        count--
        const sliderIndex = document.querySelector(".feature-house-container")
        sliderIndex.style.setProperty("--feature-house-slider-index", count)
        console.log(sliderIndex)
      })

      var elem = document.querySelector('.main-carousel');
      var flkty = new Flickity( elem, {
        // options
        imagesLoaded: true,
        // contain: true,
        wrapAround: true,
        initialIndex: 1
      });

      // element argument can be a selector string
      //   for an individual element
      var flkty = new Flickity( '.main-carousel', {
      });

})



