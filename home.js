document.addEventListener("DOMContentLoaded", function () {
    let usuarioAtual = JSON.parse(localStorage.getItem("usuarioAtual"));
    
    if (!usuarioAtual) {
        alert("Nenhum usuário logado!");
        window.location.href = "registro.html";
        return;
    }
    let { peso, altura, idade, sexo, objetivo, trh } = usuarioAtual;
    altura = altura / 100; 
    sexo = sexo.toLowerCase();

    let tmb = (sexo === "masculino")
        ? (10 * peso) + (6.25 * (altura * 100)) - (5 * idade) + 5
        : (10 * peso) + (6.25 * (altura * 100)) - (5 * idade) - 161;
    
    let fatorAtividade = {
        "sedentario": 1.2,
        "leve": 1.375,
        "moderado": 1.55,
        "intenso": 1.725,
        "muito_intenso": 1.9
    }[trh] || 1.2;
    
    let necessidadeCalorica = tmb * fatorAtividade;

    if (objetivo === "Hipertrofia" || objetivo === "Superavit Calorico") necessidadeCalorica += 500;
    if (objetivo === "Deficit Calorico") necessidadeCalorica -= 500;

    let proteinas = peso * 2;  
    let gorduras = peso * 1;   
    let carboidratos = (necessidadeCalorica - (proteinas * 4 + gorduras * 9)) / 4;


    document.getElementById("proteinas").textContent = proteinas.toFixed(2);
    document.getElementById("gorduras").textContent = gorduras.toFixed(2);
    document.getElementById("carboidratos").textContent = carboidratos.toFixed(2);

    
    document.getElementById("barraProteinas").style.width = `${(proteinas / 300) * 100}%`;
    document.getElementById("barraGorduras").style.width = `${(gorduras / 100) * 100}%`;
    document.getElementById("barraCarboidratos").style.width = `${(carboidratos / 500) * 100}%`;

    
    if (usuarioAtual.objetivo) {
        document.getElementById("objetivoUsuario").textContent = usuarioAtual.objetivo;
    } else {
        document.getElementById("objetivoUsuario").textContent = "Não definido";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let usuarioAtual = JSON.parse(localStorage.getItem("usuarioAtual"));

    if (!usuarioAtual) {
        alert("Nenhum usuário logado!");
        window.location.href = "registro.html";
        return;
    }

    let { peso, altura, idade, sexo, objetivo, trh } = usuarioAtual;
    altura = altura / 100;  

    sexo = sexo.toLowerCase();

    let tmb = (sexo === "masculino")
        ? (10 * peso) + (6.25 * (altura * 100)) - (5 * idade) + 5
        : (10 * peso) + (6.25 * (altura * 100)) - (5 * idade) - 161;

    let fatoresAtividade = {
        "sedentario": 1.2,
        "leve": 1.375,
        "moderado": 1.55,
        "intenso": 1.725,
        "muito_intenso": 1.9
    };

    let fatorAtividade = fatoresAtividade[trh] || 1.2;

    let necessidadeCalorica = tmb * fatorAtividade;

    if (objetivo === "Hipertrofia" || objetivo === "Superavit Calorico") necessidadeCalorica += 500;
    if (objetivo === "Deficit Calorico") necessidadeCalorica -= 500;

    let proteinas = peso * 2;
    let gorduras = peso * 1;
    let carboidratos = (necessidadeCalorica - (proteinas * 4 + gorduras * 9)) / 4;
 
    document.getElementById("objetivoUsuario").textContent = usuarioAtual.objetivo || "Não definido";
    document.getElementById("fatorAtividadeUsuario").textContent = `${trh} (${fatorAtividade})`;
});

function abrirPopup(receita, ingredientes, modo, videoUrl) {
    document.getElementById('nomePopUp').innerHTML = receita;
    document.getElementById('ingredientesPopUp').innerHTML = ingredientes;
    document.getElementById('modoPreparo').innerHTML = modo;

    document.getElementById('popUp').classList.add('ativo');
    document.getElementById('overlay').classList.add('ativo');
    
    document.getElementById('video').style.display = 'none';

    document.getElementById('video-frame').src = videoUrl;
}

function fecharPopup() {
    document.getElementById('popUp').classList.remove('ativo');
    document.getElementById('overlay').classList.remove('ativo');
}

function mostrarIngredientes() {;
    document.getElementById('video').style.display = 'none'; // Esconde o vídeo
}

function mostrarVideo() {
    document.getElementById('video').style.display = 'block';
}
