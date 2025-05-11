for (let ano = 2024; ano <= 2500; ano++) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log(ano);
  }
}
