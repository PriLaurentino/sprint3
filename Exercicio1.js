let prompt = require("prompt-sync")()

let nome = prompt("Digite seu nome: ")
let cargo = prompt("Digite seu cargo: ")
let salario = parseFloat(prompt("Digite o seu salário: "))

let salario10 = salario + salario * 0.1
//console.log(salario10)

if (salario < 1000.00) {
    console.log("Seu nome é: " + nome + ", seu cargo é: " + cargo + " e seu salário é: R$ " + salario10.toFixed([2]).replace(".", ","))
}else{
    console.log("Seu nome é " + nome + ", seu cargo é " + cargo + " e seu salário é R$ " + salario.toFixed([2]).replace(".", ","))
}


//let salario10 = salario + salario * 0.1 n
//pode apenas multiplicar o número direto por 1.1
