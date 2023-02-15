// Make Menu Open In Responsive
let navigationBar = document.querySelector(".navbar");
let menusBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");

menusBtn.addEventListener("click", function () {
  navigationBar.classList.add("active2");
});

closeBtn.addEventListener("click", function () {
  navigationBar.classList.remove("active2");
});
