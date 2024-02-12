
function fhSlider(btn) {
  let slider = document.querySelector(".fh-slider");
  let card = document.querySelector(".feature-house-card");
  let rect = card.getBoundingClientRect();
  let width = rect.width;
  let margin = parseInt(getComputedStyle(card).getPropertyValue("margin-right"));
  let cardWidth = margin + width + "px";
  let currnetIndex = parseInt(
    getComputedStyle(slider).getPropertyValue("--feature-house-slider-index")
  );
  let sliderChildren = slider.children.length - 1;

  if (btn == "right") {
    if (currnetIndex >= sliderChildren) return;
    else {
      slider.style.setProperty("--feature-house-slider-index", currnetIndex + 1);
      slider.style.setProperty("--card-size", "-" + cardWidth);
      console.log(`current Index: ${currnetIndex}, children: ${sliderChildren}`);
    }
  } else {
    if (currnetIndex <= 0) return;
    slider.style.setProperty("--feature-house-slider-index", currnetIndex - 1);
    console.log(`current Index: ${currnetIndex}, children: ${sliderChildren}`);
  }

}

document.addEventListener("DOMContentLoaded", () => {
 
  var elem = document.querySelector(".main-carousel");
  var flkty = new Flickity(elem, {
    // options
    imagesLoaded: true,
    // contain: true,
    wrapAround: true,
    initialIndex: 1,
  });

  // element argument can be a selector string
  //   for an individual element
  var flkty = new Flickity(".main-carousel", {});

  const sliders = document.querySelectorAll("#drag");

  sliders.forEach((slider) => {
    let startX, scrollLeft, mouseDown;

    let startDragging = function (e) {
      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      console.log(scrollLeft, e.pageX);
    };
    let stopDragging = function (event) {
      mouseDown = false;
    };
    slider.addEventListener("mousemove", (e) => {
      e.preventDefault();
      if (!mouseDown) {
        return;
      }
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
      console.log(x);
    });

    slider.addEventListener("mousedown", startDragging);
    slider.addEventListener("mouseup", stopDragging);
    slider.addEventListener("mouseleave", stopDragging);
  });
});
