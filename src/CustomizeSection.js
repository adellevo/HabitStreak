// CustomizeSection.js
import React from "react";
import IconSection from "./IconSection";
import HabitTypeSection from "./HabitTypeSection";
import ColorSection from "./ColorSection";
import RewardPointsSection from "./RewardPointsSection";

const CustomizeSection = () => {
  return (
    <div className="customize-section">
      <div className="horizontal-section">
        <IconSection />
        <HabitTypeSection />
      </div>
      <div className="horizontal-section">
        <ColorSection />
        <RewardPointsSection />
      </div>
      {/* Add content or components as needed */}
    </div>
  );
};

export default CustomizeSection;
