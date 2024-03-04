import React from "react";
import "./HabitCreation.css"; // Add the path to your ColorSection CSS file

const ColorSection = () => {
  return (
    <div className="color-section">
      <p className="color-label">Color:</p>
      <div>
        <button className="color-button">Black</button>
        {/* Add more color buttons as needed */}
      </div>
    </div>
  );
};

export default ColorSection;
