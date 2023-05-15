import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function BarChart(props) {
  const labels = ["Minimal", "Moderate", "Critical"];

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
    labels: labels,
    datasets: [
      {
        label: "Issues ordered by severity",
        data: [
          filterMinimal.length,
          filterModerate.length,
          filterCritical.length,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(255, 99, 132)",
        ],
        borderWidth: 1,
        barThickness: 100,
      },
    ],
  };
  return <Bar data={data} />;
}
