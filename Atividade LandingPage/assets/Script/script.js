
let nome = document.querySelector("#nome")
let sobrenome = document.querySelector("#sobrenome")
let email = document.querySelector("#email")
let mensagem = document.querySelector("#mensagem")
let nomeOk = false
let sobrenomeOk = false
let emailOk = false
let mensagemOk = false

function validaNome() {
    if (nome.value.length < 2) {
        alertNome.innerHTML = "Campo inválido"
        alertNome.style.color = "red"
    }
    else {
        nomeOk = true
        alertNome.innerHTML = "✓"
        alertNome.style.color = "green"

    }
}

function validaSobrenome() {
    if (sobrenome.value.length < 2) {
        alertSobrenome.innerHTML = "Campo inválido"
        alertSobrenome.style.color = "red"
    }
    else {
        sobrenomeOk = true
        alertSobrenome.innerHTML = "✓"
        alertSobrenome.style.color = "green"

    }
}

function validaEmail() {
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        alertEmail.innerHTML = "Campo inválido"
        alertEmail.style.color = "red"
    }
    else {
        emailOk = true
        alertEmail.innerHTML = "✓"
        alertEmail.style.color = "green"
    }
}

function validaMensagem() {
    if (mensagem.value.length < 5) {
        alertMsg.innerHTML = "Mensagem muito curta"
        alertMsg.style.color = "red"
    }

    if (mensagem.value.length > 200) {
        alertMsg.innerHTML = "Mensagem muito longa, máximo 200 caracteres"
        alertMsg.style.color = "red"
    }

    if (mensagem.value.length > 5 && mensagem.value.length < 200 ) {
        mensagemOk = true
        alertMsg.innerHTML = "✓"
        alertMsg.style.color = "green"
    }
}

function enviaMsg ()
{
    if (nomeOk == true && sobrenomeOk == true && emailOk == true && mensagemOk == true)
    {
        alert("Mensagem enviada com sucesso! Responderemos em breve no email informado")
    }
    else 
    {
        alert("Digite todos os campos corretamente antes de enviar")
    }
}