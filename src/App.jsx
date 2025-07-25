import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div>
      <div className="flex bg-[#191919]">
        <Dashboard/>
        <Hero />
      </div>
    </div>
  );
};

export default App;
