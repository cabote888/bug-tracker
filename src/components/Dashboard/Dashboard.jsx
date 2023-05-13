import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["lun", "mar", "mier", "jue", "vie", "sab", "dom"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Sex Projection For This Week",
      data: [5, 19, 45, 65, 79, 140, 200],
    },
  ],
};
export default function Dashboard() {
  return <div>
    <Line data={data} />
  </div>;
}
