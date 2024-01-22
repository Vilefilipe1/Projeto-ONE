function textoHTML(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function gerarNumeroAleatorio(numeroMax) {
    let numeroRandom = parseInt(Math.random() * numeroMax + 1);
    (listaDeNumeroSorteado.length == numeroMax) ? listaDeNumeroSorteado = []:"";
    if (listaDeNumeroSorteado.includes(numeroRandom)) {
        return gerarNumeroAleatorio(numeroMax);
    } else {
        listaDeNumeroSorteado.push(numeroRandom);
        return numeroRandom;
    }

}

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        textoHTML("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas":"tentativa";
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        textoHTML("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        tentativas++;
        textoHTML("p", numeroSecreto > chute ? "O numero secreto é MAIOR que o chute.":"O numero secreto é MENOR que o chute.");
        limparCampo()

    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(numMax);
    limparCampo();
    tentativas = 1;
    exibirMensagem();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function exibirMensagem() {
    textoHTML("h1", "Jogo do Número Secreto");
    textoHTML("p", `Escolha um número entre 0 e ${numMax}.`);
}

let listaDeNumeroSorteado = [];
let numMax = 3;
let tentativas = 1
let numeroSecreto = gerarNumeroAleatorio(numMax);
console.log(numeroSecreto);
exibirMensagem(numMax);
