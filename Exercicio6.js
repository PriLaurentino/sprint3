let prompt = require("prompt-sync")()

let m1 = parseInt (prompt("entre com a primeira nota: "))
let m2 = parseInt (prompt("entre com a segunda nota: "))
let m3 = parseInt (prompt("entre com a terceira nota: "))
let m4 = parseInt (prompt("entre com a última nota: "))

let media = (( m1 + m2 + m3 + m4 ) / 4)
//console.log (media)

if (media >= 7) {
    console.log (Aprovado)
}
else if (7 > media > 5) {
    console.log (Recuperação)
}else{
    console.log (Reprovado)
}

