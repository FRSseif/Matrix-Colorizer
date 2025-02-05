import React, { useState, useEffect } from "react";

const LocalApi = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/time")
      .then((res) => res.json())
      .then((data) => setDate(data.dateTime))
      .catch((error) => console.error("Error fetching date:", error));
  }, []);

  return (
    <div className="container">
      <h1>Current Date & Time</h1>
      <p>{date || "Loading..."}</p>
    </div>
  );
};

export default LocalApi;
