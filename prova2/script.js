// Escreva um programa em JavaScript que solicite ao usuário o nome, altura em centímetros e peso de uma pessoa. O programa deve calcular o índice de massa corporal (IMC) dessa pessoa, considerando a fórmula IMC = peso / (altura * altura), onde a altura deve ser convertida de centímetros para metros. Em seguida, o programa deve classificar o peso com base no IMC calculado, de acordo com a tabela a seguir:

// Menor que 16: Baixo peso muito grave
// De 16 a 16.99: Baixo peso grave
// De 17 a 18.49: Baixo peso
// De 18.50 a 24.99: Peso normal
// De 25 a 29.99: Sobrepeso
// De 30 a 34.99: Obesidade grau I
// De 35 a 39.99: Obesidade grau II
// Maior ou igual a 40: Obesidade grau III
// O programa deve exibir o nome da pessoa, o índice de massa corporal calculado e a classificação correspondente.

const nome = prompt("Qual o seu nome?")
const altura = Number(prompt("Qual a sua altura em centímetros?"))
const peso = Number(prompt("Qual o seu peso?"))
const imc = peso/((altura/100)**2)

let situacao = ""
if (imc < 16) {
    situacao = "Baixo peso muito grave"
} else if (imc >= 16 && imc < 17) {
    situacao = "Baixo peso grave"
} else if (imc >= 17 && imc < 18.5) {
    situacao = "Baixo peso"
} else if (imc >= 18.5 && imc < 25) {
    situacao = "Peso normal"
} else if (imc >= 25 && imc < 30) {
    situacao = "Sobrepeso"
} else if (imc >= 30 && imc < 35) {
    situacao = "Obesidade grau I"
} else if (imc >= 35 && imc < 40) {
    situacao = "Obesidade grau II"
} else {
    situacao = "Obesidade grau III"
}

console.log(situacao)
alert(`${nome} seu imc é ${imc}, e sua situação é: ${situacao}`)