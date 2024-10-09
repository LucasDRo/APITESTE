const logoutBtn = document.querySelector("#logoutBtn")

if(!(localStorage.getItem("login"))){
    window.location.href = "../../index.html";
}

function logout(){
    localStorage.removeItem("login")
    window.location.href = "../../index.html";
}

logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    logout();
    
});