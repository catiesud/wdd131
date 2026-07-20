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


// ===============================
// Dados estáticos de São Paulo
// ===============================
const temperatura = 8; // °C
const velocidadeVento = 10; // km/h

// ===============================
// Função para calcular sensação térmica (Wind Chill)
// Fórmula válida para °C e km/h
// ===============================
function calcularSensacaoTermica(temp, vento) {
  // Fórmula canadense para sensação térmica em °C
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(vento, 0.16) +
    0.3965 * temp * Math.pow(vento, 0.16)
  ).toFixed(1);
}

// ===============================
// Função para atualizar a seção de clima
// ===============================
function atualizarClima() {
  let sensacao = "N/A";

  // Condições viáveis para cálculo
  if (temperatura <= 10 && velocidadeVento > 4.8) {
    sensacao = calcularSensacaoTermica(temperatura, velocidadeVento) + " °C";
  }

  // Atualiza os elementos na página
  document.getElementById("temp").textContent = `${temperatura} °C`;
  document.getElementById("vento").textContent = `${velocidadeVento} km/h`;
  document.getElementById("sensacao").textContent = sensacao;
}

// ===============================
// Função para atualizar o rodapé
// ===============================
function atualizarRodape() {
  const anoAtual = new Date().getFullYear();
  const ultimaModificacao = document.lastModified;

  document.getElementById("ano").textContent = anoAtual;
  document.getElementById("modificado").textContent = ultimaModificacao;
}

// ===============================
// Inicialização ao carregar a página
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  atualizarClima();
  atualizarRodape();
});
