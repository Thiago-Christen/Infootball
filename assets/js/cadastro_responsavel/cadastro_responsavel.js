const form = document.querySelector("#form");
const responsavelInput = document.querySelector("#responsavel");
const userInput = document.querySelector("#user");
const emailInput = document.querySelector("#email");
const contactInput = document.querySelector("#contact");
const passwordInput = document.querySelector("#password");

contactInput.addEventListener("input", formatPhone);
form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(responsavelInput.value === "") {
        alert("É necessário que você preencha o seu nome para proseguir!");
        return;
    }

    if(userInput.value === "") {
        alert("É necessário que você preencha o nome do atleta para proseguir!");
        return;
    }

    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("É necessário que você preencha o seu e-mail corretamente para proseguir!");
        return;
    }

    if(contactInput.value === "" || !isPhoneValid(contactInput.value)) {
        alert("É necessário que você preencha o contato corretamente para proseguir!");
        return;
    }

    if(!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ter ao menos 8 dígitos!");
        return;
    }
    form.submit();
});

function formatPhone(event) {
    let input = event.target.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
    if (input.length > 2) {
        input = `(${input.slice(0, 2)}) ${input.slice(2)}`; // Adiciona espaço após o DDD
    }
    if (input.length > 7) {
        input = `${input.slice(0,10)}-${input.slice(10)}`; // Adiciona hífen após o primeiro grupo de 5 dígitos
    }
    event.target.value = input;
}

function isEmailValid(email) {
    const rgx = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]/
    );
    
    return rgx.test(email);
}

function isPhoneValid(contact) {
    const rgx = /^\d{2}\d{4,5}\d{4}$/;
    return rgx.test(contact);
}


function validatePassword(password, minDigits) {
    return password.length >= minDigits;
 }