import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = [
  { Port: "Kolkata", City: "Kolkata", Flow: 31.6, Cost_Rs: 0, Cost_Dollars: 0 },
  { Port: "Haldia", City: "Kolkata", Flow: 51.0, Cost_Rs: 4.165, Cost_Dollars: 0.0595 },
  { Port: "Paradeep", City: "Guwhathi", Flow: 26.0, Cost_Rs: 49.84, Cost_Dollars: 0.712 },
  { Port: "Paradeep", City: "Srinagar", Flow: 32.1, Cost_Rs: 62.545, Cost_Dollars: 0.8935 },
  { Port: "Paradeep", City: "Delhi", Flow: 9.1, Cost_Rs: 60.165, Cost_Dollars: 0.8595 },
  { Port: "Paradeep", City: "Rudrapur", Flow: 38.0, Cost_Rs: 3.465, Cost_Dollars: 0.0495 },
  { Port: "Paradeep", City: "Varanasi", Flow: 32.6, Cost_Rs: 30.73, Cost_Dollars: 0.439 },
  { Port: "Paradeep", City: "Kharagpur", Flow: 21.7, Cost_Rs: 12.18, Cost_Dollars: 0.174 },
  { Port: "Paradeep", City: "Rourkela", Flow: 40.2, Cost_Rs: 13.79, Cost_Dollars: 0.197 },
  { Port: "Paradeep", City: "Kolkata", Flow: 39.3, Cost_Rs: 15.785, Cost_Dollars: 0.2255 },
  { Port: "Vizag", City: "Delhi", Flow: 131.1, Cost_Rs: 61.88, Cost_Dollars: 0.884 },
  { Port: "Chennai", City: "Vijaywada", Flow: 27.7, Cost_Rs: 15.82, Cost_Dollars: 0.226 },
  { Port: "Chennai", City: "Indore", Flow: 6.4, Cost_Rs: 51.975, Cost_Dollars: 0.7425 },
  { Port: "Chennai", City: "Bangalore", Flow: 176.2, Cost_Rs: 12.145, Cost_Dollars: 0.1735 },
  { Port: "Chennai", City: "Hyderabad", Flow: 14.7, Cost_Rs: 21.91, Cost_Dollars: 0.313 },
  { Port: "Chidambaram", City: "Delhi", Flow: 96.3, Cost_Rs: 84.945, Cost_Dollars: 1.2135 },
  { Port: "Chidambaram", City: "Hyderabad", Flow: 170.1, Cost_Rs: 29.75, Cost_Dollars: 0.425 },
  { Port: "Chidambaram", City: "Nagpur", Flow: 65.1, Cost_Rs: 47.215, Cost_Dollars: 0.6745 },
  { Port: "Kochi", City: "Bangalore", Flow: 35.5, Cost_Rs: 19.18, Cost_Dollars: 0.274 },
  { Port: "Kochi", City: "Coimbatore", Flow: 43.4, Cost_Rs: 6.685, Cost_Dollars: 0.0955 },
  { Port: "Mangalore", City: "NaviMumbai", Flow: 70.1, Cost_Rs: 32.025, Cost_Dollars: 0.4575 },
  { Port: "Mangalore", City: "Indore", Flow: 27.9, Cost_Rs: 48.125, Cost_Dollars: 0.6875 },
  { Port: "Mormugaon", City: "Indore", Flow: 20.0, Cost_Rs: 37.765, Cost_Dollars: 0.5395 },
  { Port: "Mormugaon", City: "Belgaum", Flow: 43.4, Cost_Rs: 4.935, Cost_Dollars: 0.0705 },
  { Port: "JNPT", City: "NaviMumbai", Flow: 217.6, Cost_Rs: 0.91, Cost_Dollars: 0.013 },
  { Port: "DeenDayal", City: "Chandigarh", Flow: 28.6, Cost_Rs: 19.6, Cost_Dollars: 0.28 },
  { Port: "DeenDayal", City: "Delhi", Flow: 7.8, Cost_Rs: 40.915, Cost_Dollars: 0.5845 },
  { Port: "DeenDayal", City: "Rajkot", Flow: 38.0, Cost_Rs: 6.895, Cost_Dollars: 0.0985 },
  { Port: "DeenDayal", City: "Ahmedabad", Flow: 149.3, Cost_Rs: 10.43, Cost_Dollars: 0.149 },
  { Port: "DeenDayal", City: "Ludhiana", Flow: 43.4, Cost_Rs: 45.255, Cost_Dollars: 0.6465 },
];

interface OutputVisualizationProps {}

const OutputVisualization: React.FC<OutputVisualizationProps> = () => {
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
        <Doughnut data={chartData} />
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
