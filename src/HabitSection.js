import "./App.css";
import { IoMdAdd } from "react-icons/io";
import drawIcon from "./images/draw-icon.jpg";
import meditateIcon from "./images/meditate-icon.jpg";
import HabitCard from "./HabitCard";
import Button from "./Button";

const HabitSection = () => (
  <div>
    <div className="habit-header">
      <h1>My Habits</h1>
      <Button text="Add" icon={<IoMdAdd color="white" />} />
    </div>
    <HabitCard
      habitName="Draw for 30 minutes"
      icon={drawIcon}
      frequency="Mon, Wed"
      iconColor="#227C9D"
      backgroundColor="#D3E5EB"
    />
    <HabitCard
      habitName="Meditate for an hour"
      icon={meditateIcon}
      frequency="Daily"
      iconColor="#468E3B"
      backgroundColor="#DAE8D8"
    />
  </div>
);

export default HabitSection;
