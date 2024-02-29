import "./App.css";
import { calendar } from "./data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const WeekToggle = ({ isSelectedDay }) => (
  <div>
    <div className="days-container">
      <IoIosArrowBack color="white" size={25} />
      {calendar.map((item) => (
        <Day day={item.day} number={item.number} isSelectedDay={isSelectedDay} />
      ))}
      <IoIosArrowForward color="white" size={25} />
    </div>
  </div>
);

const Day = ({ day, number, isSelectedDay }) => (
  <div className="day" style={{ backgroundColor: number === isSelectedDay && "#FFBC3A" }}>
    <h1>{day}</h1>
    <p>{number}</p>
  </div>
);

export default WeekToggle;
