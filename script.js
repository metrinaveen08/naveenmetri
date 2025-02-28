document.addEventListener("DOMContentLoaded", function() {
    // Highlight the active page in the sidebar
    let links = document.querySelectorAll(".nav-links a");
    let currentUrl = window.location.pathname.split("/").pop(); 

    links.forEach(link => {
        if (link.getAttribute("href") === currentUrl) {
            link.classList.add("active");
        }
    });

    // Welcome screen fade effect (Only on index.html)
    let welcomeScreen = document.getElementById("welcome-screen");
    let mainContent = document.getElementById("main-content");

    if (welcomeScreen && mainContent) {
        setTimeout(() => {
            welcomeScreen.style.display = "none";
            mainContent.classList.remove("hidden");
        }, 2000); // 2-second delay
    }
});
