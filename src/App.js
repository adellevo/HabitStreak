import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import MonthToggle from "./MonthToggle";
import Navbar from "./Navbar";
import HabitSection from "./HabitSection";
import WeekToggle from "./WeekToggle";
import HabitCreation from "./HabitCreation";
import drawIcon from "./images/draw-icon.jpg"; // Import drawIcon
import meditateIcon from "./images/meditate-icon.jpg"; // Import meditateIcon

function App() {
  const [isSelectedDay, setSelectedDay] = useState(2);

  const [habits, setHabits] = useState([
    {
      habitName: "Draw for 30 minutes",
      icon: drawIcon,
      frequency: "Mon, Wed",
      iconColor: "#227C9D",
      backgroundColor: "#D3E5EB",
    },
    {
      habitName: "Meditate for an hour",
      icon: meditateIcon,
      frequency: "Daily",
      iconColor: "#468E3B",
      backgroundColor: "#DAE8D8",
    },
  ]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <div className="calendar">
                <MonthToggle />
                <WeekToggle isSelectedDay={isSelectedDay} />
                <HabitSection habits={habits} />
              </div>
              <div className="page-bottom">
                <div className="current-points">
                  <h3>Current Points</h3>
                  <p>393/1000</p>
                </div>
                <Navbar />
              </div>
            </div>
          }
        />
        <Route path="/habitcreation" element={<HabitCreation setHabits={setHabits} />} />
      </Routes>
    </Router>
  );
}

export default App;
