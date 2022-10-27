/*
      * =================
      * Navbar onscroll behavior
      * =================
      */
window.onscroll = () => {
  const header = document.querySelector("header");
  if (window.pageYOffset > header.offsetTop) {
    header.classList.add("navbar-fixed");
    header.classList.remove("lg:w-10/12");
    header.classList.remove("lg:top-8");
    header.classList.remove("lg:rounded-lg");
  } else {
    header.classList.add("lg:rounded-lg");
    header.classList.add("lg:w-10/12");
    header.classList.add("lg:top-8");
    header.classList.remove("navbar-fixed");
  }
};
/*
       * ===============
       * Hamburger button
       * ===============
       */
const hamburgerBtn = document.getElementById("hamburger");
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("hamburger-active");
  document.getElementById("navbar-menu").classList.toggle("hidden");
});
