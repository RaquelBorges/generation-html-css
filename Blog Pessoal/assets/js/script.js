let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let mensagem = document.querySelector("#mensagem")
let nomeOk = false
let emailOk = false
let mensagemOk = false
let mapa = document.querySelector("#mapa")
let menu = document.querySelector("#menu")
let foto = document.querySelector("#foto")


function validaNome() {

    let txtNome = document.querySelector("#txtNome")

    if (nome.value.length < 2) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
        
    }
    else {
        nomeOk = true
        txtNome.innerHTML = "✓"
        txtNome.style.color = "green"
    }
}

function validaEmail()
{
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1)
    {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
        
    }
    else{
        emailOk = true
        txtEmail.innerHTML = "✓"
        txtEmail.style.color = "green"
    }
}


function validaMensagem()
{
    let txtMensagem = document.querySelector("#txtMensagem")

    if(mensagem.value.length > 200)
    {
        txtMensagem.innerHTML = "Texto muito grande. Máximo de 200 caracteres"
        txtMensagem.style.color = "red"
    }
    else{
        mensagemOk = true
        txtMensagem.innerHTML = "✓"
        txtMensagem.style.color = "green"
        
    }
}
function enviar ()
{
    if(nomeOk == true && emailOk == true && mensagemOk == true)
    {
        alert("Mensagem enviada com sucesso!")
    }
    else
    {
        alert("Preencha corretamente o formulário antes de enviar")
    }
}

function mapaZoom ()
{
    mapa.style.width = "600px"
    mapa.style.height = "500px"
}

function mapaNormal ()
{
    mapa.style.width = "400px"
    mapa.style.height = "300px"
}
