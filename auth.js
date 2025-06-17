document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Pages accessible without login
  const publicPages = ["", "index.html", "login.html", "register.html"];
  const isPublicPage = publicPages.includes(currentPage);

  // 🚫 Block access if not logged in
  if (!isLoggedIn && !isPublicPage) {
    alert("Please login to access this page.");
    window.location.href = "login.html";
    return;
  }

  // ✅ Inject Navbar and Footer (except on login/register)
  const skipInjection = ["login.html", "register.html"];

  if (!skipInjection.includes(currentPage)) {
    // Inject Navbar
    const navbar = document.createElement("div");
    navbar.id = "navbar";
    document.body.prepend(navbar);

    fetch("components/navbar.html")
      .then(res => res.text())
      .then(data => {
        navbar.innerHTML = data;

        // 🔄 Update Login/Register to Logout if logged in
        const authLink = document.getElementById("auth-link");
        if (authLink) {
          if (isLoggedIn) {
            authLink.textContent = "Logout";
            authLink.href = "#";
            authLink.addEventListener("click", (e) => {
              e.preventDefault();
              localStorage.clear();
              alert("Logged out successfully!");
              window.location.href = "index.html";
            });
          } else {
            authLink.textContent = "Login/Register";
            authLink.href = "login.html";
          }
        }
      });

    // Inject Footer
    const footer = document.createElement("div");
    footer.id = "footer";
    document.body.appendChild(footer);

    fetch("components/footer.html")
      .then(res => res.text())
      .then(data => {
        footer.innerHTML = data;
      });
  }
});
