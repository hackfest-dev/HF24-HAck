import React from 'react';
import { Doughnut } from 'react-chartjs-2';

interface OutputVisualizationProps {
  data: {
    Port: string;
    City: string;
    Flow: number;
    Cost_Rs: number;
    Cost_Dollars: number;
  }[];
}

const OutputVisualization: React.FC<OutputVisualizationProps> = ({ data }) => {
  // Calculate total cost by city
  const totalCostByCity: { [city: string]: number } = {};
  const flowByPort: { [port: string]: number } = {};

  data.forEach(item => {
    totalCostByCity[item.City] = (totalCostByCity[item.City] || 0) + item.Cost_Rs;
    flowByPort[item.Port] = (flowByPort[item.Port] || 0) + item.Flow;
  });

  // Prepare data for visualization
  const chartData = {
    labels: Object.keys(totalCostByCity),
    datasets: [
      {
        label: 'Total Cost (Rs) by City',
        data: Object.values(totalCostByCity),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8A2BE2',
          '#3CB371',
          '#FF4500',
          '#4169E1',
          '#FFD700',
          '#9932CC',
          '#DC143C',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8A2BE2',
          '#3CB371',
          '#FF4500',
          '#4169E1',
          '#FFD700',
          '#9932CC',
          '#DC143C',
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-full my-10">
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">Total Cost (Rs) by City</h1>
        <p className="text-lg mb-4">Shows the summation of cost per city for freight transport if the Logistic Park is set up:</p>
        <div className='p-20'><Doughnut data={chartData} /></div>
        
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <h1 className="text-3xl font-bold mb-4">Flow of Goods by Port</h1>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Port</th>
              <th className="border px-4 py-2">Flow of Goods</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(flowByPort).map(([port, flow]) => (
              <tr key={port}>
                <td className="border px-4 py-2">{port}</td>
                <td className="border px-4 py-2">{flow}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OutputVisualization;
