// Gomb elem
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Megjelenítjük a gombot, ha az oldal lejjebb van görgetve
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Gomb kattintás esemény
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Zökkenőmentes görgetés
    });
});
