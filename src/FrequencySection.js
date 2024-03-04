// FrequencySection.js
import React from "react";
import "./HabitCreation.css"; // Add the path to your main CSS file

const FrequencySection = () => {
  return (
    <div className="frequency-section">
      <div className="frequency-label">Frequency</div>
      
      {/* First row of buttons */}
      <div className="frequency-row first-row">
        <button className="first-row-button everyday-button">Every Day</button>
        <button className="first-row-button">All Week</button>
        <button className="first-row-button">Weekdays</button>
        <button className="first-row-button">Weekends</button>
      </div>

      {/* Second row of buttons */}
      <div className="frequency-row">
        <button className="second-row-button">Mon</button>
        <button className="second-row-button">Tue</button>
        <button className="second-row-button">Wed</button>
        <button className="second-row-button">Thu</button>
        <button className="second-row-button">Fri</button>
        <button className="second-row-button">Sat</button>
        <button className="second-row-button">Sun</button>
      </div>
    </div>
  );
};

export default FrequencySection;
