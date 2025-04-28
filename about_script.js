document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel-item");
    let activeIndex = 0;
    let autoSlideInterval;

    function updateCarousel() {
        const totalItems = items.length;

        items.forEach((item, index) => {
            item.classList.remove("active", "left-1", "left-2", "right-1", "right-2");

            if (index === activeIndex) {
                item.classList.add("active"); // Center card
            } else if (index === (activeIndex - 1 + totalItems) % totalItems) {
                item.classList.add("left-1"); // First left card
            } else if (index === (activeIndex - 2 + totalItems) % totalItems) {
                item.classList.add("left-2"); // Second left card
            } else if (index === (activeIndex + 1) % totalItems) {
                item.classList.add("right-1"); // First right card
            } else if (index === (activeIndex + 2) % totalItems) {
                item.classList.add("right-2"); // Second right card
            }
        });
    }

    function moveNext() {
        activeIndex = (activeIndex + 1) % items.length;
        updateCarousel();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(moveNext, 3000); // Auto-slide every 3 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Start auto-slide
    startAutoSlide();

    // Stop auto-slide when user hovers over any card
    items.forEach(item => {
        item.addEventListener("mouseenter", stopAutoSlide);
        item.addEventListener("mouseleave", startAutoSlide);
    });

    // Initial carousel update
    updateCarousel();
});


