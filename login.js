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
        .then(function (res) { console.log(res) })
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