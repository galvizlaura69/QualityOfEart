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
import { useMemo } from "react";

interface DataEntry {
  time: string;
  date: string;
  level: "Bajo" | "Medio" | "Alto";
  alert: string;
}

interface BarChartProps {
  data: DataEntry[];
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartData = useMemo(() => {
    const labels = [...new Set(data.map(entry => entry.date))];
    const bajoCounts = labels.map(label => data.filter(entry => entry.date === label && entry.level === "Bajo").length);
    const medioCounts = labels.map(label => data.filter(entry => entry.date === label && entry.level === "Medio").length);
    const altoCounts = labels.map(label => data.filter(entry => entry.date === label && entry.level === "Alto").length);

    return {
      labels,
      datasets: [
        {
          label: "Bajo",
          data: bajoCounts,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
        {
          label: "Medio",
          data: medioCounts,
          backgroundColor: "rgba(255, 206, 86, 0.6)",
        },
        {
          label: "Alto",
          data: altoCounts,
          backgroundColor: "rgba(255, 99, 132, 0.6)",
        },
      ],
    };
  }, [data]);

  return <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />;
};

export default BarChart;
