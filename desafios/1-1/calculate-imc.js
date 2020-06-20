const name = "Tânia"
const weight = "80"
const height = "1.65"
const gender = "F"

function calculateIMC(weight, height){
    return imc = weight / (height * height)
}

calculateIMC(weight, height)

if (imc >= 30) {
    console.log(`${name}: your IMC is equal or greater than 30: ${imc}.`)
} else {
    console.log(`${name}: your IMC is lower than 30: ${imc}.`)
}