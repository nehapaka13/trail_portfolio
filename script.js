document.addEventListener("DOMContentLoaded", () => {
    const skillText = document.getElementById("skill-text");

    document.querySelectorAll(".planet").forEach(planet => {
        const orbit = planet.closest(".orbit"); // Get the parent orbit of the planet

        planet.addEventListener("mouseover", function() {
            if (skillText) {
                skillText.innerText = this.getAttribute("data-skill") || "Unknown Skill";
            }
            // Pause orbit rotation when hovering
            if (orbit) {
                orbit.style.animationPlayState = "paused";
            }
        });

        planet.addEventListener("mouseleave", function() {
            if (skillText) {
                skillText.innerText = "Hover over a planet to explore my skills.";
            }
            // Resume orbit rotation when hover is removed
            if (orbit) {
                orbit.style.animationPlayState = "running";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            title: "Vetero Pharma: Revolutionizing Animal Healthcare",
            desc: "Vetero Pharma is a trusted pharmaceutical platform dedicated to enhancing animal health and veterinary care...",
            url: "https://www.veteropharma.com"
        },
        {
            title: "Cricket World Cup Dashboard: The Ultimate Fan Hub",
            desc: "The Cricket World Cup Dashboard provides a visually rich and interactive experience to track the biggest tournament in cricket history...",
            url: "https://icc-wc.vercel.app/"
        },
        {
            title: "Minimal Portfolio: A Developer's Digital Identity",
            desc: "A sleek, lightweight, and fully responsive personal portfolio website designed to showcase skills, projects, and achievements...",
            url: "https://mini-portfolio-selff.vercel.app/"
        }
    ];

    let currentIndex = 0;

    const glassPanel = document.getElementById("glassPanel");
    const projectTitle = document.getElementById("projectTitle");
    const projectDesc = document.getElementById("projectDesc");
    const projectFrame = document.getElementById("projectFrame");
    const enlargeBtn = document.getElementById("enlargeBtn");
    const glassSound = document.getElementById("glassSound");

    // Smooth text fade effect
    function animateFadeOutIn(callback) {
        const elements = [projectTitle, projectDesc];
        elements.forEach(el => el.classList.add("fade-out"));
        setTimeout(() => {
            callback();
            elements.forEach(el => {
                el.classList.remove("fade-out");
                el.classList.add("fade-in");
            });
            setTimeout(() => {
                elements.forEach(el => el.classList.remove("fade-in"));
            }, 500);
        }, 300);
    }

    function updateProject() {
        animateFadeOutIn(() => {
            const project = projects[currentIndex];
            projectTitle.textContent = project.title;
            projectDesc.textContent = project.desc;
            projectFrame.src = project.url;
            enlargeBtn.onclick = () => window.open(project.url, "_blank");
        });
    }

    glassPanel.addEventListener("click", () => {
        if (!glassPanel.classList.contains("shatter")) {
            glassSound.play();
            glassPanel.classList.add("shatter");

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % projects.length;
                glassPanel.classList.remove("shatter");
                updateProject();
            }, 1300);
        }
    });

    updateProject();
});

const envelope = document.getElementById("envelopeWrapper");
const letterContainer = document.getElementById("letterContainer");

envelope.addEventListener("click", () => {
    letterContainer.style.display = "block";
});

// Optional: Close letter when clicking outside
window.addEventListener("click", (e) => {
    if (!letterContainer.contains(e.target) && !envelope.contains(e.target)) {
        letterContainer.style.display = "none";
    }
});

const closeLetterBtn = document.getElementById("closeLetterBtn");

closeLetterBtn.addEventListener("click", () => {
    letterContainer.style.display = "none";
});

