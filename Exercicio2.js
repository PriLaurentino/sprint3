let prompt = require("prompt-sync")()

let salario = parseFloat(prompt("Digite o seu salário: "))
let salario30 = salario + salario * 0.3
//console.log(salario10)

if (salario < 500.00) {
    console.log("Seu salário é: " + salario30)
}else{
    console.log("Seu salário é: " + salario + " - Você não tem direito ao aumento")
}
