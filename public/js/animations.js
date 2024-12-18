document.querySelectorAll(".slide-animation").forEach((slider) => {
	const images = slider.querySelectorAll("img"); // All images in the slider
	const totalImages = images.length; // Total number of images
	let currentIndex = 0; // Tracks the current image index
	let direction = 1; // 1 for forward, -1 for reverse

	function slideImages() {
		// Calculate the next index based on direction
		const nextIndex = currentIndex + direction;

		// Reverse direction if we reach the last image or the first image
		if (nextIndex >= totalImages || nextIndex < 0) {
			direction *= -1; // Switch direction
		}

		// Update current index
		currentIndex += direction;

		// Apply the transform to slide to the current image
		slider.style.transform = `translateX(-${
			currentIndex * (100 / totalImages)
		}%)`;
	}

	// Automatically slide images at intervals
	setInterval(slideImages, 3000); // Adjust timing (3000ms = 3 seconds per slide)
});

//Lazy Loading Watch Observer
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
