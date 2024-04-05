import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Port {
  name: string;
  position: [number, number];
}

const ports: Port[] = [
  { name: "Kolkata", position: [22.5726, 88.3639] },
  { name: "Haldia", position: [22.025, 88.0583] },
  { name: "Paradeep", position: [20.3168, 86.6709] },
  { name: "Vizag", position: [17.6868, 83.2185] },
  { name: "Chennai", position: [13.0827, 80.2707] },
  { name: "Chidambaram", position: [11.399, 79.6954] },
  { name: "Kochi", position: [9.9312, 76.2673] },
  { name: "Mangalore", position: [12.9141, 74.856] },
  { name: "Mormugaon", position: [15.4023, 73.7884] },
  { name: "JNPT", position: [18.9543, 72.9482] },
  { name: "DeenDayal", position: [23.0258, 72.5873] },
  { name: "Kharagpur", position: [22.346, 87.2314] },
  { name: "Chandigarh", position: [30.7333, 76.7794] },
  { name: "Delhi", position: [28.7041, 77.1025] },
  { name: "Bangalore", position: [12.9716, 77.5946] },
];

const MapComponent: React.FC = () => {
  const handleMarkerClick = (portName: string) => {
    alert(`Clicked on ${portName}`);
  };

  return (
    <div className="w-full h-80 relative"> {/* Adjusted the height */}
      <MapContainer center={[20.5937, 78.9629]} zoom={5} className="w-full h-full"> {/* Adjusted the height */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {ports.map((port) => (
          <Marker key={port.name} position={port.position} eventHandlers={{ click: () => handleMarkerClick(port.name) }}>
            <Popup>{port.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
