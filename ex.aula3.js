import promptSync from "prompt-sync";

const prompt = promptSync();

//menu para escolher qual execício o usuário selecionar

let exercicio;
let continuar;

do {
    exercicio = parseInt(prompt("Digite umm número que represente um número que represente um exercicio de 1 a 4: "))

    switch (exercicio) {
        case 1:
            //chamando função helloWorld
            helloWorld("Hello world!!!"); 
            break;
    }
        case 2:
            //OBJETO
                let aluno = {
                nome: "rebeca",
                idade: 19,
                hardSkills: ["figma", "HTML", "CSS"]    
            }
            console.log(aluno.nome, aluno.idade, aluno.hardSkills);    
            console.log("Objeto aluno", aluno);
                break;

        case 3:
        verificarMaiorIdade() {
        
        
            break;        


        default:
         
            break;
        }

        continuar = prompt ("Deseja continua ver outros exercícios? Digite s para sim, e n para não: ").toLocaleLowerCase() // transforma o texto em minusculo


} while (continuar === "s" );  // ===  compara valor ou tipo

//qualquer frase
function helloWorld(frase) {
    console.log(frase);

    

    // chama somente esta frase
 //   function helloWorld() {
 //       console.log("Hello world!!!");




}