/* function calculadoraIMC(altura, peso) {  
    return peso / (altura * altura);
}
 */
// alert(calculadoraIMC(1.7, 69.2));

function numeroFatorial(valor) {
    let resultado = 1;
    let soma = 1;
    while (valor != 0) {
        let valor1 = valor;
        let valor2 = valor - 1;
        resultado = valor1 * valor2;
        valor--;
        valor--;
        soma == 1 ? (soma = resultado): (soma = soma * resultado);
        if ((valor <= 1)) {
            return soma;
        }
    }
}


// alert(numeroFatorial(4));

function dolarParaReal(dolar) {
    return real = dolar * 4.8;
}

// alert(dolarParaReal(5))

/* function calculadoraAreaRetangular(altura, largura) {
    let numArea = altura * largura;
    let numPerimetro = (altura*2) + (largura*2);

    document.getElementById("area").innerHTML = `Área: ${numArea}`;
    document.getElementById("perimetro").innerHTML = `Perímetro: ${numPerimetro}`;
    
}

calculadoraAreaRetangular(3, 4); */

/* function calculadoraAreaCircular(raio) {
    numArea = 3.14 * (raio * raio);
    numPeri = 3.14 * raio * 2;

    document.getElementById("areaC").innerHTML = `Area Circular: ${numArea}`
    document.getElementById("perimetroC").innerHTML = `Perímetro Circular: ${numPeri}`

}

calculadoraAreaCircular(4); */

function tabuadaDeUmNumero(numOriginal) {
    let base = 1;

    while (base != 11) {
        let resMulti = numOriginal * base;
        document.getElementById(base).innerHTML = `( ${base}: ${resMulti} )`
        console.log(resMulti)
        base++;
        resMulti = 0;
    }


}

tabuadaDeUmNumero(4);