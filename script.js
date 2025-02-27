document.addEventListener("DOMContentLoaded", function () {
    const welcomeText = document.getElementById("welcome-text");
    const welcomeScreen = document.getElementById("welcome-screen");
    const portfolioContent = document.getElementById("portfolio-content");

    // Typewriter Effect
    const text = "Welcome to my Portfolio.";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            welcomeText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Show Portfolio
    window.showPortfolio = function () {
        welcomeScreen.style.opacity = '0';
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            portfolioContent.style.display = 'grid';
            document.body.style.overflow = 'auto';
            initParticles();
        }, 1000);
    };

    // Particle.js Effect
    function initParticles() {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
        script.onload = function () {
            particlesJS("portfolio-content", {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#64ffda" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: true },
                    size: { value: 3, random: true },
                    move: { enable: true, speed: 1 }
                }
            });
        };
        document.body.appendChild(script);
    }
});
