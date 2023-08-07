// declare variables
let header = document.querySelector(".header");
let navbar = document.querySelector(".navbar");
let navLink = document.querySelectorAll(".header .container .navbar .nav li a");
let goTop = document.querySelector(".goTop");
let menuImg = document.querySelector(".menuImg");
let closeImgBox = document.querySelector(".closeImgBox");

window.onscroll = () => {
  navbar.classList.remove("active");

  if (window.scrollY > 2) {
    header.classList.add("sticky");
    goTop.classList.add("active");
  } else {
    header.classList.remove("sticky");
    goTop.classList.remove("active");
  }
};

Array.from(navLink).forEach((item) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(
      ".header .container .navbar .nav li a.active"
    );
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
  };
});

// if menu onclick view navbar
menuImg.onclick = () => {
  navbar.classList.toggle("active");
};

closeImgBox.onclick = () => {
  navbar.classList.remove("active");
};
