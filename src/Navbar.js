import "./App.css";
import homeIcon from "./images/home-icon.png";
import personIcon from "./images/person-icon.png";
import statsIcon from "./images/stats-icon.png";
import rewardsIcon from "./images/rewards-icon.png";
import settingsIcon from "./images/settings-icon.png";

const Navbar = () => (
  <div className="navbar">
    <img src={homeIcon} alt="home" />
    <img src={personIcon} alt="person" />
    <img src={statsIcon} alt="stats" />
    <img src={rewardsIcon} alt="rewards" />
    <img src={settingsIcon} alt="settings" />
  </div>
);

export default Navbar;
