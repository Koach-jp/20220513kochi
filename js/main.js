const hamburger = document.getElementById("hamburger");
const slide_panel = document.getElementById("slide-panel")
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle("open");
  slide_panel.classList.toggle("open")
});
