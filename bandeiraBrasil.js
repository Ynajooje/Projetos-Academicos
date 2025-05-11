const prompt = require('prompt-sync')({ sigint: true });

let cor = prompt("Digite uma cor entre verde, amarelo, azul e branco: ");
cor = cor.toLowerCase();

switch (cor) {
    case "verde":
        console.log("retângulo");
        break;
    case "amarelo":
        console.log("losango");
        break;
    case "azul":
        console.log("círculo");
        break;
    case "branco":
        console.log("Ordem e Progresso");
        break;
    default:
        console.log("Cor inválida");
}

