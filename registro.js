document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registro");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); 

            let nome = document.getElementById("nome").value.trim();
            let email = document.getElementById("email").value.trim();
            let senha1 = document.getElementById("senha1").value.trim();
            let senha2 = document.getElementById("senha2").value.trim();
            let peso = document.getElementById("peso").value.trim();
            let altura = document.getElementById("altura").value.trim();
            let idade = parseInt(document.getElementById("idade").value.trim()) || 0;
            let sexo = document.getElementById("sexo").value.trim();
            let trh = document.getElementById("trh").value.trim();
            let objetivo = document.getElementById("objetivo").value.trim();

            // Validações
            if (idade < 14) {
                alert("Idade mínima não atingida.");
                return;
            }

            let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email)) {
                alert("E-mail inválido. Insira um e-mail no formato fulano@email.com");
                return;
            }

            if (senha1 !== senha2) {
                alert("As senhas não coincidem.");
                return;
            }

            if (senha1.length < 6) {
                alert("A senha deve possuir no mínimo 6 caracteres.");
                return;
            }
            let usuarioExistente = usuarios.find((user) => user.email === email);
            if (usuarioExistente) {
                alert("Este e-mail já está cadastrado!");
                return;
}
            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            usuarios.push({ nome, email, senha: senha1, peso, altura, idade, sexo, trh, objetivo });

            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            alert("Cadastro realizado com sucesso!");

            window.location.href = "home.html"; 
        });
    }
});
