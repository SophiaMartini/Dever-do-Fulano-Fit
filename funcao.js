function validarSenhas(){
    var senha1 = document.getElementById("senha1").value;
    var senha2 = document.getElementById ("senha2").value;

    if (senha1 !== senha2) {
        alert("As senhas não coincidem!")
        return false;
    }

    return true;
}
