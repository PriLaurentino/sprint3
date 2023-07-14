let prompt = require("prompt-sync")()

// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é "admin" e a senha é "senha123". Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

let usuario = prompt("Entre com seu Login: ")
let senha = prompt("Entre com sua Senha: ")

if ((usuario == "admin") && (senha == "senha123")) {
    console.log ("Login em andamento    ...") 
}else{
    console.log ("Dados incorretos")
}
