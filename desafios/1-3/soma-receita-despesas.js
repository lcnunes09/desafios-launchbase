const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
];

function calculaSaldo(receitas, despesas) {
    return saldo = receitas - despesas
}

function somaNumeros(numeros) {
    let soma = 0
    numeros.forEach(element => {
        soma = soma + element
    });

    return soma
}

function saldoPositivoOuNegativo(saldo) {
    if (saldo >= 0) {
        positivoOuNegativo = ' POSITIVO '
    } else {
        positivoOuNegativo = ' NEGATIVO '
    }

    return positivoOuNegativo
}

function totalUsuario(usuarios){
    usuarios.forEach(element => {
        let totalReceitas = 0
        let totalDespesas = 0
        totalReceitas = somaNumeros(element.receitas)
        totalDespesas = somaNumeros(element.despesas)
        
        saldoUsuario = calculaSaldo(totalReceitas, totalDespesas)    
        
        positivoOuNegativo = saldoPositivoOuNegativo(saldoUsuario)

        console.log(`${element.nome} possui saldo ${positivoOuNegativo} de ${saldoUsuario}`)
    });
}

totalUsuario(usuarios)