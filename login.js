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
                usuario: Iusuario.value,
                senha: Isenha.value
            })
        })
        .then(function (res) { 
            if (res.ok) {
                return res.json(); // Assume que o servidor retorna um JSON
            } else {
                throw new Error('Login falhou');
            }
        })
        .then(function (data) {
            // Supondo que o data contém informações úteis
            console.log(data);
            window.location.href = "/home.html"; // Redireciona para a nova página
        })
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