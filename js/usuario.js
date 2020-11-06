
function logout() {

    localStorage.removeItem("usuariologado");
    window.location = "index.html";
}

function carregarusuario() {
    var usuario = localStorage.getItem("usuariologado");
    if (usuario == null) {
        window.location = "index.html";
    } else {
        var usuarioJson = JSON.parse(usuario);
        document.getElementById("dados").innerHTML =
            "<h7>Nome: " + usuarioJson.nome + " <br>Email: " + usuarioJson.email + "</h7>";
        document.getElementById("foto").innerHTML =
            "<img width='10%' heigth='10%' alt='Sem foto' src=imagens/" + usuarioJson.foto + ">";
    }
}

function logar() {
    var usuario = {
        email: document.getElementById("txtemail").value,
        senha: document.getElementById("txtsenha").value
    };

    var conteudo = {
        method: "POST",
        body: JSON.stringify(usuario),
        headers: {
            "Content-type": "application/json"
        }
    };


    fetch(API+"/login", conteudo)
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("usuariologado", JSON.stringify(res));
            window.location = "usuario.html";
        })
        .catch(err => {
            window.alert("Deu ruim");
        });

}