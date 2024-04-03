const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 60) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// const nav = document.querySelector("nav");

// window.addEventListener("scroll", () => {
//   if (window.scrollX > 60) {
//     nav.classList.add("scrolled");
//   } else {
//     nav.classList.remove("scrolled");
//   }
// });
