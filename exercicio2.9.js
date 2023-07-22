//9. Faça um programa que receba um número do usuário e mostre
//no console a contagem regressiva até 0.

import promptSync from "prompt-sync";
const prompt = promptSync();

export function contRegressiva() {
    
let numero9
numero9 = parseInt(prompt("digite um numero: "))

while (numero9 >= 0) {
    console.log(numero9);
    numero9 --;  
}
}



// do {
//     num --;
//     console.log (num);
// } while (num != 0);
    
    

