
// Welcome Message
window.onload = function () {
    alert("Welcome to Kalpana Yadav's Portfolio Website!");
};

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button Click Message
const btn = document.querySelector(".btn");

if (btn) {
    btn.addEventListener("click", function () {
        alert("Thank you for visiting my portfolio!");
    });
}
