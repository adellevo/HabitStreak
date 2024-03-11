// IconSection.js
import React, { useState } from "react";
import "./IconSection.css"; // Import your updated CSS file
import "./HabitCreation.css";
import IconPicker from "react-icons-picker";

const IconSection = () => {
  const [value, setValue] = React.useState();

  return (
    <div className="icon-section">
      <p style={{ marginRight: "0.8em" }} className="section-header-title">
        Icon
      </p>
      <IconPicker value={value} onChange={(v) => setValue(v)} />
    </div>
  );
};

export default IconSection;
