
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

        // if(e.target.id == 1) {
        //     carousel.style.setProperty("--slider-index", 1)
        // } else if (e.target.id == 2) {
        //     carousel.style.setProperty("--slider-index", 2)

        // } else {
        //     carousel.style.setProperty("--slider-index", 0)

        // }

       
        // if (index <= 1) {
        //     console.log(index)
        //     carousel.style.setProperty("--slider-index", index + 1)
        // } else {
        //     carousel.style.setProperty("--slider-index", index - 2)
        // }
    }   
  });
  
