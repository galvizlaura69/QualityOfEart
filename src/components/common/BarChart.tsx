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

interface Sensor {
  _id: string;
  co2Level: number;
  createdAt: string;
  level: 'bajo' | 'medio' | 'alto';
}

interface BarChartProps {
  data: Sensor[]
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartData = useMemo(() => {
    const labels = [...new Set(data.map(entry => entry.createdAt))];
    const bajoCounts = labels.map(label => data.filter(entry => entry.createdAt === label && entry.level === "bajo").length);
    const medioCounts = labels.map(label => data.filter(entry => entry.createdAt === label && entry.level === "medio").length);
    const altoCounts = labels.map(label => data.filter(entry => entry.createdAt === label && entry.level === "alto").length);

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
