// Select the hamburger, menu, and mobile menu elements
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelectorAll("#mobile-menu .navLi a");
let lastScrollTop = 0; // Variable to track the last scroll position

// Function to toggle the visibility of the menu and the hamburger state
hamburger.addEventListener("click", () => {
	// Toggle the mobile menu visibility
	mobileMenu.classList.toggle("hidden");
	mobileMenu.classList.toggle("flex");

	// Toggle hamburger menu animation (cross effect)
	hamburger.classList.toggle("active");
	hamburger.children[0].classList.toggle("rotate-45");
	hamburger.children[1].classList.toggle("opacity-0");
	hamburger.children[2].classList.toggle("-rotate-45");
});

// Scroll functionality for sticky header
window.addEventListener(
	"scroll",
	function () {
		const header = document.querySelector("header");
		const st = window.pageYOffset || document.documentElement.scrollTop;

		// Hide header on scroll down and show it on scroll up
		if (st > lastScrollTop) {
			// Scroll down
			header.style.top = "-100px";
		} else {
			// Scroll up
			header.style.top = "0";
		}

		lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
	},
	false
);

// Add click event listeners to all navigation links in the mobile menu
navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		// Hide the mobile menu
		mobileMenu.classList.add("hidden");
		mobileMenu.classList.remove("flex");

		// Reset the hamburger menu to its default state
		hamburger.classList.remove("active");
		hamburger.children[0].classList.remove("rotate-45");
		hamburger.children[1].classList.remove("opacity-0");
		hamburger.children[2].classList.remove("-rotate-45");
	});
});
