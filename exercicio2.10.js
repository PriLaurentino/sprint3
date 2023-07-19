//10. Faça um programa que receba um número do usuário e continue
//a pedir o número se o numero for diferente de 0.

let prompt = require("prompt-sync")()

let numero;

do {
    numero = prompt("digite um numero: ")
} while (numero != "0");
