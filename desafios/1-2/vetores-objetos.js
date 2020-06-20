const pessoaDesenvolvedora = {
    nome: "Luciana",
    idade: 32,
    tecnologias: [
        {
            nome: "JavaScript",
            especialidade: "Web"
        },
        {
            nome: "Python",
            especialidade: "Data Science"
        },
        {
            nome: "PHP",
            especialidade: "Web"
        }
    ]
}

console.log(`A pessoa desenvolvedora ${pessoaDesenvolvedora.nome} tem ${pessoaDesenvolvedora.idade} anos e usa a tecnologia ${pessoaDesenvolvedora.tecnologias[0].nome} com especialidade em ${pessoaDesenvolvedora.tecnologias[0].especialidade}.`)