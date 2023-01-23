import { Doughnut } from "react-chartjs-2";
import React from "react";

const data = {
  labels: ["first", "second", "third"],
  datasets: [
    {
      data: [11, 7, 9],
      backgroundColor: ["#EBF7FF", "#0562C2", "#E24444"],
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

export default function DoughnutChart() {
  return <Doughnut data={data} options={options} />;
}
