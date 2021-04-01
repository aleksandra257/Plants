function showDivs(n) {
  let i;
  let mySliderElement = document.getElementsByClassName("mySlides");
  if (n > mySliderElement.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = mySliderElement.length;
  }
  for (i = 0; i < mySliderElement.length; i++) {
    mySliderElement[i].style.display = "none";
  }
  mySliderElement[slideIndex - 1].style.display = "block";
}

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}
