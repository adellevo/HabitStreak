import React from "react";
import "./HabitCreation.css"; // Add the path to your HabitTypeSection CSS file

const HabitTypeSection = () => {
  return (
    <div className="habit-type-section">
      <p className="habit-type-label">Habit Type:</p>
      <div>
        <button className="button-common build-button">Build</button>
        <button className="button-common break-button">Break</button>
      </div>
    </div>
  );
};

export default HabitTypeSection;
