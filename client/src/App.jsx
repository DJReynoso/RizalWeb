import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import Life from "./components/Life/Life";
import Works from "./components/Works/Works";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="navigation-bar-container">
        <NavigationBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/life" element={<Life />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </>
  );
}

export default App;
