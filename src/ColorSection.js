import React, { useState } from "react";
import "./ColorSection.css"; // Add the path to your ColorSection CSS file
import "./HabitCreation.css";
import { HexColorPicker } from "react-colorful";

const ColorSection = () => {
  const [color, setColor] = useState("#aabbcc");
  const [pickerState, setPickerState] = useState("closed");

  return (
    <div className="color-section">
      <p className="color-label section-header-title">Color</p>
      <div>
        <button
          className="color-button"
          style={{ backgroundColor: color }}
          onClick={() => {
            setColor(color);
            pickerState === "open" ? setPickerState("closed") : setPickerState("open");
          }}
        />
        {pickerState === "open" && <HexColorPicker color={color} onChange={setColor} />}
      </div>
    </div>
  );
};

export default ColorSection;
