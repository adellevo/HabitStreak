// HabitCreation.js
import React from "react";
import "./HabitCreation.css";
import NameSection from "./NameSection";
import DescriptionSection from "./DescriptionSection";
import CustomizeSection from "./CustomizeSection";
import FrequencySection from "./FrequencySection"; // Import the new component

const HabitCreation = () => {
  return (
    <div className="habit-creation-container">
      <h1 className="habit-creation-title">Create a New Habit</h1>
      <NameSection />
      <DescriptionSection />
      <CustomizeSection />
      <FrequencySection /> 
      {/* Add other sections or components as needed */}
    </div>
  );
};

export default HabitCreation;
