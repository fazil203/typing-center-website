console.log("JavaScript connected!");

const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("nav");
const closeBtn = document.querySelector("#closeBtn");
const overlay = document.querySelector("#overlay");
const navLinks = document.querySelectorAll("nav a");


menuBtn.addEventListener("click", function() {
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
});


closeBtn.addEventListener("click", function() {
    nav.classList.remove("active");
    overlay.classList.remove("active");
});


navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        nav.classList.remove("active");
        overlay.classList.remove("active");
    });
});


overlay.addEventListener("click", function() {
    nav.classList.remove("active");
    overlay.classList.remove("active");
});