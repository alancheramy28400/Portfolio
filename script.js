// On définit l'ordre de tes pages ici
const pages = ["index.html", "skills.html", "education.html"];

// On trouve sur quelle page on est actuellement
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const currentIndex = pages.indexOf(currentPage);

let isScrolling = false;

window.addEventListener("wheel", (event) => {
    if (isScrolling) return; // Empêche de sauter 3 pages d'un coup

    if (event.deltaY > 0) {
        // Scroll vers le BAS -> Page suivante
        if (currentIndex < pages.length - 1) {
            goToPage(pages[currentIndex + 1]);
        }
    } else {
        // Scroll vers le HAUT -> Page précédente
        if (currentIndex > 0) {
            goToPage(pages[currentIndex - 1]);
        }
    }
});

function goToPage(url) {
    isScrolling = true;
    document.body.classList.add('fade-out'); // Optionnel : ton animation de tout à l'heure
    
    setTimeout(() => {
        window.location.href = url;
    }, 600);
}