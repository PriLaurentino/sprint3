import promptSync from "prompt-sync";
import { contadorAte10 } from "./exercicio2.1.js";
import { numPares1a10 } from "./exercicio2.2.js";
import { numImpares50 } from "./exercicio2.3.js";
import { tabuada10 } from "./exercicio2.4.js";
import { Fibonacci } from "./exercicio2.5.js";
import { while20 } from "./exercicio2.6.js";
import { somaWhile100 } from "./exercicio2.7.js";
import { confirmarIdade } from "./exercicio2.8.js";
import { contRegressiva } from "./exercicio2.9.js";
import { numParDifZero1a10 } from "./exercicio2.10.js";
const prompt = promptSync();

let ex;
let continuar;

do {

    ex = parseInt(prompt("\nExercícios:\n\n1. Imprimir números de 1 a 10 utilizando o loop FOR.\n2. Imprimir números pares de 1 a 10.\n3. Faça um programa que imprima os números ímpares de 0 a 50.\n4. Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.\n5. Imprimir os primeiros 10 números da sequência de Fibonacci.\n6. Imprimir números pares de 0 a 20 utilizando o loop while.\n7. Calcular a soma dos números de 1 a 100 utilizando a estrutura while.\n8. Faça um programa que receba a idade do usuário, a resposta for < 18 anos continue a solicitar a idade, e mostre uma mensagem quando a idade for > 18.\n9. Faça um programa que receba um número do usuário e mostre no console a contagem regressiva até 0.\n10. Faça um programa que receba um número do usuário e continue a pedir o número se o numero for diferente de 0.\n\nEscolha o exercício que deseja visualizar: "))

    switch (ex) {
        case 1:
            contadorAte10()
            break;

        case 2:
            numPares1a10()
            break;

        case 3:
            numImpares50()
            break;

        case 4:
            tabuada10()
            break;

        case 5:
            Fibonacci()
            break;

        case 6:
            while20()
            break;

        case 7:
            somaWhile100()
            break;

        case 8:
            confirmarIdade()
            break;

        case 9:
            contRegressiva()
            break;

        case 10:
            numParDifZero1a10()
            break;

        default:
            console.log("número inválido!")
            break;
    }
} while (continuar === "s");
