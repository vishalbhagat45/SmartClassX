// Scroll smoothly to any section by ID
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Handle contact form
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks for contacting us! We’ll get back to you soon.');
    form.reset();
  });
});
// Image Gallery Interaction (Expand on Click)
document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery img");

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      window.open(img.src, "_blank"); // Opens full image in a new tab
    });
  });
});



