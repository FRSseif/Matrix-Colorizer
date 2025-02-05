import React, { useState, useEffect } from "react";

const Bonus = () => {
  const [imageUrl, setImageUrl] = useState("https://placebear.com/300/300");
  return (
    <div className="container">
      <h1>Random Bear Image</h1>
      <img src={imageUrl} alt="Bear" className="bear-image" />
    </div>
  );
};

export default Bonus;
