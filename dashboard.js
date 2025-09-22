// CPU Usage
new Chart(document.getElementById("cpuChart"), {
  type: "line",
  data: {
    labels: ["10s", "20s", "30s", "40s", "50s"],
    datasets: [{
      label: "Uso de CPU (%)",
      data: [20, 35, 30, 50, 40],
      borderColor: "#0052cc",
      fill: false,
      tension: 0.3
    }]
  }
});

// Memory Usage
new Chart(document.getElementById("memoryChart"), {
  type: "doughnut",
  data: {
    labels: ["Usada", "Disponível"],
    datasets: [{
      data: [65, 35],
      backgroundColor: ["#36b37e", "#c1c7d0"]
    }]
  }
});

// Disk Usage
new Chart(document.getElementById("diskChart"), {
  type: "bar",
  data: {
    labels: ["C:", "D:", "E:"],
    datasets: [{
      label: "Uso em GB",
      data: [120, 80, 45],
      backgroundColor: ["#0052cc", "#36b37e", "#ff5630"]
    }]
  }
});
