

function fhSlider(btn) {
  let slider = document.querySelector(".fh-slider");
  let card = document.querySelector(".feature-house-card")
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
    }
  } else {
    if (currnetIndex <= 0) return;
    else {
      slider.style.setProperty("--feature-house-slider-index", currnetIndex - 1);
    }
  
  }
}

let isDisplayed = false;

function hamburgerMenu() {
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.querySelector(".overlay")
  console.log(isDisplayed);
  if (!isDisplayed) {
    isDisplayed = true;
    navLinks.style.display = "flex";
    overlay.style.display = "block"
  } else {
    isDisplayed = false;
    navLinks.style.display = "none";
  }
  console.log(navLinks.style.display);
}

const fragment = document.createDocumentFragment();

function appendPreviousCards(houseType){
  let slider = document.querySelector(".fh-slider");
  let arr = Array.from(fragment.children);
  arr.forEach(e => { 
    if(e.id == houseType){
    slider.append(e)
  }})
}
function removeNodes(houseType) {
  const cards = document.querySelectorAll(".feature-house-card");
  cards.forEach((e) => {
    if (e.id != houseType) {
      fragment.append(e)  
    }
  });
}

function houseTypeSelector(houseType) {
  let slider = document.querySelector(".fh-slider");
  slider.style.setProperty("--feature-house-slider-index", '0');


  if (houseType == "house") {
    appendPreviousCards(houseType);
    removeNodes(houseType);
  } else if (houseType == "villa") {
    appendPreviousCards(houseType);
    removeNodes(houseType);
  } else  {
    appendPreviousCards(houseType);
    removeNodes(houseType);
    }
  }

const buttons = document.querySelectorAll(".housing-button")

buttons.forEach(btn => {
  btn.addEventListener('click', ()=> {
    buttons.forEach(btn =>  {                 //Revert button / img back to default state
      btn.classList.remove('button-active')
      btn.children[0].src = `assets/${btn.id}.svg`
    });
    btn.classList.add("button-active")       // Add 'active' class and green image to button
    btn.children[0].src = `assets/green${btn.id}.svg`
  
  })
})



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
