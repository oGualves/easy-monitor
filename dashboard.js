// =============================
// Dashboard.js - EasyMonitor
// =============================

// --- Função genérica para criar gráficos ---
function criarGrafico(ctx, label, cor, maxY = 100) {
  return new Chart(ctx, {
    type: "line",
    data: {
      labels: Array.from({ length: 10 }, (_, i) => i),
      datasets: [{
        label: label,
        data: Array(10).fill(0),
        borderColor: cor,
        borderWidth: 2,
        fill: false,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      animation: false,
      scales: {
        y: {
          beginAtZero: true,
          max: maxY
        }
      }
    }
  });
}

// --- Inicialização dos gráficos ---
const cpuChart = criarGrafico(
  document.getElementById("cpuChart").getContext("2d"),
  "Uso de CPU (%)",
  "#36b37e"
);

const ramChart = criarGrafico(
  document.getElementById("ramChart").getContext("2d"),
  "Uso de RAM (%)",
  "#0052cc"
);

const netChart = criarGrafico(
  document.getElementById("netChart").getContext("2d"),
  "Tráfego de Rede (Mbps)",
  "#ff5630",
  1000 // rede pode ter valores mais altos
);

// --- Função que gera valores aleatórios ---
function gerarValor(max = 100) {
  return Math.floor(Math.random() * max);
}

// --- Atualização automática a cada 2s ---
setInterval(() => {
  atualizarGrafico(cpuChart, gerarValor(100));
  atualizarGrafico(ramChart, gerarValor(100));
  atualizarGrafico(netChart, gerarValor(1000));
}, 2000);

// --- Atualiza dados mantendo só os últimos 10 ---
function atualizarGrafico(chart, novoValor) {
  chart.data.labels.push(chart.data.labels.length);
  chart.data.datasets[0].data.push(novoValor);

  if (chart.data.datasets[0].data.length > 10) {
    chart.data.labels.shift();
    chart.data.datasets[0].data.shift();
  }

  chart.update();
}
