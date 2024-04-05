// Import React and necessary hooks
import React, { useState } from "react";

// Define your data as a constant
const data = [
  { Port: "Kolkata", City: "Kolkata", Flow: 31.6, Cost_Rs: 0, Cost_Dollars: 0 },
  {
    Port: "Haldia",
    City: "Kolkata",
    Flow: 51.0,
    Cost_Rs: 4.165,
    Cost_Dollars: 0.0595,
  },
  {
    Port: "Paradeep",
    City: "Guwhathi",
    Flow: 26.0,
    Cost_Rs: 49.84,
    Cost_Dollars: 0.712,
  },
  {
    Port: "Paradeep",
    City: "Srinagar",
    Flow: 32.1,
    Cost_Rs: 62.545,
    Cost_Dollars: 0.8935,
  },
  {
    Port: "Paradeep",
    City: "Delhi",
    Flow: 9.1,
    Cost_Rs: 60.165,
    Cost_Dollars: 0.8595,
  },
  {
    Port: "Paradeep",
    City: "Rudrapur",
    Flow: 38.0,
    Cost_Rs: 3.465,
    Cost_Dollars: 0.0495,
  },
  {
    Port: "Paradeep",
    City: "Varanasi",
    Flow: 32.6,
    Cost_Rs: 30.73,
    Cost_Dollars: 0.439,
  },
  {
    Port: "Paradeep",
    City: "Kharagpur",
    Flow: 21.7,
    Cost_Rs: 12.18,
    Cost_Dollars: 0.174,
  },
  {
    Port: "Paradeep",
    City: "Rourkela",
    Flow: 40.2,
    Cost_Rs: 13.79,
    Cost_Dollars: 0.197,
  },
  {
    Port: "Paradeep",
    City: "Kolkata",
    Flow: 39.3,
    Cost_Rs: 15.785,
    Cost_Dollars: 0.2255,
  },
  {
    Port: "Vizag",
    City: "Delhi",
    Flow: 131.1,
    Cost_Rs: 61.88,
    Cost_Dollars: 0.884,
  },
  {
    Port: "Chennai",
    City: "Vijaywada",
    Flow: 27.7,
    Cost_Rs: 15.82,
    Cost_Dollars: 0.226,
  },
  {
    Port: "Chennai",
    City: "Indore",
    Flow: 6.4,
    Cost_Rs: 51.975,
    Cost_Dollars: 0.7425,
  },
  {
    Port: "Chennai",
    City: "Bangalore",
    Flow: 176.2,
    Cost_Rs: 12.145,
    Cost_Dollars: 0.1735,
  },
  {
    Port: "Chennai",
    City: "Hyderabad",
    Flow: 14.7,
    Cost_Rs: 21.91,
    Cost_Dollars: 0.313,
  },
  {
    Port: "Chidambaram",
    City: "Delhi",
    Flow: 96.3,
    Cost_Rs: 84.945,
    Cost_Dollars: 1.2135,
  },
  {
    Port: "Chidambaram",
    City: "Hyderabad",
    Flow: 170.1,
    Cost_Rs: 29.75,
    Cost_Dollars: 0.425,
  },
  {
    Port: "Chidambaram",
    City: "Nagpur",
    Flow: 65.1,
    Cost_Rs: 47.215,
    Cost_Dollars: 0.6745,
  },
  {
    Port: "Kochi",
    City: "Bangalore",
    Flow: 35.5,
    Cost_Rs: 19.18,
    Cost_Dollars: 0.274,
  },
  {
    Port: "Kochi",
    City: "Coimbatore",
    Flow: 43.4,
    Cost_Rs: 6.685,
    Cost_Dollars: 0.0955,
  },
  {
    Port: "Mangalore",
    City: "NaviMumbai",
    Flow: 70.1,
    Cost_Rs: 32.025,
    Cost_Dollars: 0.4575,
  },
  {
    Port: "Mangalore",
    City: "Indore",
    Flow: 27.9,
    Cost_Rs: 48.125,
    Cost_Dollars: 0.6875,
  },
  {
    Port: "Mormugaon",
    City: "Indore",
    Flow: 20.0,
    Cost_Rs: 37.765,
    Cost_Dollars: 0.5395,
  },
  {
    Port: "Mormugaon",
    City: "Belgaum",
    Flow: 43.4,
    Cost_Rs: 4.935,
    Cost_Dollars: 0.0705,
  },
  {
    Port: "JNPT",
    City: "NaviMumbai",
    Flow: 217.6,
    Cost_Rs: 0.91,
    Cost_Dollars: 0.013,
  },
  {
    Port: "DeenDayal",
    City: "Chandigarh",
    Flow: 28.6,
    Cost_Rs: 19.6,
    Cost_Dollars: 0.28,
  },
  {
    Port: "DeenDayal",
    City: "Delhi",
    Flow: 7.8,
    Cost_Rs: 40.915,
    Cost_Dollars: 0.5845,
  },
  {
    Port: "DeenDayal",
    City: "Rajkot",
    Flow: 38.0,
    Cost_Rs: 6.895,
    Cost_Dollars: 0.0985,
  },
  {
    Port: "DeenDayal",
    City: "Ahmedabad",
    Flow: 149.3,
    Cost_Rs: 10.43,
    Cost_Dollars: 0.149,
  },
  {
    Port: "DeenDayal",
    City: "Ludhiana",
    Flow: 43.4,
    Cost_Rs: 45.255,
    Cost_Dollars: 0.6465,
  },
];

const TabularForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const runModel = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowTable(true);
    }, 2000);
  };
  const totalCostRs = 638.35405;
  const totalCostDollars = 446.847835;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-6 max-h-96 overflow-y-auto w-full">
        {!showTable && !loading && (
          <div className="flex flex-col items-center">
            <button
              onClick={runModel}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Run Model
            </button>
            <p className="text-center mt-2">
              Click the button to run the model and display the results.
            </p>
            <p className="text-center mt-2">
              This model takes data about ports, cities, demand, supply and Cost
              Per Km to simulate the flow of goods and calculate shipping costs.
            </p>
          </div>
        )}

        {loading && <p className="text-center">Loading...</p>}

        {showTable && (
          <div>
            <p className="text-center mb-4">
              Total cost will be Rs. {totalCostRs} (lakhs)
            </p>
            <p className="text-center mb-4">
              Total cost will be $ {totalCostDollars} (thousands)
            </p>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Port</th>
                  <th className="px-4 py-2">City</th>
                  <th className="px-4 py-2">Flow</th>
                  <th className="px-4 py-2">Cost (Rs. in thousands)</th>
                  <th className="px-4 py-2">Cost ($ in thousands)</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{item.Port}</td>
                    <td className="border px-4 py-2">{item.City}</td>
                    <td className="border px-4 py-2">{item.Flow}</td>
                    <td className="border px-4 py-2">{item.Cost_Rs}</td>
                    <td className="border px-4 py-2">{item.Cost_Dollars}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabularForm;
