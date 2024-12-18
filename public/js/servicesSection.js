// JavaScript for 3D tilt effect
document.querySelectorAll("[data-tilt]").forEach((card) => {
	card.addEventListener("mousemove", (e) => {
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left; // Mouse X position within the card
		const y = e.clientY - rect.top; // Mouse Y position within the card

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		// Calculate rotation
		const rotateX = ((y - centerY) / centerY) * -15; // Invert for natural movement
		const rotateY = ((x - centerX) / centerX) * 15;

		card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
	});

	card.addEventListener("mouseleave", () => {
		card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
	});
});

// JavaScript for 3D Tilt Effect
document.querySelectorAll(".team-card").forEach((card) => {
	card.addEventListener("mousemove", (e) => {
		// Get the card's bounding box
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left; // Mouse X within card
		const y = e.clientY - rect.top; // Mouse Y within card

		const centerX = rect.width / 2; // Card's horizontal center
		const centerY = rect.height / 2; // Card's vertical center

		// Calculate rotation angles
		const rotateX = ((y - centerY) / centerY) * -15; // Negative for natural movement
		const rotateY = ((x - centerX) / centerX) * 15;

		// Apply 3D transformation
		card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
	});

	// Reset transformation when the mouse leaves the card
	card.addEventListener("mouseleave", () => {
		card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
	});
});
