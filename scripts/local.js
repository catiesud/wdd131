// Variáveis estáticas
const temperatura = 8; // °C
const vento = 10; // km/h

function calcularSensacaoTermica(temp, velVento) {
  // Fórmula de sensação térmica em °C (Wind Chill)
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(velVento, 0.16) +
    0.3965 * temp * Math.pow(velVento, 0.16)
  ).toFixed(1);
}

function atualizarClima() {
  let sensacao = "N/A";

  if (temperatura <= 10 && vento > 4.8) {
    sensacao = calcularSensacaoTermica(temperatura, vento) + " °C";
  }

  document.getElementById("sensacao").textContent = sensacao;
}

function atualizarRodape() {
  const anoAtual = new Date().getFullYear();
  const ultimaModificacao = document.lastModified;

  document.getElementById("ano").textContent = anoAtual;
  document.getElementById("modificado").textContent = ultimaModificacao;
}

// Executa ao carregar
document.addEventListener("DOMContentLoaded", () => {
  atualizarClima();
  atualizarRodape();
});
