function calcularSalario() {
    var nome = document.getElementById('nome').value;
    var salario = parseFloat(document.getElementById('salario').value);
    
    var taxaDesconto;
    var valorDesconto;
    
    if (salario <= 1000) {
        taxaDesconto = 0.08;
    } else if (salario > 1000 && salario <= 1500) {
        taxaDesconto = 0.085;
    } else {
        taxaDesconto = 0.09;
    }
    
    valorDesconto = salario * taxaDesconto;
    
 
    var resultadosHTML = "<p>Nome do Funcionário: " + nome + "</p>" +
                         "<p>Salário em consideração: R$" + salario.toFixed(2) + "</p>" +
                         "<p>Taxa de desconto: " + (taxaDesconto * 100) + "%</p>" +
                         "<p>Valor do desconto: R$" + valorDesconto.toFixed(2) + "</p>";
    

    document.getElementById("resultados").innerHTML = resultadosHTML;
}

