import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Download from "./Pages/Download";
import Bonus from "./Pages/Bonus";
import LocalApi from "./Pages/LocalApi";
import Navbar from "./Components/Navbar";
import "./Style/styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/bonus" element={<Bonus />} />
        <Route path="/local-api" element={<LocalApi />} />
      </Routes>
    </Router>
  );
}

export default App;
