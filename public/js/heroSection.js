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
