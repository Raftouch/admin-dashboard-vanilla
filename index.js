const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// menuBtn.addEventListener("click", () => {
//   sideMenu.style.display = "block";
// });

// closeBtn.addEventListener("click", () => {
//   sideMenu.style.display = "none";
// });

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("open");
  sideMenu.classList.remove("closed");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.add("closed");
  sideMenu.classList.remove("open");
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});
