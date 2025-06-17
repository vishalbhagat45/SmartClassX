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

// BLOG FEATURES
function renderBlogPosts() {
  const blogList = document.getElementById("blogList");
  const searchInput = document.getElementById("searchInput");

  if (!blogList) return;

  const blogPosts = [
    {
      title: "How to Prepare for Competitive Exams",
      image: "image/blog1.jpg",
      content: "Get expert tips to crack IIT, NEET, and board exams..."
    },
    {
      title: "Importance of Concept Clarity in Physics",
      image: "image/blog2.jpg",
      content: "Discover why understanding the basics of Physics is essential..."
    },
    {
      title: "Time Management for Students",
      image: "image/blog3.jpg",
      content: "Balance your academics and personal life effectively..."
    }
  ];

  localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

  function renderPosts(filteredPosts) {
    blogList.innerHTML = "";
    filteredPosts.forEach(post => {
      const card = document.createElement("article");
      card.className = "blog-post";
      card.innerHTML = `
        <img src="${post.image}" alt="Blog Image">
        <div class="blog-content">
          <h3>${post.title}</h3>
          <p>${post.content.slice(0, 100)}...</p>
          <a href="blog-detail.html?title=${encodeURIComponent(post.title)}" class="read-more">Read More</a>
        </div>
      `;
      blogList.appendChild(card);
    });
  }

  renderPosts(blogPosts);

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filtered = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm)
      );
      renderPosts(filtered);
    });
  }
}

// Run all scripts after DOM loaded
function initScripts() {
  handleContactForm();
  enableGalleryClick();
  renderBlogPosts(); // Only runs if blogList exists
}

document.addEventListener("DOMContentLoaded", initScripts);
