// page.js this is the entry point of application

"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});
const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Fees',
      data: [0, 25000, 10000, 90000, 6000, 60000, 30000],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
    {
      label: 'Total Fees',
      data: [0, 25000, 35000, 125000, 140000, 200000, 230000],
      fill: false,
      borderColor: 'rgb(21, 5, 243)',
      tension: 0.1,
    },
  ],
};
const LineChart = () => {
  return (
    <div style={{ width: '350px', height: '200px' }}>
      <h1>Earnings</h1>
      <Line data={data} />
    </div>
  );
};
export default LineChart;
