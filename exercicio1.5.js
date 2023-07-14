let prompt = require("prompt-sync")()

// Exercício 5: Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

let valor = parseFloat (prompt("Entre com o valor total de sua compra: ").replace(",", "."))
let total = parseFloat (valor * 1.0)
let total10 = parseFloat (valor * 1.1)
let total20 = parseFloat (valor * 1.2)

if (valor <= 100) {
    console.log ("Sem desconto desta vez amiga! Total de sua compra: R$ "+ total .toFixed([2]) .replace(".", ","))
}

else if(valor > 200) {
    console.log ("desconto de 20%!!! Total de sua compra: R$ " + total20.toFixed([2]).replace(".", ","))
}

else {    
    console.log ("desconto de 10%!!! Total de sua compra: R$ " + total10.toFixed([2]).replace(".", ","))
}