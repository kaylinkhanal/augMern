// page.js this is the entry point of application

"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
  ssr: false,
});
const data = {
  labels: ['Jan', 'Feb', 'March'],
  datasets: [
    {
      label: 'Bar Chart',
      data: [125000, 100000, 80000],
      backgroundColor: [
        'rgb(248, 171, 5)',
        'rgb(3, 150, 248)',
        'rgb(253, 135, 135)',

      ],
      options: {
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        },
        barThickness: 10
      }


    },
  ],
};
const BarChart = () => {
  return (
   <div> <div style={{ width: '300px', height: '200px' }}>
           <h1>Bar Chart</h1>
           <Bar data={data} />
         </div>
     </div>  );
};
export default BarChart;
