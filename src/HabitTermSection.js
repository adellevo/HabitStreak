// HabitTerm.js
import React, { useState } from "react";
import "./HabitTermSection.css"; // Connect to HabitTermSection.css
import DatePicker, { DateObject } from "react-multi-date-picker";

const HabitTerm = () => {
  const [dates, setDates] = useState([
    new DateObject().subtract(4, "days"),
    new DateObject().subtract(4, "days"),
  ]);

  return (
    <div className="habit-term-container">
      <span className="habit-term-text section-header-title">Habit Term</span>
      <p>Select a start and end date for this habit.</p>
      <DatePicker value={dates} onChange={setDates} range />
      {/* Your other content goes here */}
    </div>
  );
};

export default HabitTerm;
