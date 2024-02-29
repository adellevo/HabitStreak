import { calendar } from "./data";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import Button from "./Button";
import "./App.css";

const HabitCard = ({ habitName, icon, frequency, iconColor, backgroundColor }) => (
  <div className="habit-card">
    <div className="header">
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <img
          src={icon}
          alt={habitName}
          width={40}
          height={40}
          style={{ marginRight: "1em" }}
        />
        <div style={{ textAlign: "left" }}>
          <h2
            style={{
              fontSize: "1.1em",
              marginBottom: "0.1em",
              marginTop: "0",
            }}
          >
            {habitName}
          </h2>
          <span
            style={{
              fontSize: "0.9em",
            }}
          >
            <b>Frequency:</b> {frequency}
          </span>
        </div>
      </div>
      <Button text="Edit" icon={<MdEdit />} />
    </div>
    <div className="divider" />
    <div className="progress-container">
      {calendar.map((item) => (
        <DayProgress
          day={item.day}
          iconColor={iconColor}
          backgroundColor={backgroundColor}
          isCompleted={item.completed.includes(habitName)}
        />
      ))}
    </div>
  </div>
);

const DayProgress = ({ day, isCompleted, iconColor, backgroundColor }) => (
  <div className="progress" style={{ backgroundColor: isCompleted && backgroundColor }}>
    <h1>{day}</h1>
    {/* <CheckIcon fill={isCompleted && iconColor} stroke={isCompleted && iconColor} /> */}
    <IoMdCheckmarkCircle size={40} color={isCompleted ? iconColor : "#767676"} />
  </div>
);

export default HabitCard;
