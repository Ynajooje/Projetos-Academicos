const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const premiados = [17, 42, 88];
let tentativas = 0;

function perguntar() {
  if (tentativas >= 3) {
    console.log("Você usou todas as tentativas. Fim de jogo!");
    rl.close();
    return;
  }

  rl.question(`Tentativa ${tentativas + 1}: Digite um número de 1 a 100: `, (resposta) => {
    const num = parseInt(resposta);

    if (premiados.includes(num)) {
      console.log("🎉 Parabéns! Você acertou um número premiado!");
      rl.close();
    } else {
      console.log("Não é um número premiado.");
      tentativas++;
      perguntar();
    }
  });
}

perguntar();