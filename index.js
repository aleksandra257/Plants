const slider = document.querySelector(".slider");
const before = document.querySelector(".img-container-before");
const after = document.querySelector(".img-container-after");
const container = document.querySelector(".container-evergreen");

const drag = (event) => {
  let xPos = event.layerX;
  before.style.width = xPos + "px";
  slider.style.left = xPos + "px";

  if (xPos < 50) {
    before.style.width = 0;
    slider.style.left = 0;
  }
};

container.addEventListener("mousemove", drag);
