const form = document.querySelector("#form");
const responsavelInput = document.querySelector("#responsavel");
const dateInput = document.querySelector('#date');
const emailInput = document.querySelector("#email");
const contactInput = document.querySelector("#contact");
const passwordInput = document.querySelector("#password");

contactInput.addEventListener("input", formatPhone);
dateInput.addEventListener('input', formatDate);

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

    if (dateInput.value.trim() === '' || !isDateValid(dateInput.value)) {
        alert('É necessário que você preencha a data de nascimento corretamente (DD/MM/AAAA)!');
        return;
    }

    if(!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ter ao menos 8 dígitos!");
        return;
    }
    form.submit();
});

function formatPhone(event) {
    let input = event.target.value.replace(/\D/g, ""); 
    if (input.length > 2) {
        input = `(${input.slice(0, 2)}) ${input.slice(2)}`; 
    }
    if (input.length > 7) {
        input = `${input.slice(0,10)}-${input.slice(10)}`; 
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

function formatDate(event) {
    let input = event.target.value.replace(/\D/g, '');
    if (input.length > 2) {
        input = `${input.slice(0, 2)}/${input.slice(2)}`;
    }
    if (input.length > 5) {
        input = `${input.slice(0, 5)}/${input.slice(5, 9)}`;
    }
    event.target.value = input;
}

function isDateValid(date) {

    const rgx = /^([0-2]\d|3[01])\/(0\d|1[0-2])\/\d{4}$/;
    return rgx.test(date);
}

function validatePassword(password, minDigits) {
    return password.length >= minDigits;
 }