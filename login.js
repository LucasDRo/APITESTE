const form = document.querySelector("form");
const Iusuario = document.querySelector(".usuario");
const Isenha = document.querySelector(".senha");

function login(){
    fetch("http://localhost:8080/usuarios/login",
        {
            headers:{
               'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                nome: null,
                email: null,
                usuario: Iusuario.value,
                senha: Isenha.value,
                telefone: null
            })
        })
        .then(function (res) {  
            if (res.ok) {
                window.location.href = "/home.html"; // Redireciona para a nova página
            } else {
                window.alert("Login Inválido!");
                throw new Error('Login falhou');
            }
        })
        .then(function (data) { console.log(data) })
        .catch(function (res) { console.log(res) })
}

function limpar(){
    Iusuario.value = "";
    Isenha.value = "";
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    login();

    limpar();
});