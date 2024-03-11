// OverlaySection.js
import React from "react";
import { Link } from "react-router-dom";
import "./OverlaySection.css";

const OverlaySection = ({ currentHabit, setHabits }) => {
  return (
    <div className="overlay-section">
      <Link to="/" className="overlay-link">
        <button
          className="overlay-button overlay-button-confirm"
          onClick={() => setHabits((prevHabits) => [currentHabit, ...prevHabits])}
        >
          Confirm
        </button>
      </Link>
      <Link to="/" className="overlay-link">
        <button className="overlay-button overlay-button-cancel">Cancel</button>
      </Link>
    </div>
  );
};

export default OverlaySection;
