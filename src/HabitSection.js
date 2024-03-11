import "./App.css";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import HabitCard from "./HabitCard";
import Button from "./Button";

const HabitSection = ({ habits }) => (
  <div>
    <div className="habit-header">
      <h1>My Habits</h1>
      <Link to="/habitcreation">
        <Button
          text="Add"
          icon={<IoMdAdd color="white" />}
          style={{ textDecoration: "none" }}
        />
      </Link>
    </div>
    {habits.map((habit) => (
      <HabitCard
        habitName={habit.habitName}
        icon={habit.icon}
        frequency={habit.frequency}
        iconColor={habit.iconColor}
        backgroundColor={habit.backgroundColor}
      />
    ))}
  </div>
);

export default HabitSection;
