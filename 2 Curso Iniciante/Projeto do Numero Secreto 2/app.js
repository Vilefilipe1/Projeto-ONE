function textoHTML(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function gerarNumeroAleatorio(numeroMax) {
    return parseInt(Math.random() * numeroMax + 1);
}

function verificarChute() {
    let valor = document.querySelector("input").value;
    console.log(valor == numeroSecreto);
}

textoHTML("h1", "Jogo do Número Secreto");
textoHTML("p", "Escolha um número entre 0 e 10.");
let numeroSecreto = gerarNumeroAleatorio(10);
