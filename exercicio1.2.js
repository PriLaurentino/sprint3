let prompt = require("prompt-sync")()

// Exercício 2: Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.

let numero = parseInt (prompt("Entre com um número de 1 a 7: "))

// if (numero == 1) {
//     console.log ("Segunda-feira") 
// }else if(numero == 2){
//    console.log ("Terça-feira") 
// }else if(numero == 3){
//     console.log ("Quarta-feira") 
// }else if(numero == 4){
//     console.log ("Quinta-feira") 
// }else if(numero == 5){
//     console.log ("Sexta-feira") 
// }else if(numero == 6){
//     console.log ("Sábado") 
// }else{
//     console.log ("Domingo") 
// }

switch (numero) {
    case 1:
        console.log("Segunda-feira");
        break;

    case 2:
        console.log("Terça-feira");
        break;

    case 3:
        console.log("Quarta-feira");
        break;

    case 4:
        console.log("Quinta-feira");
        break;

    case 5:
        console.log("Sexta-feira");      
        break;

    case 6:
        console.log("Sábado");
        break;

    case 6:
        console.log("Domingo");
        break;

    default:
        console.log("digite um valor válido");
        break;
}
