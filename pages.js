
const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;
        const message = document.getElementById("message");

        if (password !== confirmPassword) {
            message.textContent = "Your passwords do not match.";
            message.style.color = "#c0392b";
            return;
        }

        message.style.color = "#247a45";

        setTimeout(function () {
            window.location.href = "index.html";
        }, 1000);
    });
}


const signinForm = document.getElementById("signinForm");

if (signinForm) {
    signinForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const message = document.getElementById("message");

        message.textContent =
            "Sign-in page is working! Real login will be added with the backend.";
        message.style.color = "#247a45";
    });
}

