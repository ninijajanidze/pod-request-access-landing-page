const inputField = document.querySelector('.inputField');
const errorMessage = document.querySelector('.error');
const submit = document.querySelector(".submitButton");

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

submit.addEventListener("click", function() {
    if (!emailRegex.test(inputField.value)) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
    }
    console.log("clicked");
});

