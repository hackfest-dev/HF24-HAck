import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import { useSpring, animated } from "react-spring";
import backgroundImage from "../assets/modelbg.jpg"; // Path to your background image
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import TabularForm from "@/components/TabularForm";
import OutputVisualization from "@/components/OutPutVisualisation";
import Footer from "@/components/Footer";

interface Port {
  name: string;
  position: [number, number];
  supply: number; // New property to represent supply
}

interface City {
  name: string;
  position: [number, number];
  demand: number; // New property to represent demand
}

const RunModel: React.FC = () => {
  const [, setScrollY] = useState<number>(0);
  const [costPerKm, setCostPerKm] = useState<number>(0);
  const [showVisualization, setShowVisualization] = useState(false);
  const [selectedPorts, setSelectedPorts] = useState<Port[]>([]);
  const ports: Port[] = [
    { name: "Kolkata", position: [22.5726, 88.3639], supply: 0 },
    { name: "Haldia", position: [22.025, 88.0583], supply: 0 },
    { name: "Paradeep", position: [20.3168, 86.6709], supply: 0 },
    { name: "Vizag", position: [17.6868, 83.2185], supply: 0 },
    { name: "Chennai", position: [13.0827, 80.2707], supply: 0 },
    { name: "Chidambaram", position: [11.399, 79.6954], supply: 0 },
    { name: "Kochi", position: [9.9312, 76.2673], supply: 0 },
    { name: "Mangalore", position: [12.9141, 74.856], supply: 0 },
    { name: "Mormugaon", position: [15.4023, 73.7884], supply: 0 },
    { name: "JNPT", position: [18.9543, 72.9482], supply: 0 },
    { name: "DeenDayal", position: [23.0258, 72.5873], supply: 0 },
    { name: "Kharagpur", position: [22.346, 87.2314], supply: 0 },
    { name: "Chandigarh", position: [30.7333, 76.7794], supply: 0 },
    { name: "Delhi", position: [28.7041, 77.1025], supply: 0 },
    { name: "Bangalore", position: [12.9716, 77.5946], supply: 0 },
  ];

  const handlePortClick = (port: Port) => {
    const index = selectedPorts.findIndex(
      (selectedPort) => selectedPort.name === port.name
    );
    if (index === -1) {
      setSelectedPorts([...selectedPorts, port]);
    } else {
      const updatedPorts = [...selectedPorts];
      updatedPorts.splice(index, 1);
      setSelectedPorts(updatedPorts);
    }
  };

  const [selectedCities, setSelectedCities] = useState<City[]>([]);
  const cities: City[] = [
    { name: "Guwhathi", position: [26.1445, 91.7362], demand: 0 },
    { name: "Srinagar", position: [34.0837, 74.7973], demand: 0 },
    { name: "Chandigarh", position: [30.7333, 76.7794], demand: 0 },
    { name: "Delhi", position: [28.7041, 77.1025], demand: 0 },
    { name: "Rudrapur", position: [28.9855, 79.4199], demand: 0 },
    { name: "NaviMumbai", position: [19.033, 73.0297], demand: 0 },
    { name: "Vijaywada", position: [16.5062, 80.648], demand: 0 },
    { name: "Varanasi", position: [25.3176, 82.9739], demand: 0 },
    { name: "Kharagpur", position: [22.346, 87.2314], demand: 0 },
    { name: "Indore", position: [22.7196, 75.8577], demand: 0 },
    { name: "Belgaum", position: [15.8497, 74.4977], demand: 0 },
    { name: "Bangalore", position: [12.9716, 77.5946], demand: 0 },
    { name: "Rajkot", position: [22.3039, 70.8022], demand: 0 },
    { name: "Ahmedabad", position: [23.0225, 72.5714], demand: 0 },
    { name: "Ludhiana", position: [30.901, 75.8573], demand: 0 },
    { name: "Rourkela", position: [22.2604, 84.8536], demand: 0 },
    { name: "Hyderabad", position: [17.385, 78.4867], demand: 0 },
    { name: "Nagpur", position: [21.1458, 79.0882], demand: 0 },
    { name: "Coimbatore", position: [11.0168, 76.9558], demand: 0 },
    { name: "Kolkata", position: [22.5726, 88.3639], demand: 0 },
  ];

  const handleCityClick = (city: City) => {
    const index = selectedCities.findIndex(
      (selectedCity) => selectedCity.name === city.name
    );
    if (index === -1) {
      setSelectedCities([...selectedCities, city]);
    } else {
      const updatedCities = [...selectedCities];
      updatedCities.splice(index, 1);
      setSelectedCities(updatedCities);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const updatePortSupply = (name: string, supply: number) => {
    const updatedPorts = selectedPorts.map((port) =>
      port.name === name ? { ...port, supply } : port
    );
    setSelectedPorts(updatedPorts);
  };

  // Function to update demand for cities
  const updateCityDemand = (name: string, demand: number) => {
    const updatedCities = selectedCities.map((city) =>
      city.name === name ? { ...city, demand } : city
    );
    setSelectedCities(updatedCities);
  };

  // Define animations for text
  const textAnimationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1000,
  });

  return (
    <div className="min-h-screen">
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={backgroundImage}
        bgImageAlt="background"
        strength={-400}
        className="w-full h-screen flex justify-center items-center"
      >
        <animated.div
          className="text-white text-center p-8"
          style={textAnimationProps}
        >
          <h1 className="text-4xl font-bold mb-4">Steps for Taking Input</h1>
          <ol className="text-lg mb-4 text-left">
            <li>
              First input for the port, airport, and railway station is taken.
            </li>
            <li>List of possible MMLPs to be set up.</li>
            <li>Distance between all ports and MMLPs.</li>
            <li>Supply and demand for each port and MMLP.</li>
            <li>Uniform cost per km for freight transport.</li>
          </ol>
        </animated.div>
      </Parallax>

      <div className="mx-10 md:mx-36 border border-white px-10 md:px-24">
        <h1 className="text-xl md:text-3xl font-semibold text-center underline p-4 md:p-10">
          Input
        </h1>
        <p className="py-2">Select the Ports, Airports and Railway station</p>
        <div className="flex flex-col h-screen">
          <MapContainer center={[20, 80]} zoom={6} className="flex-grow">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {ports.map((port, index) => (
              <Marker
                key={index}
                position={port.position}
                eventHandlers={{ click: () => handlePortClick(port) }}
              >
                <Popup>{port.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Selected Ports:</h2>
            <div className="flex flex-wrap">
              {selectedPorts.map((port, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-full py-2 px-4 m-1 text-black"
                >
                  {port.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="py-2 pt-10">Select the cities to set up the MMLP</p>
        <div className="flex flex-col h-screen">
          <MapContainer center={[20, 80]} zoom={6} className="flex-grow">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {cities.map((city, index) => (
              <Marker
                key={index}
                position={city.position}
                eventHandlers={{ click: () => handleCityClick(city) }}
              >
                <Popup>{city.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Selected Cities:</h2>
            <div className="flex flex-wrap">
              {selectedCities.map((city, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-full py-2 px-4 m-1 text-black"
                >
                  {city.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Selected Ports</h2>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2 bg-gray-200 text-black">Port</th>
                  <th className="px-4 py-2 bg-gray-200 text-black">Supply</th>
                  <th className="px-4 py-2 bg-gray-200 text-black">
                    Update Supply
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedPorts.map((port, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{port.name}</td>
                    <td className="border px-4 py-2">{port.supply}</td>
                    <td className="border px-4 py-2">
                      <input
                        type="number"
                        value={port.supply}
                        onChange={(e) => {
                          const newSupply = parseInt(e.target.value);
                          updatePortSupply(port.name, newSupply);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Selected Cities</h2>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2 bg-gray-200 text-black">City</th>
                  <th className="px-4 py-2 bg-gray-200 text-black">Demand</th>
                  <th className="px-4 py-2 bg-gray-200 text-black">
                    Update Demand
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedCities.map((city, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{city.name}</td>
                    <td className="border px-4 py-2">{city.demand}</td>
                    <td className="border px-4 py-2">
                      <input
                        type="number"
                        value={city.demand}
                        onChange={(e) => {
                          const newDemand = parseInt(e.target.value);
                          updateCityDemand(city.name, newDemand);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Supply and Demand Update Button */}
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6"
          onClick={() => {
            console.log(selectedPorts);
            console.log(selectedCities);
          }}
        >
          Update Supply and Demand
        </button>
      </div>
      <div className="flex justify-center my-16">
        <label className="text-lg font-semibold mr-2">
          Cost per Kilometer for Freight Transport:
        </label>
        <input
          type="number"
          value={costPerKm}
          onChange={(e) => setCostPerKm(parseInt(e.target.value))}
          className="border rounded px-2 py-1"
        />
      </div>
      <TabularForm />
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6"
          onClick={() => setShowVisualization(!showVisualization)}
        >
          {showVisualization ? "Hide Visualization" : "Show Visualization"}
        </button>
      </div>
      {showVisualization && <OutputVisualization />}
      <Footer />
    </div>
  );
};

export default RunModel;
