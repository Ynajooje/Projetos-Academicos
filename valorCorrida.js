function calcularValorCorrida(horario, distanciaKm) {
  const [hora, minuto] = horario.split(':').map(Number);
  const totalMinutos = hora * 60 + minuto;

  let valorFixo, valorPorKm;

  if (totalMinutos >= 0 && totalMinutos <= 360) {
    valorFixo = 5.30;
    valorPorKm = 4.40;
  } else if (totalMinutos >= 361 && totalMinutos <= 1080) {
    valorFixo = 3.30;
    valorPorKm = 3.80;
  } else {
    valorFixo = 4.30;
    valorPorKm = 4.10;
  }

  return (valorFixo + (valorPorKm * distanciaKm)).toFixed(2);
}

// Testes:
console.log("a) 4:30, 15km: R$", calcularValorCorrida("04:30", 15));
console.log("b) 15:00, 20km: R$", calcularValorCorrida("15:00", 20));
console.log("c) 22:43, 12.7km: R$", calcularValorCorrida("22:43", 12.7));