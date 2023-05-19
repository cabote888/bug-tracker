import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function BarChart(props) {
  const labels = ["Sex 2.0", "Portfolio Project", "GTA VI"];

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

  const data = {
    labels,
    datasets: [
      {
        label: "Minimal",
        data: [filterMinimal.length, 9, 15],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Moderate",
        data: [5, filterModerate.length, 9],
        backgroundColor: "rgba(255, 205, 86, 0.6)",
      },
      {
        label: "Critical",
        data: [2, filterCritical.length, 5],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
    barThickness: 100,
  };

  const options = {
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
        align: "center",
        labels: {
          boxWidth: 15,
          useBorderRadius: true,
          borderRadius: 5,
        },
      },
    },
    maintainAspectRatio: false,
  };
  return <Bar options={options} data={data} />;
}
