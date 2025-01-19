// Constants
const SLIDE_INTERVAL = 3000; // Slide interval in milliseconds
const SLIDER_CLASS = ".slide-animation";

// Simple Image Slider Function
function initializeSimpleSlider(slider) {
    const images = slider.querySelectorAll("img");
    const totalImages = images.length;
    let currentIndex = 0;

    // Function to slide images
    function slideImages() {
        if (totalImages === 0) return; // Exit if no images
        currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
        slider.style.transform = `translateX(-${currentIndex * (100 / totalImages)}%)`;
    }

    // Start sliding images automatically
    setInterval(slideImages, SLIDE_INTERVAL);
}

// Initialize all sliders
document.querySelectorAll(SLIDER_CLASS).forEach(initializeSimpleSlider);

// Lazy Loading Watch Observer
const elements = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
        }
    });
});
elements.forEach((el) => observer.observe(el));

// GSAP Animation for Hero Section on Page Load
window.addEventListener('load', () => {
    gsap.from('.hero-title', {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: 'power2.out'
    });
    gsap.from('.hero-subtitle', {
        duration: 1,
        opacity: 0,
        y: -30,
        delay: 0.5,
        ease: 'power2.out'
    });

    // Scroll animations for all elements within sections
    gsap.utils.toArray('section').forEach(section => {
        const elements = section.children;
        gsap.utils.toArray(elements).forEach((el, index) => {
            let direction = (index % 2 === 0) ? -50 : 50; // Alternate direction
            gsap.from(el, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: direction,
                duration: 1,
                delay: index * 0.2 // stagger the animations
            });
        });
    });
});
