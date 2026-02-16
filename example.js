const form = document.getElementById("myForm");
const extraFields = document.getElementById("extraFields");

let step = 1;
let captchaText = "";

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    if (step === 1) {
        // Generate random 4-digit captcha
        captchaText = Math.floor(1000 + Math.random() * 9000).toString();

        extraFields.innerHTML = `
            <div class="captcha-box">Captcha: ${captchaText}</div>
            <input type="text" id="captchaInput" placeholder="Enter captcha" required>
            <input type="password" id="field3" placeholder=" Enter password" required>
        `;

        step = 2;
    } 
    else if (step === 2) {
        const userCaptcha = document.getElementById("captchaInput").value;

        if (userCaptcha === captchaText) {
            alert("Submitted successfully");
        } else {
            alert("Invalid captcha");
        }
    }
});
