function logout() {

    localStorage.removeItem("usuariologado");
    window.location = "index.html";
}

function filtrarcontagem(){
        fetch(API+"/contador/" + 
        document.getElementById("txtinicio").value + 
        "/" + document.getElementById("txtfim").value)
                .then(res => res.json())
                .then(res=> montartabelacontagem(res));
    }

    function montartabelacontagem(lista){
            var tabela =
            "<table class='table' border='1' align='center' width='80%' cellspacing='2'>" +
            "<tr>" +
            "<th>Alarme</th>"+
            "<th>Quantidade de alarmes no Período</th>"+
            "</tr>";
    for (cont=0;cont<lista.length;cont+=2){
                tabela+= 
                "<tr>" +
                "<td>" + lista[cont] + "</td>" + 
                "<td>" + lista[cont+1] + "</td></tr>";
            }
    tabela+="</table>";
            document.getElementById("resultadoalarme").innerHTML=tabela;
        } 