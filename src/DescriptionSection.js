import React from "react";

const DescriptionSection = () => {
  return (
    <div className="description-section">
      <label htmlFor="habitDescription" className="label section-header-title">
        {" "}
        Description
      </label>
      <textarea
        id="habitDescription"
        placeholder="Enter habit description..."
        rows="4"
        className="textarea"
        style={{ resize: "none", marginBottom: "1em" }}
      />
    </div>
  );
};

export default DescriptionSection;
