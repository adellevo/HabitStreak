// NameSection.js
import React from "react";

const NameSection = () => {
  return (
    <div className="name-section">
      <label htmlFor="habitName" className="label">
        Name:
      </label>
      <input
        type="text"
        id="habitName"
        placeholder="Enter habit name"
        className="input"
      />
    </div>
  );
};

export default NameSection;
