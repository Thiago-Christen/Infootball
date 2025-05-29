const form = document.querySelector("#form");
const userInput = document.querySelector("#user");
const emailInput = document.querySelector("#email");
const contactInput = document.querySelector("#contact");
const passwordInput = document.querySelector("#password");

contactInput.addEventListener("input", formatPhone);
form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(userInput.value === "") {
        alert("É necessário que você preencha o nome do atleta para proseguir!");
        return;
    }

    if(!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ter ao menos 8 dígitos!");
        return;
    }
    form.submit();
});


function validatePassword(password, minDigits) {
    return password.length >= minDigits;
 }