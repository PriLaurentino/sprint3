let prompt = require("prompt-sync")()

// Exercício 6: Cálculo de IMC
// Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
// Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
// * altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
// usuário se encontra, de acordo com a tabela a seguir:
// IMC menor que 18.5: Abaixo do peso
// IMC de 18.5 a 24.9: Peso normal
// IMC de 25.0 a 29.9: Sobrepeso
// IMC de 30.0 a 34.9: Obesidade grau 1
// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade grau 3

let altura = parseFloat (prompt( "Entre com sua altura(cm): "))
let peso = parseFloat (prompt ("Entre com sua peso(kg): "))
alt2 = (altura/100)^2

let imc = ( peso / alt2)
console.log ("IMC: " + imc)

if (imc < 18.5) {
    console.log ("Você está abaixo do peso")
}
else if (18.5 <= imc && imc < 24.9) {
    console.log ("Você está com o peso ideal")
}
else if (25.0 <= imc && imc < 29.9) {
    console.log ("Você está com sobrepeso")
}
else if (30.0 <= imc && imc < 34.9) {
    console.log ("Você está com obesidade grau I")
}
else if (35.0 <= imc && imc < 39,9) {
    console.log ("Você está com obesidade grau II")
} 
else{
    console.log ("Você está com obesidade grau III")
}