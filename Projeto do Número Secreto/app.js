alert("Boas vindas ao jogo do número secreto!");
let numeroMax = "40"
let numeroAlea = Math.random()
console.log(numeroAlea)
let numeroSecreto = parseInt((numeroAlea + 1) * numeroMax);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    chute = prompt(`Qual é o número secreto? de 1 a ${numeroMax}`);
    console.log(chute);
    console.log('Resultado da comparação:', chute == numeroSecreto);
    if (numeroSecreto == chute) {
        break;
    }else {
        tentativas = 1 + tentativas;
        if (numeroSecreto > chute) {
            alert(`O numero secreto é maior que ${chute}`);
        } else {
            alert(`O numero secreto é menor que ${chute}`);
        }
    }
}

// Operador ternário = Seria bom dá uma estudada sobre

let palavTentativas = tentativas > 1 ? "tentativas":"tentativa"
alert(`Você acertou! Seu número é ${numeroSecreto} com ${tentativas} ${palavTentativas}!`);

/* if (tentativas > 1) {
    alert(`Você acertou! Seu número é ${numeroSecreto} com ${tentativas} tentativas!`);
} else {
    alert(`Você acertou! Seu número é ${numeroSecreto} com ${tentativas} tentativa!`);
} */


