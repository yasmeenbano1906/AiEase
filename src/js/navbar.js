const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const dropdownBtn = document.querySelector(".drop-btn");
const dropdown = document.querySelector(".dropdown");


// Hamburger menu
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Explore AI dropdown
dropdownBtn.addEventListener("click", (e) => {
    e.preventDefault();

    dropdown.classList.toggle("active");
});