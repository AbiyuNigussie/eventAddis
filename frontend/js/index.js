var burgerNavIcon = document.querySelector(".burgerNavIcon");
var closeIcon = document.querySelector(".closeIcon");
var sideBar = document.querySelector(".sideBar");

burgerNavIcon.addEventListener("click", () => {
  sideBar.style.display = "block";
  sideBar.classList.add("translate-x-0");
});

closeIcon.addEventListener("click", () => {
  if (sideBar.style.display !== "none") {
    sideBar.style.display = "none";
  }
});

const backgroundImageClasses = [
  "bg-one",
  "bg-two",
  "bg-three",
  "bg-four",
  "bg-five",
];
let currentIndex = 0;
const slider = document.querySelector(".slider");

function changeBackground() {
  // Change the background image
  const nextBackgroundIndex =
    (currentIndex + 1) % backgroundImageClasses.length;

  slider.classList.remove(backgroundImageClasses[currentIndex]);
  slider.classList.add(backgroundImageClasses[nextBackgroundIndex]);

  // Increment the index or reset to 0 if at the end
  currentIndex = nextBackgroundIndex;
}

// Call the changeBackground function at an interval (e.g., every 5 seconds)
setInterval(changeBackground, 5000); // 5000 milliseconds (5 seconds)
