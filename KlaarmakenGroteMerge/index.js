import { createLoginForm } from "./scripts/createLoginForm.js";
import { createRegisterForm } from "./scripts/createRegisterForm.js";
import { createSidebar } from "./scripts/sidebar.js";
import { setupMiniCalendar } from "./scripts/miniCalendar.js";
import { getCurrentMonth, getCurrentYear } from "./scripts/calendarUtils.js";
//currently utils are directly imported in miniCalendar.js
//i keep it here to toggle quickly when trying stuff

document.addEventListener("DOMContentLoaded", () => {
    // Load Bootstrap CSS dynamically
    const bootstrapCSS = document.createElement("link");
    bootstrapCSS.rel = "stylesheet";
    bootstrapCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    document.head.appendChild(bootstrapCSS);

    createSidebar();
    // Delay because sometimes it failed
    setTimeout(() => {
        setupMiniCalendar("mini-calendar");
    }, 100);

    // Login when sidebar is loaded
    createLoginForm();
    document.body.addEventListener("click", (event) => {
        if (event.target.id === "noAccountLink") {
            document.getElementById("loginForm")?.remove();
            createRegisterForm();
        } else if (event.target.id === "backToLogin") {
            document.getElementById("registerForm")?.remove();
            createLoginForm();
        }
    });
});
