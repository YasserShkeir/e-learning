import { React } from "react";
import classes from "./stateButton.module.css";

const StateButton = ({ text, onClick }) => {
  return (
    <button className={classes.btn} onClick={onClick}>
      {text}
    </button>
  );
};

export default StateButton;
