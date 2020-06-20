pessoas = [
    {
        nome: "Jose",
        sexo: "M",
        idade: 60,
        contribuicao: 30
    },
    {
        nome: "Silvana",
        sexo: "F",
        idade: 48,
        contribuicao: 23
    }
]

tempoContribuicao = function (sexo) {
    if (sexo === "M") {
        return 35
    } else if(sexo === "F") {
        return 30
    } else {
        return false
    }
}

somaContribuicao = function (sexo) {
    if (sexo === "M") {
        return 90
    } else if(sexo === "F") {
        return 85
    } else {
        return false
    }
}

function calculaTempoContribuicao(contribuicao, idade, sexo, nome){
    const somaTotalContribuicao = somaContribuicao(sexo)
    const valorContribuicao = tempoContribuicao(sexo)
    const somaTotalPessoaContribuicao = valorContribuicao + idade;

    if (somaTotalPessoaContribuicao >= somaTotalContribuicao) {
        console.log(nome + " você pode se aposentar!")
    } else {
        console.log(nome + " você não pode se aposentar!")
    }
}

pessoas.forEach(element => {
    calculaTempoContribuicao(element.contribuicao, element.idade, element.sexo, element.nome)
});

