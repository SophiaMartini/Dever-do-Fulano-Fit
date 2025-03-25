document.addEventListener("DOMContentLoaded", function () {
    
    let usuarioAtual = JSON.parse(localStorage.getItem("usuarioAtual")); 

    if (usuarioAtual) {
        document.getElementById("infos1").innerHTML = `
            <p><strong>Nome: </strong>${usuarioAtual.nome}</p>
            <p><strong>Email: </strong>${usuarioAtual.email}</p>
        `;

        document.getElementById("infos2").innerHTML = `
            <p><strong>Sexo: </strong>${usuarioAtual.sexo}</p>
            <p><strong>Objetivo: </strong>${usuarioAtual.objetivo}</p>
            <p><strong>Idade: </strong>${usuarioAtual.idade}</p>
        `;

        document.getElementById("infos3").innerHTML = `
            <p><strong>TRH: </strong>${usuarioAtual.trh}</p>
            <p><strong>Altura: </strong>${usuarioAtual.altura}</p>
            <p><strong>Peso: </strong>${usuarioAtual.peso}</p>
        `;
    } else {
        document.getElementById("infos1").textContent = "Nenhum usuário cadastrado.";
        document.getElementById("infos2").textContent = "";
        document.getElementById("infos3").textContent = "";
    }

    // Função para editar perfil
    window.editarPerfil = function () {
        document.getElementById("form").style.display = "block"; 

        if (usuarioAtual) {
            document.getElementById("editarnome").value = usuarioAtual.nome;
            document.getElementById("editaremail").value = usuarioAtual.email;
            document.getElementById("editarobjetivo").value = usuarioAtual.objetivo;
            document.getElementById("editarpeso").value = usuarioAtual.peso;
        }
    };

    const formEdit = document.getElementById("editar");
    formEdit.addEventListener("submit", function (e) {
        e.preventDefault();

        // Atualiza o usuário atual com os novos valores
        usuarioAtual.nome = document.getElementById("editarnome").value;
        usuarioAtual.email = document.getElementById("editaremail").value;
        usuarioAtual.peso = document.getElementById("editarpeso").value;
        usuarioAtual.objetivo = document.getElementById("editarobjetivo").value;

        // Se a senha foi alterada, verifica se as senhas coincidem
        let novaSenha = document.getElementById("editarsenha").value;
        let confirmarSenha = document.getElementById("editarsenhaconfirmar").value;

        if (novaSenha && novaSenha.length >= 6) {
            if (novaSenha !== confirmarSenha) {
                alert("As senhas não coincidem.");
                return;
            }
            usuarioAtual.senha = novaSenha;
        }

        // Salva as mudanças no localStorage
        localStorage.setItem("usuarioAtual", JSON.stringify(usuarioAtual));

        // Atualiza a lista de usuários no localStorage
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        let index = usuarios.findIndex(user => user.email === usuarioAtual.email);
        if (index !== -1) {
            usuarios[index] = usuarioAtual;
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }

        // Atualiza a exibição do perfil na tela
        document.getElementById("infos1").innerHTML = `
            <p><strong>Nome: </strong>${usuarioAtual.nome}</p>
            <p><strong>Email: </strong>${usuarioAtual.email}</p>
        `;
        document.getElementById("infos2").innerHTML = `
            <p><strong>Sexo: </strong>${usuarioAtual.sexo}</p>
            <p><strong>Objetivo: </strong>${usuarioAtual.objetivo}</p>
            <p><strong>Idade: </strong>${usuarioAtual.idade}</p>
        `;
        document.getElementById("infos3").innerHTML = `
            <p><strong>TRH: </strong>${usuarioAtual.trh}</p>
            <p><strong>Altura: </strong>${usuarioAtual.altura}</p>
            <p><strong>Peso: </strong>${usuarioAtual.peso}</p>
        `;

        document.getElementById("form").style.display = "none";
        alert("Perfil atualizado com sucesso!");
    });
});
