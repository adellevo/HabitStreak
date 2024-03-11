// HabitCreation.js
import React, { useState } from "react";
import "./HabitCreation.css";
import NameSection from "./NameSection";
import DescriptionSection from "./DescriptionSection";
import CustomizeSection from "./CustomizeSection";
import FrequencySection from "./FrequencySection";
import HabitTermSection from "./HabitTermSection";
import ReminderSection from "./ReminderSection";
import OverlaySection from "./OverlaySection";
import walkIcon from "./images/walk-icon.jpg";

const HabitCreation = ({ setHabits }) => {
  const [currentHabit, updateCurrentHabit] = useState({
    habitName: "Walk 100 steps",
    icon: walkIcon,
    frequency: "Daily",
    iconColor: "B92025",
    backgroundColor: "#F1D2D3",
  });

  return (
    <div className="habit-creation-container">
      <h1 className="habit-creation-title">New Habit</h1>
      <NameSection />
      <DescriptionSection />
      <CustomizeSection />
      <FrequencySection />
      <HabitTermSection />
      <ReminderSection />
      <OverlaySection currentHabit={currentHabit} setHabits={setHabits} />
    </div>
  );
};

export default HabitCreation;
