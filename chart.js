// chart->

function makeChart(statistic) {
  const ctx = document.getElementById("chart").getContext("2d");
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: region.map((country) => country.name),
      datasets: [
        {
          label: "# of Votes",
          data: region.map((country) => country.statistic),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
    
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
      
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      legend: {
          display: false
      }
    },
  });
}
