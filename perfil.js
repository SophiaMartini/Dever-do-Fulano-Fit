document.addEventListener("DOMContentLoaded", function () {
    
    let usuarios = JSON.parse(localStorage.getItem("usuarios")); 

    if (usuarios && usuarios.length > 0) {
        let usuario = usuarios[0]; 

       
        document.getElementById("infos1").innerHTML = `
            <p><strong>Nome: </strong>${usuario.nome}</p>
            <p><strong>Email: </strong>${usuario.email}</p>
        `;

        document.getElementById("infos2").innerHTML = `
            <p><strong>Sexo: </strong>${usuario.sexo}</p>
            <p><strong>Objetivo: </strong>${usuario.objetivo}</p>
            <p><strong>Idade: </strong>${usuario.idade}</p>
        `;

        document.getElementById("infos3").innerHTML = `
            <p><strong>TRH: </strong>${usuario.trh}</p>
            <p><strong>Altura: </strong>${usuario.altura}</p>
            <p><strong>Peso: </strong>${usuario.peso}</p>
        `;
    } else {
        document.getElementById("infos1").textContent = "Nenhum usuário cadastrado.";
        document.getElementById("infos2").textContent = "";
        document.getElementById("infos3").textContent = "";
    }

    // Função para editar perfil
    window.editarPerfil = function () {
        document.getElementById("form").style.display = "block"; 

       
        if (usuarios && usuarios.length > 0) {
            let usuario = usuarios[0];
            document.getElementById("editarnome").value = usuario.nome;
            document.getElementById("editaremail").value = usuario.email;
            document.getElementById("editarobjetivo").value = usuario.objetivo;
            document.getElementById("editarpeso").value = usuario.peso;
        }
    };


    const formEdit = document.getElementById("editar");
    formEdit.addEventListener("submit", function (e) {
        e.preventDefault();

       
        let usuario = usuarios[0];
        const novoUsuario = {
            nome: document.getElementById("editarnome").value,
            email: document.getElementById("editaremail").value,
            senha: document.getElementById("editarsenha").value,
            sexo: usuario.sexo,   
            idade: usuario.idade,
            altura: usuario.altura,
            peso: document.getElementById("editarpeso").value, 
            trh: usuario.trh,     
            objetivo: document.getElementById("editarobjetivo").value, 
        };


        if (novoUsuario.senha !== document.getElementById("editarsenhaconfirmar").value) {
            alert("As senhas não coincidem.");
            return; 
        }

        usuarios[0] = novoUsuario; // Atualiza o primeiro usuário
        localStorage.setItem("usuarios", JSON.stringify(usuarios)); // Salva a lista de usuários de volta no localStorage

        document.getElementById("infos1").innerHTML = `
            <p><strong>Nome: </strong>${novoUsuario.nome}</p>
            <p><strong>Email: </strong>${novoUsuario.email}</p>
        `;
        document.getElementById("infos2").innerHTML = `
            <p><strong>Sexo: </strong>${novoUsuario.sexo}</p>
            <p><strong>Objetivo: </strong>${novoUsuario.objetivo}</p>
            <p><strong>Idade: </strong>${novoUsuario.idade}</p>
        `;
        document.getElementById("infos3").innerHTML = `
            <p><strong>TRH: </strong>${novoUsuario.trh}</p>
            <p><strong>Altura: </strong>${novoUsuario.altura}</p>
            <p><strong>Peso: </strong>${novoUsuario.peso}</p>
        `;

        document.getElementById("form").style.display = "none";
    });
});
