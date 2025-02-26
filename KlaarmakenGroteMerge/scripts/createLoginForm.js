export function createLoginForm() {
    const loginFormContainer = document.createElement("div");
    loginFormContainer.id = "loginForm";
    loginFormContainer.className = "auth-form";
    loginFormContainer.innerHTML = `
        <div class="card p-4 shadow-lg" style="width: 350px;">
            <h3 class="text-center mb-4">Login</h3>
            <form id="loginFormElement">
                <div class="mb-3">
                    <label for="loginEmail" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="loginEmail" placeholder="Enter your email" required>
                </div>
                <div class="mb-3">
                    <label for="loginPassword" class="form-label">Password</label>
                    <input type="password" class="form-control" id="loginPassword" placeholder="Enter your password" required>
                </div>
                <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
            <div class="text-center mt-3">
                <a id="noAccountLink" href="#">No account yet? Register here</a>
            </div>
        </div>
    `;

    document.body.appendChild(loginFormContainer);

    document.getElementById("loginFormElement").addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        console.log("Login attempted with:", email, password);
        // You can add an actual authentication request here
    });
}
