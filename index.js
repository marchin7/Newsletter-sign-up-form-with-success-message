const form = document.querySelector("form");
const emailInput = document.querySelector(".email-input");
const errorMsg = document.querySelector(".error-msg");
const successEmail = document.querySelector(".success-card-email");
const successCard = document.querySelector(".success-card");
const mainSection = document.querySelector(".main-section");
const dismissBtn = document.querySelector(".dismiss-btn");
const emailRegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitForm();
});

function submitForm() {
    if (!emailRegExp.test(emailInput.value)) {
        emailInput.classList.add("error");
        errorMsg.classList.add("error");
    } else {
        mainSection.classList.add("hide");
        successCard.classList.add("visible");
        successEmail.innerText = emailInput.value;
    }
}

emailInput.addEventListener("input", () => {
    if (emailInput.value == "" || emailRegExp.test(emailInput.value)) {
        emailInput.classList.remove("error");
        errorMsg.classList.remove("error");
    }
});

dismissBtn.addEventListener("click", () => {
    window.location.href = window.location;
});
