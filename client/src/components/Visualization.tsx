// Import necessary libraries
import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { LinearScale, RadialLinearScale } from "chart.js";

// Define chart data
const supplyData = [
  { Location: "Kolkata", Supply: 31.6 },
  { Location: "Haldia", Supply: 51.0 },
  { Location: "Paradeep", Supply: 239.0 },
  { Location: "Vizag", Supply: 131.1 },
  { Location: "Chennai", Supply: 225.0 },
  { Location: "Chidambaram", Supply: 331.5 },
  { Location: "Kochi", Supply: 78.9 },
  { Location: "Mangalore", Supply: 98.0 },
  { Location: "Mormugaon", Supply: 63.4 },
  { Location: "JNPT", Supply: 217.6 },
  { Location: "DeenDayal", Supply: 267.1 },
];

// Demand data
const demandData = [
  { Location: "Guwhathi", Demand: 26.0 },
  { Location: "Srinagar", Demand: 32.1 },
  { Location: "Chandigarh", Demand: 28.6 },
  { Location: "Delhi", Demand: 244.3 },
  { Location: "Rudrapur", Demand: 38.0 },
  { Location: "NaviMumbai", Demand: 287.7 },
  { Location: "Vijaywada", Demand: 27.7 },
  { Location: "Varanasi", Demand: 32.6 },
  { Location: "Kharagpur", Demand: 21.7 },
  { Location: "Indore", Demand: 54.3 },
  { Location: "Belgaum", Demand: 43.4 },
  { Location: "Bangalore", Demand: 211.7 },
  { Location: "Rajkot", Demand: 38.0 },
  { Location: "Ahmedabad", Demand: 149.3 },
  { Location: "Ludhiana", Demand: 43.4 },
  { Location: "Rourkela", Demand: 40.2 },
  { Location: "Hyderabad", Demand: 184.8 },
  { Location: "Nagpur", Demand: 65.1 },
  { Location: "Coimbatore", Demand: 43.4 },
  { Location: "Kolkata", Demand: 121.9 },
];

// Chart component
const ChartComponent: React.FC<{ data: any[]; title: string }> = ({
  data,
  title,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        // Destroy existing chart if it exists
        Chart.register(LinearScale, RadialLinearScale);
        Chart.getChart(canvasRef.current)?.destroy();

        new Chart(ctx, {
          type: "bar",
          data: {
            labels: data.map((item) => item.Location),
            datasets: [
              {
                label: title,
                data: data.map((item) => item.Supply || item.Demand),
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            animation: {
              duration: 2000,
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, [data, title]);

  return <canvas ref={canvasRef}></canvas>;
};

// Visualization component
const Visualization: React.FC = () => {
  const [isSupply, setIsSupply] = useState(true);

  const toggleGraph = () => {
    setIsSupply(!isSupply);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <button
        onClick={toggleGraph}
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Toggle Graph
      </button>
      <div className="w-full md:w-1/2">
        <h2 className="text-center text-lg font-semibold">
          {isSupply ? "Supply" : "Demand"}
        </h2>
        <ChartComponent
          data={isSupply ? supplyData : demandData}
          title={isSupply ? "Supply" : "Demand"}
        />
      </div>
    </div>
  );
};

export default Visualization;
