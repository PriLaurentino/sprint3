//4. Faça um programa que imprima na tela a tabuada de um número
//qualquer escolhido pelo usuário até o 10.

const prompt = require("prompt-sync")()

let numero = parseInt (prompt("Entre com um número de 1 a 10: "))

for (let index = 1; index < 11; index ++) {
    let resultado = (numero * index)
   // console.log(resultado);
   console.log(`${index} x ${numero} = ${resultado}`) 
}