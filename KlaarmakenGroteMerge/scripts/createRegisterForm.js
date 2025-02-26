export function createRegisterForm() {
    const registerFormContainer = document.createElement("div");
    registerFormContainer.id = "registerForm";
    registerFormContainer.className = "auth-form";
    registerFormContainer.innerHTML = `
        <div class="card p-4 shadow-lg" style="width: 350px;">
            <h3 class="text-center mb-4">Register</h3>
            <form id="registerFormElement">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
                </div>
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="Enter your username" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter your password" required>
                </div>
                <div class="mb-3">
                    <label for="class-select" class="form-label">Select Class</label>
                    <select class="form-select" id="class-select">
                        <option>Klas1</option>
                        <option>Klas2</option>
                        <option>Klas3</option>
                    </select>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="Aua">
                    <label class="form-check-label" for="Aua">Accept User Agreement</label>
                </div>
                <button type="submit" class="btn btn-success w-100">Register</button>
            </form>
            <div class="text-center mt-3">
                <a id="backToLogin" href="#">Already have an account? Login</a>
            </div>
        </div>
    `;

    document.body.appendChild(registerFormContainer);
}
