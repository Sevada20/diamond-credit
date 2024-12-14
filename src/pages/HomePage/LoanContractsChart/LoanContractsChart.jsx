import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

import styles from "./styles";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const getMonths = (count) => {
  const months = [
    "Հուն",
    "Փետ",
    "Մարտ",
    "Ապր",
    "Մայիս",
    "Հուն",
    "Հուլ",
    "Օգոս",
    "Սեպտ",
    "Հոկտ",
    "Նոյ",
    "Դեկտ",
  ];

  const currentMonth = new Date().getMonth();
  const labels = [];

  for (let i = 0; i < count; i++) {
    labels.push(months[(currentMonth + i) % 12]);
  }

  return labels;
};

const LoanContractsChart = () => {
  const classes = styles();
  const labels = getMonths(7);
  const data = {
    labels: labels,
    datasets: [
      {
        borderDash: [10, 5],
        label: "Ակտիվ",
        data: [45, 59, 50, 59, 56, 55, 40],
        fill: false,
        borderColor: "#ff718b",
        tension: 0.1,
      },
      {
        borderDash: [10, 5],
        label: "Փակված",
        data: [32, 42, 55, 40, 45, 60, 50],
        fill: false,
        borderColor: "#962dff",
        tension: 0.1,
      },
      {
        borderDash: [10, 5],
        label: "Իրացված",
        data: [0, 25, 30, 15, 35, 45, 50],
        fill: false,
        borderColor: "#93aafd",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 60,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className={classes.loanContractsChartContainer}>
      <div className={classes.titlesContainer}>
        <span className={classes.title}>Վիճակագրություն</span>
        <span className={classes.subtitle}>Վարկային պայմանագրեր</span>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LoanContractsChart;
