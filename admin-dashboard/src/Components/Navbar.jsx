import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "10px", backgroundColor: "#008F11", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center" }} role="navigation">
    <div>
      {["/", "/download", "/bonus", "/local-api"].map((path, index) => (
        <Link key={index} to={path} style={{ color: "white", textDecoration: "none", margin: "0 15px", fontSize: "16px" }}>
          {["Home", "Download", "Bonus", "Local API"][index]}
        </Link>
      ))}
    </div>
  </nav>
);

export default Navbar;
