const prompt = require('prompt-sync')({ sigint: true });
const diaNascimento = 3;
const mesNascimento = 3;
const anoNascimento = 2007;

let tentativas = 4;

for (let i = 1; i <= tentativas; i++) {
    let dia = parseInt(prompt("Digite o dia: "));
    let mes = parseInt(prompt("Digite o mês: "));
    let ano = parseInt(prompt("Digite o ano: "));
    
    if (dia === diaNascimento && mes === mesNascimento && ano === anoNascimento) {
        console.log("Você acertou!");
        break;
    } else {
        if (i < tentativas) {
            console.log(`Você ainda tem ${tentativas - i} tentativas.`);
        } else {
            console.log("Você falhou. A data correta é 03/03/2007.");
        }
    }
}
