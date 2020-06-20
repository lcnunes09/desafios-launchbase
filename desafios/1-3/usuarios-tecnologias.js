const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

function imprimirUsuarios(usuario) {
    console.log(`${usuario[i].nome} trabalha com ${usuario[i].tecnologias}`)
}

function checaSeUsuarioUsaCSS(tecnologias){
    for (j = 0; j < tecnologias.length; j++){
        if (tecnologias[j] === 'CSS') {
            return true
        } 
    }

    return false
}

function usuariosTecnologias(usuarios){
    for (i = 0; i < usuarios.length; i++) {
        usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i].tecnologias)
        if (usuarioTrabalhaComCSS) {
            console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
        } 
    } 
}

usuariosTecnologias(usuarios)