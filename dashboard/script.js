// =======================
//  DATA SOURCE
// =======================
let projects = [
  { name: "Portfolio", status: "Running" },
  { name: "E-commerce", status: "Deploying" },
  { name: "Dashboard", status: "Error" },
  { name: "API Service", status: "Running" }
];

let logs = [];

// =======================
//  CALCULATE STATS
// =======================
function calculateStats() {
  return {
    total: projects.length,
    running: projects.filter(p => p.status === "Running").length,
    errors: projects.filter(p => p.status === "Error").length,
  };
}

// =======================
//  UPDATE CARDS
// =======================
function updateCards() {
  const stats = calculateStats();

  document.querySelector(".card:nth-child(1) p").textContent =
    stats.total + " Active Projects";

  document.querySelector(".card:nth-child(2) p").textContent =
    stats.running + " Running";

  document.querySelector(".card:nth-child(3) p").textContent =
    stats.errors + " Needs Fix";

  //  تغيير لون كارد الأخطاء
  const errorCard = document.querySelector(".card:nth-child(3)");
  errorCard.style.background =
    stats.errors > 0 ? "#fee2e2" : "#dcfce7";
}

// =======================
//  LINE CHART
// =======================
const lineChart = new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets: [{
      data: [3,5,2,8,6,7,4],
      borderColor: "#6366f1",
      backgroundColor: "rgba(99,102,241,0.1)",
      fill: true,
      tension: 0.4,
      borderWidth: 2,
      pointRadius: 3
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } }
  }
});

// =======================
//  BAR CHART
// =======================
const barChart = new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: ["Running","Deploying","Error"],
    datasets: [{
      data: [0, 0, 0],
      backgroundColor: ["#22c55e","#3b82f6","#ef4444"]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } }
  }
});

// =======================
//  UPDATE CHARTS
// =======================
function updateCharts() {
  const running = projects.filter(p => p.status === "Running").length;
  const deploying = projects.filter(p => p.status === "Deploying").length;
  const error = projects.filter(p => p.status === "Error").length;

  barChart.data.datasets[0].data = [running, deploying, error];
  barChart.update();
}

// =======================
//  LOG SYSTEM
// =======================
function addLog(message) {
  logs.push({
    time: new Date().toLocaleTimeString(),
    message
  });

  console.clear();
  console.table(logs);
}

// =======================
//  RANDOM UPDATE
// =======================
function randomUpdate() {
  const statuses = ["Running", "Deploying", "Error"];

  projects = projects.map(p => ({
    ...p,
    status: statuses[Math.floor(Math.random() * statuses.length)]
  }));

  addLog("Projects updated ");

  //  تنبيه بسيط
  if (projects.some(p => p.status === "Error")) {
    console.log(" يوجد مشروع فيه خطأ!");
  }
}

// =======================
//  ADD PROJECT BUTTON
// =======================
document.querySelector(".btn").addEventListener("click", () => {
  projects.push({
    name: "New Project " + (projects.length + 1),
    status: "Deploying"
  });

  addLog("New project added ");

  updateCards();
  updateCharts();
});

// =======================
//  SEARCH
// =======================
document.querySelector(".search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = projects.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  console.log("Search result:");
  console.table(filtered);
});

// =======================
//  INIT
// =======================
updateCards();
updateCharts();

// =======================
//  AUTO UPDATE
// =======================
setInterval(() => {

  randomUpdate();
  updateCards();
  updateCharts();

  // line chart
  lineChart.data.datasets[0].data.shift();
  lineChart.data.datasets[0].data.push(Math.floor(Math.random() * 10));
  lineChart.update();

}, 2000);