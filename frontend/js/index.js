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
