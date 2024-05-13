function calcularSalario() {

    var nome = document.getElementById('nome').value;
    var salario = parseFloat(document.getElementById('salario').value);

    var inss = salario * 0.08;
    
    var salarioLiquido = salario - inss;
    
    var resultadoHTML = "<p>Nome do Funcionário: " + nome + "</p>" +
                        "<p>Salário bruto: R$" + salario.toFixed(2) + "</p>" +
                        "<p>Valor do INSS: R$" + inss.toFixed(2) + "</p>" +
                        "<p>Salário líquido: R$" + salarioLiquido.toFixed(2) + "</p>";
    
    document.getElementById("resultado").innerHTML = resultadoHTML;
}
