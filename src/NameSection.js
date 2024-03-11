// NameSection.js
import React from "react";

const NameSection = () => {
  return (
    <div className="name-section" style={{ marginBottom: "1.5em" }}>
      <label htmlFor="habitName" className="label section-header-title">
        Name
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
