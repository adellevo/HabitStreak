import React, { useState } from "react";
import "./HabitCreation.css"; // Add the path to your main CSS file

const RewardPointsSection = () => {
  // State to keep track of the reward points
  const [rewardPoints, setRewardPoints] = useState(1);

  // Function to increment the reward points
  const incrementPoints = () => {
    setRewardPoints(rewardPoints + 1);
  };

  // Function to decrement the reward points, but not below 1
  const decrementPoints = () => {
    if (rewardPoints > 1) {
      setRewardPoints(rewardPoints - 1);
    }
  };

  return (
    <div className="reward-points-container">
      <p className="reward-points-label">Rewards Point(s)</p>
      <div>
        <button
          onClick={decrementPoints}
          className="reward-points-button minus"
        >
          -
        </button>
        <input
          type="text"
          value={rewardPoints}
          onChange={(e) => setRewardPoints(parseInt(e.target.value) || 1)}
          className="reward-points-input"
        />
        <button
          onClick={incrementPoints}
          className="reward-points-button plus"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default RewardPointsSection;
