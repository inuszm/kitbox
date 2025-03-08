document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    togglePassword.addEventListener("click", function () {
        // Cek tipe input
        if (passwordInput.type === "password") {
            passwordInput.type = "text"; // Password terlihat
            togglePassword.classList.replace("bx-hide", "bx-show"); // Ganti ikon
        } else {
            passwordInput.type = "password"; // Password tersembunyi
            togglePassword.classList.replace("bx-show", "bx-hide"); // Kembalikan ikon
        }
    });
});