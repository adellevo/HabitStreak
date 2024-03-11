// FrequencySection.js
import React from "react";
import "./FrequencySection.css"; // Add the path to your main CSS file
import "./HabitCreation.css";

const FrequencySection = () => {
  return (
    <div className="frequency-section" style={{ marginTop: "1.5em" }}>
      <div className="frequency-label section-header-title" style={{ fontSize: "16px" }}>
        Frequency
      </div>

      {/* First row of buttons */}
      <div className="frequency-row first-row">
        <button className="first-row-button everyday-button">Daily</button>
        <button className="first-row-button">Weekly</button>
        <button className="first-row-button">Only weekdays</button>
        <button className="first-row-button">Only weekends</button>
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
