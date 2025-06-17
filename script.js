function handleContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks for contacting us! We’ll get back to you soon.');
      form.reset();
    });
  }
}

// Image Gallery Interaction
function enableGalleryClick() {
  const galleryImages = document.querySelectorAll(".gallery img");
  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      window.open(img.src, "_blank");
    });
  });
}

// Smooth Scroll
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Run common features
function initScripts() {
  handleContactForm();
  enableGalleryClick();
}

document.addEventListener("DOMContentLoaded", initScripts);
