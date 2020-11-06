function logout() {

    localStorage.removeItem("usuariologado");
    window.location = "index.html";
}

function filtrar() {
    fetch(API+"/data/" +
        document.getElementById("txtinicio").value +
        "/" + document.getElementById("txtfim").value)
        .then(res => res.json())
        .then(res => montartabela(res));
}

function montartabela(lista) {
    var tabela =
        "<table class='table' border='1' align='center' width='80%' cellspacing='2'>" +
        "<tr>" +
        "<th>Data do Evento</th>" +
        "<th>Tipo de Alarme</th>" +
        "<th>Hostname do Equipamento</th>" +
        "</tr>";
    for (cont = 0; cont < lista.length; cont++) {
        tabela +=
            "<tr>" +
            "<td>" + lista[cont].data + "</td>" +
            "<td>" + lista[cont].alarme.descricao + "</td>" +
            "<td>" + lista[cont].equipamento.hostname + "</td></tr>";
    }
    tabela += "</table>";
    document.getElementById("resultadoevt").innerHTML =tabela;
} 
