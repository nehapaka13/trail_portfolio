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

// Project Section
document.addEventListener("DOMContentLoaded", () => {
    // Project Data
    const projects = [
        { title: "Cricket World Cup Dashboard: The Ultimate Fan Hub", desc: "The Cricket World Cup Dashboard is a one-stop hub for cricket fans, providing a visually rich and interactive experience to track the biggest tournament in cricket history. This project is designed to offer real-time updates, match schedules, team rankings, and insights in a sleek and engaging interface.", url: "https://icc-wc.vercel.app/" },
        { title: "Minimal Portfolio: A Developer's Digital Identity", desc: "The Minimal Portfolio is a sleek, lightweight, and fully responsive personal portfolio website designed to showcase skills, projects, and achievements in an elegant and interactive way. Built with a modern UI, it provides a seamless browsing experience, ensuring that visitors get a clear, professional impression of the developer.", url: "https://mini-portfolio-selff.vercel.app/" },
        { title: "Vetero Pharma: Revolutionizing Animal Healthcare", desc: "Vetero Pharma is a trusted pharmaceutical platform dedicated to enhancing animal health and veterinary care. With a strong focus on innovation, quality, and safety, this platform provides a range of high-quality veterinary medicines, supplements, and healthcare solutions for livestock and pets.", url: "https://www.veteropharma.com" }
    ];

    let currentIndex = 0;
    
    // DOM Elements
    const glassPanel = document.getElementById("glassPanel");
    const projectTitle = document.getElementById("projectTitle");
    const projectDesc = document.getElementById("projectDesc");
    const projectFrame = document.getElementById("projectFrame");
    const enlargeBtn = document.getElementById("enlargeBtn");
    const glassSound = document.getElementById("glassSound");

    // Function to Update the Project Details
    function updateProject() {
        projectTitle.textContent = projects[currentIndex].title;
        projectDesc.textContent = projects[currentIndex].desc;
        projectFrame.src = projects[currentIndex].url;
        enlargeBtn.onclick = () => window.open(projects[currentIndex].url, "_blank");
    }

    // Event Listener for Glass Break Effect
    glassPanel.addEventListener("click", () => {
        glassSound.play();
        glassPanel.classList.add("shatter");

        setTimeout(() => {
            // Move to the next project
            currentIndex = (currentIndex + 1) % projects.length;

            // Reset Glass Effect
            glassPanel.classList.remove("shatter");

            // Update the content
            updateProject();
        }, 1300); // Delay to match the glass breaking animation
    });

    // Initial Load
    updateProject();
});


