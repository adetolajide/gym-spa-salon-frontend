import { Line } from "react-chartjs-2";
import React from "react";

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: false,
      text: "Chart.js Line Chart - Multi Axis",
    },
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: false,
      position: "left" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
    y2: {
      type: "linear" as const,
      display: false,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Profit",
      data: [
        400000, 200200, 337000, 803002, 370007, 100000, 200002, 700033, 200083,
        300037, 1000000,
      ],
      borderColor: "rgb(113 204 82)",
      backgroundColor: "rgb(113 204 82)",
      yAxisID: "y",
    },
    {
      label: "Income",
      data: [
        100000, 200002, 700033, 200083, 300037, 150000, 200002, 700300, 683000,
        937000, 500000,
      ],
      borderColor: "rgb(255 184 77)",
      backgroundColor: "rgb(255 184 77)",
      yAxisID: "y1",
    },
    {
      label: "Expenses",
      data: [
        150000, 200002, 700300, 683000, 937000, 400000, 200200, 337000, 803002,
        370007, 300000,
      ],
      borderColor: "rgb(226 23 23)",
      backgroundColor: "rgb(226 23 23)",
      yAxisID: "y2",
    },
  ],
};

export default function LineChart() {
  return <Line options={options} data={data} />;
}
