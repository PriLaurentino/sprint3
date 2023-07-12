let prompt = require("prompt-sync")()

let nome = prompt("Digite seu nome: ")
let cargo = prompt("Digite seu cargo: ")
let salario = parseFloat(prompt("Digite o seu salário: "))

let salario10 = salario + salario * 0.1
//console.log(salario10)

if (salario < 1000.00) {
    console.log("Seu nome é: " + nome + ", seu cargo é: " + cargo + " e seu salário é: " + salario10)
}else{
    console.log("Seu nome é " + nome + ", seu cargo é " + cargo + " e seu salário é " + salario)
}
