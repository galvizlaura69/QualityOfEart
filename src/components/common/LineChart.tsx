import React, { useEffect, useRef } from 'react';
import { format } from "date-fns";
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

interface LineChartProps {
  data: {createdAt: string; level: string;}[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy(); 
    }

    const labels = data.map(entry => format(new Date(entry.createdAt), "hh:mm a"));
    const levels = data.map(entry => {
      switch (entry.level) {
        case 'alto':
          return 3; 
        case 'medio':
          return 2; 
        case 'bajo':
          return 1; 
        default:
          return 0; 
      }
    });

    const ctx = chartRef.current?.getContext('2d');
    if (ctx) {
      chartInstanceRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Niveles',
              data: levels,
              fill: true,
              backgroundColor: 'rgba(99, 102, 241, 0.2)', 
              borderColor: 'rgba(99, 102, 241, 1)', 
              borderWidth: 2,
              tension: 0.4, 
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (value) => {
                  switch (value) {
                    case 3:
                      return 'alto';
                    case 2:
                      return 'medio';
                    case 1:
                      return 'bajo';
                    default:
                      return '';
                  }
                },
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md"> 
      <canvas ref={chartRef} className="w-full h-64"></canvas>
    </div>
  );
};

export default LineChart;
