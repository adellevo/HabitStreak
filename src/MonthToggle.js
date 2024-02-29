import "./App.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MonthToggle = () => (
  <div className="month-toggle">
    <IoIosArrowBack size={25} />
    <b>January 2024</b>
    <IoIosArrowForward size={25} />
  </div>
);

export default MonthToggle;
