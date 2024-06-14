document.addEventListener("DOMContentLoaded", function() {
    const formLogin = document.getElementById("form-login");
    const formRegister = document.getElementById("form-cadastro");

    if (formLogin) {
        formLogin.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("email").value;
            const email = document.getElementById("senha").value;
            console.log(`Login de Pessoa: Nome: ${name}, Email: ${email}`);
            alert("Login realizado com sucesso!");
            formLogin.reset();
        });
    } 

    if (formRegister) {
        formRegister.addEventListener("submit", function(event) {
            event.preventDefault();
            const nameRegister = document.getElementById("name-user").value;
            const emailRegister = document.getElementById("email-user").value;
            const passwordRegister = document.getElementById("password-user").value;
            console.log(`Nome: ${nameRegister}, Email: ${emailRegister}, Senha: ${passwordRegister}`);
            alert("Cadastro realizado com sucesso!");
            formRegister.reset();
        });
    }
});
