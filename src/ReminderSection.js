// ReminderSection.js
import React from "react";
import "./ReminderSection.css"; 

const ReminderSection = () => {
  return (
    <div className="reminder-section-container">
      <div className="reminder-text">Add Reminder</div>
      <button className="reminder-button">+</button>
      <textarea
        className="reminder-textbox"
        placeholder="Customize a reminder message..."
      />
      {/* Add other content for the ReminderSection if needed */}
    </div>
  );
};

export default ReminderSection;
