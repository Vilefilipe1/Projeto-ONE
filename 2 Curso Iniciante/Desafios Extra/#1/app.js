let tituloNovo = document.querySelector("h1");
tituloNovo.innerHTML = "Hora do Desafio"; 

function consoleButton() {
    console.log("O botão foi clicado");
}

function alertaButton() {
    console.log("Eu amo JS");
}

function promptButton() {
    let cidade = prompt("Diga um nome de uma cidade.");
    alert(`Estive em ${cidade} e lembrei de você`);
}

function somaButton() {
    let valor1 = parseFloat(prompt("Diga um número."));
    let valor2 = parseFloat(prompt("Diga outro número."));
    alert(`A soma desses dois números são ${valor1 + valor2}.`);
}