const slider = document.getElementById("slider");
const slides = slider.querySelectorAll("img");

let index = 0;
let autoSlideInterval;
const slideDuration = 3500; // 3.5 seconds

function goToSlide(i) {
    slider.scrollTo({
        left: slider.clientWidth * i,
        behavior: "smooth"
    });
    index = i;
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        index = (index + 1) % slides.length;
        goToSlide(index);
    }, slideDuration);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Pause auto-slide on user interaction
slider.addEventListener("mouseenter", stopAutoSlide);
slider.addEventListener("mouseleave", startAutoSlide);

// Pause when clicking nav dots
document.querySelectorAll(".slider-nav a").forEach((dot, i) => {
    dot.addEventListener("click", () => {
        stopAutoSlide();
        goToSlide(i);
        setTimeout(startAutoSlide, 5000); // resume after 5s
    });
});

// Start autoplay
startAutoSlide();
