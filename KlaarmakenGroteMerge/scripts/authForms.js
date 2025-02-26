import { createRegisterForm } from "./createRegisterForm.js";
import { createLoginForm } from "./createLoginForm.js";

document.addEventListener("DOMContentLoaded", () => {
    // Ensure login and register forms are created
    createLoginForm();
    createRegisterForm();

    // Get the newly created elements
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const noAccountLink = document.getElementById("noAccountLink");

    if (!loginForm || !registerForm || !noAccountLink) {
        console.error("Auth form elements missing!");
        return;
    }

    // Ensure register form is hidden initially
    registerForm.classList.add("d-none");

    // Handle switching to register form
    noAccountLink.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Switching to register form...");

        loginForm.classList.add("d-none");  // Hide login form
        registerForm.classList.remove("d-none"); // Show register form
    });

    // Handle switching back to login form
    document.addEventListener("click", (event) => {
        if (event.target.id === "backToLogin") {
            event.preventDefault();
            console.log("Switching back to login form...");
            registerForm.classList.add("d-none");
            loginForm.classList.remove("d-none");
        }
    });
});
