function olaMundoConsole() {
    console.log("Olá, mundo!");
}

function nomeDoUser(nome) {
    console.log(`Olá, ${nome}`);
}

function dobrarNumero(numero) {
    return numero * 2;
}

function mediaAritmetica(valor1, valor2, valor3) {
    return (valor1 + valor2 + valor3) / 3;
}

function maiorOuMenor(valor1, valor2) {
    return valor1 > valor2 ? valor1:valor2;
}

function multiplicaPorSi(valor1) {
    return valor1 * valor1;
}


olaMundoConsole();
nomeDoUser("Filipe");
console.log(dobrarNumero(8));
console.log(mediaAritmetica(5,2,7));
console.log(maiorOuMenor(9, 8));
console.log(multiplicaPorSi(8))
