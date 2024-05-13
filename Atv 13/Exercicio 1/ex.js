function calcularDiferenca() {
    var variavel1 = 5;
    var variavel2 = 3;
    var diferenca = variavel1 - variavel2;
    console.log("A diferença entre as duas variáveis é: " + diferenca);
}

function calcularResultado() {
    var variavel1 = 5;
    var variavel2 = 3;
    var resultadoSoma = (variavel1 * 2) + (variavel2 * 3);
    var resultadoMultiplicacao = variavel1 * variavel2;
    console.log("O dobro da primeira variável mais o triplo da segunda variável é: " + resultadoSoma);
    console.log("A multiplicação das duas variáveis é: " + resultadoMultiplicacao);
}

function ordenarValores() {
    var valor1 = 10;
    var valor2 = 7;
    if (valor1 > valor2) {
        console.log(valor1 + " é maior que " + valor2);
        console.log(valor2 + " é menor que " + valor1);
    } else if (valor2 > valor1) {
        console.log(valor2 + " é maior que " + valor1);
        console.log(valor1 + " é menor que " + valor2);
    } else {
        console.log("Os valores são iguais: " + valor1 + " e " + valor2);
    }
}


