import promptSync from "prompt-sync";

const prompt = promptSync();

let ex = parseInt (prompt("Escolha o exercício que deseja visualizar: "))

switch (ex) {
    case 1:
    console.log("1. Imprimir números de 1 a 10 utilizando o loop FOR.")
    for (let contador1 = 1; contador1 <= 10; contador1 ++) {
        console.log(contador1);
    }
    break;

    case 2:
    console.log("2. Imprimir números pares de 1 a 10.")
    for (let contador2 = 2; contador2 < 11; contador2 += 2 ) {
        console.log(contador2);
    }
    break;

    case 3:
    console.log("3. Faça um programa que imprima os números ímpares de 0 a 50.")
    for (let contador3 = 1; contador3 < 50; contador3 += 2) {
        console.log(contador3);
    }
    break;
   
    case 4:
    console.log("4. Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.")
    let numero4 = parseInt (prompt("Entre com um número de 1 a 10: "))
    for (let contador4 = 1; contador4 < 11; contador4 ++) {
        let resultado = (numero4 * contador4)
        console.log(`${contador4} x ${numero4} = ${resultado}`) 
    }    
    break;

    case 5:
    console.log("5. Imprimir os primeiros 10 números da sequência de Fibonacci.")
    let pn = 0;
    let sn = 1;
    console.log(pn);
    console.log(sn);
    for (let contador5 = 3; contador5 < 11; contador5 ++) {
        let tn = pn + sn
        pn = sn
        sn = tn
        console.log(tn);
    } 
    break;

    case 6:
    console.log("6. Imprimir números pares de 0 a 20 utilizando o loop while.")
    let numero6 = 0
    while (numero6 <= 20) {
        console.log(numero6); //SE TIVER QUE MOSTRAR O 0 O CONSOLE DEVE SER MOSTRADO ANTES DO INCREMENTO
        numero6 += 2
    }
    break;

    case 7:
    console.log("7. Calcular a soma dos números de 1 a 100 utilizando a estrutura while.")
    let numero7 = 0
    let contador7 = 1
    while (contador7 <= 100 ) {
        numero7 = contador7 + numero7;
        contador7 ++;
        console.log(numero7);

    }   
    break;

    case 8:
    console.log("8. Faça um programa que receba a idade do usuário, enquanto a resposta do usuário for menor que 18 anos continue a solicitar a idade e mostre uma mensagem quando a idade do usuário for maior que 18.")
    let idade8;
    do {
        idade8 = prompt ("digite sua idade: ")
    } while (idade8 < 18)
        console.log ("Usuário maior de 18 anos")       
    break;

    case 9:
    console.log("9. Faça um programa que receba um número do usuário e mostre no console a contagem regressiva até 0.")
    let numero9
    numero9 = prompt ("digite um numero: ")
    do {
        numero9 --;
        console.log (numero9);
    } while (numero9 != 0);
    break;

    case 10:
    console.log("10. Faça um programa que receba um número do usuário e continue a pedir o número se o numero for diferente de 0.")
    let numero10;
    do {
        numero10 = prompt("digite um numero: ")
    } while (numero10 != "0");
    break;

    default:
        console.log("número inválido!")
        break;
}
