function togglePassword(btn) {
    const input = btn.closest(".field-pw").querySelector("input");
    const isHidden = input.type === "password";

    // Toggle input type
    input.type = isHidden ? "text" : "password";

    btn.innerHTML = isHidden
        ? `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </svg>
    `
        : `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    `;
}

function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("❌ Passwords do not match.");
        return;
    }

    // Load existing users or create empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    if (users.some((user) => user.email === email)) {
        alert("❌ Email already registered.");
        return;
    }

    // Add new user
    users.push({email, password});

    // Save back to LocalStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Registration successful!");
    window.location.href = "login.html";
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
        alert("❌ Invalid credentials.");
        return;
    }

    alert("✅ Login successful!");
    window.location.href = "index.html";
}

