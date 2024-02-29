import "./App.css";
// import { ReactComponent as CheckIcon } from "./images/check-icon.svg";
import { useState } from "react";
import MonthToggle from "./MonthToggle";
import Navbar from "./Navbar";
import HabitSection from "./HabitSection";
import WeekToggle from "./WeekToggle";

function App() {
  const [isSelectedDay, setSelectedDay] = useState(2);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
