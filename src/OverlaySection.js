// OverlaySection.js
import React from "react";
import { Link } from "react-router-dom";
import "./OverlaySection.css";

const OverlaySection = () => {
  return (
    <div className="overlay-section">
      <Link to="/" className="overlay-link">
        <button className="overlay-button overlay-button-confirm">Confirm</button>
      </Link>
      <Link to="/" className="overlay-link">
        <button className="overlay-button overlay-button-cancel">Cancel</button>
      </Link>
    </div>
  );
};

export default OverlaySection;
