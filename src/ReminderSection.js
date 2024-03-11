import React, { useState } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import "./ReminderSection.css";

const ReminderSection = () => {
  const [reminders, setReminders] = useState([]);

  const addNewReminder = () => {
    setReminders((prevReminders) => [...prevReminders, new Date()]);
  };

  const handleReminderChange = (index, newTime) => {
    setReminders((prevReminders) => {
      const updatedReminders = [...prevReminders];
      updatedReminders[index] = newTime;
      return updatedReminders;
    });
  };

  return (
    <div className="reminder-section-container">
      <div
        className="reminder-text section-header-title"
        style={{ fontSize: "16px", color: "black" }}
      >
        Add Reminder
      </div>
      <div className="reminder-fields">
        <button className="reminder-button" onClick={addNewReminder}>
          +
        </button>
        {reminders.map((time, index) => (
          <TimePicker
            key={index}
            value={time}
            onChange={(newTime) => handleReminderChange(index, newTime)}
          />
        ))}
      </div>
      <textarea
        id="reminderDescription"
        placeholder="Customize a reminder message..."
        rows="4"
        className="reminder-textbox"
        style={{ resize: "none", marginBottom: "1em", fontSize: "14px" }}
      />
    </div>
  );
};

export default ReminderSection;
