import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import MonthToggle from "./MonthToggle";
import Navbar from "./Navbar";
import HabitSection from "./HabitSection";
import WeekToggle from "./WeekToggle";
import HabitCreation from "./HabitCreation";

function App() {
  const [isSelectedDay, setSelectedDay] = useState(2);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="App">
          <div className="calendar">
            <MonthToggle />
            <WeekToggle isSelectedDay={isSelectedDay} />
            <HabitSection />
          </div>
          <div className="page-bottom">
            <div className="current-points">
              <h3>Current Points</h3>
              <p>393/1000</p>
            </div>
            <Navbar />
          </div>
        </div>} />
        <Route path="/habitcreation" element={<HabitCreation />} />
      </Routes>
    </Router>
  );
}

export default App;
