document.addEventListener("DOMContentLoaded", () => {
    // Navigation links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            const target = link.dataset.target;
            if (target) window.location.href = target;
        });
    });

    // Form validation for login and signup
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", (event) => {
            const inputs = form.querySelectorAll("input[required]");
            let valid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "1px solid #ccc";
                }
            });
            if (!valid) {
                event.preventDefault();
                alert("Please fill out all required fields.");
            }
        });
    });

    // Toggle between login and signup forms
    document.querySelectorAll(".toggle-btn button").forEach(button => {
        button.addEventListener("click", () => {
            const formId = button.getAttribute("onclick").match(/'(.*?)'/)[1];
            document.querySelectorAll(".form").forEach(form => {
                form.classList.remove("active");
            });
            document.getElementById(formId).classList.add("active");
        });
    });

    // Redirect buttons with validation
    document.querySelectorAll(".redirect-btn").forEach(button => {
        button.addEventListener("click", () => {
            const form = button.closest(".form");
            let valid = true;
            if (form) {
                const inputs = form.querySelectorAll("input[required]");
                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        valid = false;
                        input.style.border = "2px solid red";
                    } else {
                        input.style.border = "1px solid #ccc";
                    }
                });
                if (!valid) {
                    alert("Please fill out all fields before proceeding.");
                    return;
                }
            }
            const target = button.dataset.target;
            if (target) window.location.href = target;
        });
    });
});