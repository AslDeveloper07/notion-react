import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <div className="flex bg-[#191919]">
        <Dashboard />
        <Hero />
      </div>
    </div>
  );
};

export default App;
