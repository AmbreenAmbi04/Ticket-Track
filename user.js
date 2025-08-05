document.addEventListener("DOMContentLoaded", function() {
    // Check for logged-in user in localStorage
    const loggedInUser = localStorage.getItem("loggedInUser");
    const navUser = document.getElementById("nav-user");

    if (loggedInUser) {
        // If user is logged in, display username
        navUser.innerHTML = `
            <li class="new-nav-item nav-item navy-link">
              <a class="nav-link new-nav-link new-nav-link" href="#" id="navbarDropdown" role="button" style="color: white; font-size: 20px; font-weight: bold; font-family: Arial, Helvetica, sans-serif;">
                <i class="bi bi-person"></i> ${loggedInUser}
              </a>
              <div class="navy-dropdown-menu">
                <a class="navy-dropdown-item" href="#" id="logout-button">Logout</a>
              </div>
            </li>`;

        // Add logout functionality
        const logoutButton = document.getElementById("logout-button");
        logoutButton.addEventListener("click", function() {
            localStorage.removeItem("loggedInUser");
            navUser.innerHTML = `<li class="nav-item new-nav-item">
              <a class="nav-link new-nav-link custom-login-btn" href="login.html">Login</a>
            </li>`;
            location.reload(); // Reload page to reflect changes
        });
    } else {
        // If user is not logged in, display login button
        navUser.innerHTML = `<li class="nav-item new-nav-item">
          <a class="nav-link new-nav-link custom-login-btn" href="login.html">Login</a>
        </li>`;
    }
});

function loginUser(username) {
    localStorage.setItem("loggedInUser", username);
    location.reload(); // Reload page to reflect changes
}

    document.addEventListener("DOMContentLoaded", function() {
        // Get the current URL path
        var path = window.location.pathname.split("/").pop();

        // Map the path to the corresponding nav-link ID
        var pageMap = {
            "index.html": "home-link",
            "Inter_country.html": "book-link",
            "Intra_country.html": "book-link",
            "routes.html": "routes-link",
            "guides.php": "guide-link",
            "login.html": "login-link"
        };

        // Get the corresponding nav-link ID
        var activeLinkId = pageMap[path];

        // Add styles to the corresponding nav-link
        if (activeLinkId) {
            var activeLink = document.getElementById(activeLinkId);
            activeLink.style.color = "#6b9ac4";
            activeLink.style.position = "relative";
            activeLink.style.transition = "color 0.3s ease";

            // Create the pseudo-element
            var afterElement = document.createElement("span");
            afterElement.style.content = "''";
            afterElement.style.position = "absolute";
            afterElement.style.width = "100%";
            afterElement.style.height = "3px";
            afterElement.style.bottom = "-5px";
            afterElement.style.left = "0";
            afterElement.style.backgroundColor = "#6b9ac4";
            afterElement.style.transition = "all 0.3s ease";

            // Append the pseudo-element
            activeLink.appendChild(afterElement);
        }
    });

