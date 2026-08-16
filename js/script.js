console.log("JavaScript connected!");

const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("nav");
const closeBtn = document.querySelector("#closeBtn");
const overlay = document.querySelector("#overlay");
const navLinks = document.querySelectorAll("nav a");
const logoHome = document.querySelector("Al Yaseen Logo");

function closeMenu() {
    nav.classList.remove("active");
    overlay.classList.remove("active");
}

menuBtn.addEventListener("click", function() {
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
});

closeBtn.addEventListener("click", function() {
    closeMenu();
});

overlay.addEventListener("click", function() {
    closeMenu();
});

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        closeMenu();
    });
});

logoHome.addEventListener("click",function(){
    
})