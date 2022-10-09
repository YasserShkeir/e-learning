import { React } from "react";
import classes from "./FormRow.module.css";

const FormRow = ({ title, inpType, inpName, res }) => {
  return (
    <div className={classes.row}>
      <label>{title}</label>
      <input
        type={inpType}
        id={inpName}
        placeholder={title}
        onChange={(event) => {
          res = event.target.value;
        }}
      />
    </div>
  );
};

export default FormRow;
