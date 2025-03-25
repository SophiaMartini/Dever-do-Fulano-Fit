document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("login"); // Supondo que o ID do formulário de login seja "login"

    if (formLogin) {
        formLogin.addEventListener("submit", function (e) {
            e.preventDefault();

            let email = document.getElementById("email").value.trim();
            let senha = document.getElementById("senha").value.trim();

            // Validações básicas
            if (!email || !senha) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            // Carregar a lista de usuários do localStorage
            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

            // Encontrar o usuário com o e-mail fornecido
            let usuarioEncontrado = usuarios.find(user => user.email === email);

            if (!usuarioEncontrado) {
                alert("Usuário não encontrado.");
                return;
            }

            // Verificar se a senha fornecida corresponde à senha do usuário
            if (usuarioEncontrado.senha !== senha) {
                alert("Senha incorreta.");
                return;
            }

            // Se tudo estiver correto, armazena o usuário atual no localStorage
            localStorage.setItem("usuarioAtual", JSON.stringify(usuarioEncontrado));

            // Redirecionar para a página home
            window.location.href = "home.html";
        });
    }
});
