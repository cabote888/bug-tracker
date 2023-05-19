import { Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart(props) {
  const filteredSeverity = props.bugs.map((bug) => bug.severity);

  const filterMinimal = filteredSeverity.filter(
    (severity) => severity === "Minimal"
  );
  const filterModerate = filteredSeverity.filter(
    (severity) => severity === "Moderate"
  );
  const filterCritical = filteredSeverity.filter(
    (severity) => severity === "Critical"
  );

  const labels = [
    `Minimal ${filterMinimal.length}`,
    `Moderate ${filterModerate.length}`,
    `Critical ${filterCritical.length}`,
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        data: [
          filterMinimal.length,
          filterModerate.length,
          filterCritical.length,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(255, 99, 132)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        title: {
          display: true,
          text: "Number of issues by severity",
          font: {
            size: 14,
            family: "Rubik, sans-serif",
          },
        },
        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded",
          color: "gray",
        },
      },
    },
  };
  return <Doughnut options={options} data={data} />;
}
