// HabitCreation.js
import React from "react";
import "./HabitCreation.css";
import NameSection from "./NameSection";
import DescriptionSection from "./DescriptionSection";
import CustomizeSection from "./CustomizeSection";
import FrequencySection from "./FrequencySection";
// import HabitTermSection from "./HabitTermSection"; 
import ReminderSection from "./ReminderSection";
import OverlaySection from "./OverlaySection";

const HabitCreation = () => {
  return (
    <div className="habit-creation-container">
      <h1 className="habit-creation-title">New Habit</h1>
      <NameSection />
      <DescriptionSection />
      <CustomizeSection />
      <FrequencySection />
      {/* <HabitTermSection /> */}
      <ReminderSection /> 
      <OverlaySection />
    </div>
  );
};

export default HabitCreation;
