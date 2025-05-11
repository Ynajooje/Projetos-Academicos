const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a cor do semáforo (vermelho, amarelo ou verde): ", (cor) => {
  switch (cor.toLowerCase()) {
    case "verde":
      console.log("Siga");
      break;
    case "amarelo":
      console.log("Atenção");
      break;
    case "vermelho":
      console.log("Pare");
      break;
    default:
      console.log("Cor inválida. Informe vermelho, amarelo ou verde.");
  }
  rl.close();
});