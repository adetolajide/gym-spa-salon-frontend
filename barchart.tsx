import { Bar } from "react-chartjs-2";
import React from "react";

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [191, 200, 94, 98, 140, 150, 560, 129],
      backgroundColor: ["#0562C2"],
    },
  ],
};

const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
};

export default function BarChart() {
  return <Bar data={data} options={options} />;
}
