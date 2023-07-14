let prompt = require("prompt-sync")()

// Exercício 3: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let a = parseInt (prompt("Digite o primeiro número: "))
let b = parseInt (prompt("Agora, digite o segundo número: "))
let c = parseInt (prompt("E agora, digite o último número: "))

if ((a < b) && (b < c)) {
    console.log ("Os números estão em ordem crescente!!!") 
}else{
    console.log ("Os números não estão em ordem crescente!!!")
}