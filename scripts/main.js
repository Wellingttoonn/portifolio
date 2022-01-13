window.addEventListener("load", function () {
  // Fix navbar on top
  var nav = document.querySelector("nav");
  // Start Animate.css
  var aboutWrap = document.querySelector(".about-wrapper");

  document.addEventListener("scroll", () => {
    nav.classList.toggle("sticky", scrollY > 350);
    aboutWrap.classList.add("animate__animated", "animate__fadeInUp", scroll > 400);
  });

  //RESPONSIVE MENU START

  var body = document.querySelector("body");
  var menuTrigger = document.querySelector(".js-menu-trigger");
  // var mainOverlay = document.querySelector(".js-main-overlay");

  menuTrigger.addEventListener("click", function () {
    body.classList.toggle("menu-is-active");
    menuTrigger.classList.toggle("open");
  });

  // mainOverlay.addEventListener("click", function () {
  //   body.classList.remove("menu-is-active");
  //   menuTrigger.classList.remove("open");
  // });

  document.querySelectorAll(".menu li a").forEach((a) => {
    a.addEventListener("click", function () {
      body.classList.remove("menu-is-active");
      menuTrigger.classList.remove("open");
    });
  });

  // Get the current year for the copyright
  document.querySelector("#year").textContent = new Date().getFullYear();

  // Start Parallax.js
  var scene = document.getElementById("scene");
  var parallax = new Parallax(scene);

  // Show More Button
  var showMoreBtns = document.querySelectorAll(".showMore");

  showMoreBtns.forEach((item) => {
    //console.log(item.parentElement.offsetHeight);
    // if (item.parentElement.scrollHeight > 50) {
    //   item.classList.add("hideShowMore");
    // }

    item.addEventListener("click", (e) => {
      e.target.parentElement.classList.toggle("expand-desc");
      //console.log(e.target.parentElement.offsetHeight);
      // console.log(item.parentElement.offsetHeight);
      console.log(item.parentElement.scrollHeight);
    });
  });
});
