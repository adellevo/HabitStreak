import "./App.css";

const Button = ({ text, icon }) => (
  <div className="button">
    <p>{text}</p>
    {icon}
  </div>
);

export default Button;
