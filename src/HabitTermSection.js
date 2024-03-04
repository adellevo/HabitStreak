// HabitTerm.js
import React from "react";
import "./HabitTermSection.css"; // Connect to HabitTermSection.css

const HabitTerm = () => {
  return (
    <div className="habit-term-container">
      <span className="habit-term-text">Habit Term</span>
      <div className="button-container">
        <button className="start-button">Start</button>
        <button className="end-button">End</button>
      </div>
      {/* Your other content goes here */}
    </div>
  );
};

export default HabitTerm;
