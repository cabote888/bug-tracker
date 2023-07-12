import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function BarChart(props) {
  const projectNames = props.projects.map((project) => project.name);

  const bugCountsByProjectAndSeverity = props.bugs.reduce((acc, bug) => {
    const {project, severity} = bug;
    if (!acc[project]) {
      acc[project] = {
        Minimal: 0,
        Moderate: 0,
        Critical: 0,
      };
    }
    acc[project][severity] += 1;
    return acc;
  }, {});

  const bugCounts = projectNames.map((projectName) => {
    const bugCountBySeverity = bugCountsByProjectAndSeverity[projectName];
    return [
      bugCountBySeverity?.Minimal || 0,
      bugCountBySeverity?.Moderate || 0,
      bugCountBySeverity?.Critical || 0,
    ]
  })
  const data = {
    labels: projectNames,
    datasets: [
      {
        label: "Minimal",
        data: bugCounts.map((counts) => counts[0]),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Moderate",
        data: bugCounts.map((counts) => counts[1]),
        backgroundColor: "rgba(255, 205, 86, 0.6)",
      },
      {
        label: "Critical",
        data: bugCounts.map((counts) => counts[2]),
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