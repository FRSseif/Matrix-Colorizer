import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="container">
    <h1>Welcome to the Admin Dashboard</h1>
    <p>Click below to download the Chrome extension.</p>
    <Link to="/download" className="download-link">
      Go to Download Page
    </Link>
  </div>
);

export default Home;
