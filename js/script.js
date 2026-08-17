console.log("JavaScript connected!");

const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("nav");
const closeBtn = document.querySelector("#closeBtn");
const overlay = document.querySelector("#overlay");
const navLinks = document.querySelectorAll("nav a");
const serviceButtons = document.querySelectorAll(".service-btn");

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

serviceButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const service = button.dataset.service;

        const message = `Hello AL YASEEN, I am interested in ${service}. Please provide me with more information.`;

        const encodedMessage = encodeURIComponent(message);

        const whatsappUrl = `https://wa.me/971567863568?text=${encodedMessage}`;

        console.log(whatsappUrl);

        console.log(encodedMessage);


    });

});
