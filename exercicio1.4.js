let prompt = require("prompt-sync")()

// Exercício 4: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let ano = parseInt (prompt("Entre com o ano de seu nascimento: "))

const dataAtual = new Date ()
const anoAtual = dataAtual.getFullYear()


if (anoAtual - ano >= "18")  {
    console.log("em "+ anoAtual + " você é +18")
 }else{
     console.log ("em "+ anoAtual + " você ainda não tem 18 :'(")
 }

