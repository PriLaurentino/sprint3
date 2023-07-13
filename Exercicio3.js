let prompt = require("prompt-sync")()

let inteiro = parseInt(prompt("Digite um número: "))
if (inteiro < 0) {
    console.log(" O numero " + inteiro + " é negativo")
}else if(inteiro == 0){
    console.log(" O numero " + inteiro + " é zero pow!!!")
}else{
    console.log(" O numero " + inteiro + " é positivo")
}
