const nome = "Tânia"
const peso = "80"
const altura = "1.65"
const sexo = "F"

function calculoImc(peso, altura){
    return imc = peso / (altura * altura)
}

calculoImc(peso, altura)

if (imc >= 30) {
    console.log(`${nome} seu IMC é igual ou maior que 30: ${imc}.`)
} else {
    console.log(`${nome} seu IMC é menor que 30: ${imc}.`)
}