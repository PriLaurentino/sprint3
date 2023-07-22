let prompt = require("prompt-sync")()

let pnum = parseInt( prompt("Digite o primeiro número: "))
let snum = parseInt (prompt("Digite o segundo número: "))

if (pnum > snum) {
    console.log(" O maior número é " + pnum)
}else{
    console.log(" O maior número é " + snum)
}