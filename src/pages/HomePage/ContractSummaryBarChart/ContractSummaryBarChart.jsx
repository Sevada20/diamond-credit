import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ContractSummaryChartFilters from "../ContractSummaryChartFilters/ContractSummaryChartFilters";
import styles from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ContractSummaryBarChart = () => {
  const classes = styles();

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

    const currentMonth = new Date().getMonth(); // Получаем текущий месяц (0 - январь, 11 - декабрь)

    const labels = [];
    for (let i = 0; i < count; i++) {
      const monthIndex = (currentMonth + i) % 12; // Рассчитываем индекс месяца с учетом текущего месяца
      labels.push(i % 4 === 0 ? months[monthIndex] : "");
    }

    return labels;
  };

  const colors = ["#962DFF", "#4A3AFF", "#E0C6FD", "#93AAFD"];
  const borderColors = ["#962DFF", "#4A3AFF", "#E0C6FD", "#93AAFD"];

  const data = Array(28)
    .fill(null)
    .map((_, index) => ({
      x: index,
      y: Math.floor(Math.random() * 25),
      backgroundColor: colors[index % 4],
      borderColor: borderColors[index % 4],
      borderWidth: 1,
      borderRadius: 5,
      barThickness: 15,
    }));

  const chartData = {
    labels: getMonths(28),
    datasets: [
      {
        label: "",
        data: data,
        backgroundColor: data.map((item) => item.backgroundColor),
        borderColor: data.map((item) => item.borderColor),
        borderWidth: 1,
        borderRadius: 5,
        barThickness: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: false,
          maxRotation: 0,
        },
        barPercentage: 0.8,
        categoryPercentage: 0.4,
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value, index) {
            const labels = ["0", "50h", "100h", "200h", "500h", "1h", "1.5h"];
            return labels[index] || value;
          },
          stepSize: 4,
        },
      },
    },
  };

  return (
    <div className={classes.loanContractsChartContainer}>
      <div className={classes.titlesContainer}>
        <span className={classes.title}>Վիճակագրություն</span>
        <span className={classes.subtitle}>Վարկի ընդհանուր ամփոփագիր</span>
      </div>
      <div className={classes.chartContainer}>
        <Bar data={chartData} options={options} />
        <ContractSummaryChartFilters />
      </div>
    </div>
  );
};

export default ContractSummaryBarChart;
