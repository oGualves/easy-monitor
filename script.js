const ctxCPU = document.getElementById("cpuChart");
const ctxMem = document.getElementById("memChart");

new Chart(ctxCPU, {
  type: "line",
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [{
      label: "Uso de CPU (%)",
      data: [20, 35, 40, 55, 70, 60],
      borderColor: "red",
      borderWidth: 2
    }]
  }
});

new Chart(ctxMem, {
  type: "bar",
  data: {
    labels: ["Servidor 1", "Servidor 2", "Servidor 3"],
    datasets: [{
      label: "Uso de Memória (%)",
      data: [65, 85, 45],
      backgroundColor: ["green", "orange", "red"]
    }]
  }
});
