import { useEffect, useState } from "react";
import WelcomeAnimation from "./WelcomeAnimation";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RunModel from "./pages/RunModel";
import Navbar from "./components/Navbar";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showWelcome && <WelcomeAnimation />}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/build" element={<RunModel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
