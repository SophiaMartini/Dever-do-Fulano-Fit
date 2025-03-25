document.addEventListener("DOMContentLoaded", function() {
    const tbm = localStorage.getItem("tmb");
    const dieta = localStorage.getItem("dieta");
    const caloriasConsumidas = localStorage.getItem("caloriasConsumidas") || 0;

    let metaCalorias = 0;
    if (tmb) {
        const tbmValue = parseFloat(tmb);
        switch (dieta) {
            case "superavit":
                metaCalorias = tmbVaue +500;
                break;
            case "deficit":
                metaCalorias = tmbValue - 500;
                break;
            case "hipertrofia":
                metaCalorias = tmbValue + 300;
                break;
            default:
                metaCalorias = tmbValue;
        }
    }
    const caloriasRestantes = metaCalorias - caloriasConsumidas;

    document.getElementById("tmbDisplay").textContent = `${tbm || "Carregando..."} Calorias`;
    document.getElementById("metaCalorias").textContent = `${metaCalorias} Calorias`;
    document.getElementById("caloriasConsumidas").textContent = `${caloriasConsumidas} Calorias`;
    document.getElementById("caloriasRestantes").textContent = `${caloriasRestantes} Calorias`;
});
