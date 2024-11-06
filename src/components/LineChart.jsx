import { useRef, useEffect, useState } from 'react';
import UserData from './chartData';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { InformationCircleIcon } from '@heroicons/react/24/solid';

const LineChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: UserData.map((data) => data.date),
    datasets: [
      {
        label: 'Profits',
        data: UserData.map((data) =>
          typeof data.profitGained === 'string' && data.profitGained.includes('M')
            ? null 
            : data.profitGained
        ),
        borderColor: '#B86500',
        tension: 0.2,
        fill: true, 
      },
    ],
  });

  const applyGradient = () => {
    const chart = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;
    const chartArea = chart.chartArea; 

    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    gradient.addColorStop(0, 'rgba(161, 247, 247, 0.2)'); 
    gradient.addColorStop(1, 'rgba(255, 225, 255, 0.2)'); 

    const newChartData = { ...chartData };
    newChartData.datasets[0].backgroundColor = gradient;
    setChartData(newChartData);
  };

  useEffect(() => {
    if (chartRef.current) {
      applyGradient(); 
    }
  }, [chartData]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false, 
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 25,
          callback: (value) => value,
        },
        grid: {
          color: '#e0e0e0', 
          lineWidth: 2, 
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
    <div className="bg-white rounded-lg px-4 sm:px-6 pt-4 sm:pt-6 w-full grid gap-4 sm:gap-12 grid-cols-1 lg:grid-cols-[2fr_1fr] mt-4 pb-6">
      <div className="w-full flex flex-col items-center">   
        <hr className="my-2 w-3/4 border-gray-300" />
        
        <div className="w-full h-[200px] sm:h-[400px] shadow-lg rounded-lg p-4 bg-white mt-4 overflow-hidden">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Profits</h2>
          <div className="relative h-full">
            <Line ref={chartRef} data={chartData} options={options} />
          </div>

          <div className="flex items-center mt-4">
            <div className="w-3 h-3 bg-[#4bc0c0] mr-2 rounded-full"></div>
            <span className="text-sm font-medium">Profits</span>
          </div>
        </div>
      </div>
    </div>
    {/* Right Section */}
    
    </>
  );
};

export default LineChart;
