let prompt = require("prompt-sync")()

let salario = parseFloat(prompt("Digite o seu salário: "))
let salario30 = salario + salario * 0.3
//console.log(salario10)


if (salario < 500.00) {
    console.log(`Seu salário é: R$ ${salario30.toFixed([2]).replace(".", ",")}`) // interpolação crase e $antes da variável
}else{
    console.log("Seu salário é: R$ " + salario.toFixed([2]).replace(".", ",") + " - Você não tem direito ao aumento")
}
