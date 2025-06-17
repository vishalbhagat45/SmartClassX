document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");

  if (navbarContainer) {
    fetch("../components/navbar.html") // or "components/navbar.html" from root
      .then((res) => res.text())
      .then((data) => {
       navbarContainer.innerHTML = data;

        // Handle Login/Logout behavior
        const authLink = document.getElementById("auth-link");
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        const userRole = localStorage.getItem("role");

        if (isLoggedIn && authLink) {
          authLink.textContent = `Logout`;
          authLink.href = "#";

          authLink.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userEmail");
            localStorage.removeItem("role");
            alert("Logged out successfully.");
            window.location.href = "index.html"; // or login.html
          });
        }
      });
  }

  // Page protection
  if (document.body.dataset.restrict === "true" &&
      localStorage.getItem("isLoggedIn") !== "true") {
    alert("Please login to access this page.");
    window.location.href = "index.html"; // or login.html
  }
});
